#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");
const inquirer = require("inquirer");

const sourceDir = path.join(__dirname, "../"); 

const promptForDirectory = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "directory",
      message:
        "Enter the directory where you want to set up the Express app (or '.' for current directory):",
      default: ".", 
    },
  ]);

  return answers.directory;
};

const setupExpressApp = async () => {
  try {
    const selectedDir = await promptForDirectory();

    const destinationDir =
      selectedDir === "."
        ? process.cwd()
        : path.resolve(process.cwd(), selectedDir);
    if (!fs.existsSync(destinationDir)) {
      console.log(`Creating directory: ${destinationDir}`);
      fs.mkdirSync(destinationDir);
    }

    console.log("Creating project to the selected directory...");
    fs.copySync(sourceDir, destinationDir, {
      overwrite: false,
      filter: (src) => {
        const relativePath = path.relative(sourceDir, src);
        return !relativePath.startsWith("scripts");
      },
    });

    console.log("Express App Created successfully!");

    const packageJsonPath = path.join(destinationDir, "package.json");
    if (!fs.existsSync(packageJsonPath)) {
      console.log("Initializing package.json...");
      exec("npm init -y", { cwd: destinationDir }, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error initializing package.json: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        console.log(stdout);
      });
    } else {
      console.log("package.json already exists, skipping npm init.");
    }

    console.log("Installing dependencies...");
    exec(
      "npm install",
      { cwd: destinationDir },
      (installError, installStdout, installStderr) => {
        if (installError) {
          console.error(
            `Error installing dependencies: ${installError.message}`
          );
          return;
        }
        if (installStderr) {
          console.error(`stderr: ${installStderr}`);
          return;
        }
        console.log(installStdout);
        console.log("Dependencies installed successfully!");
      }
    );
  } catch (err) {
    console.error("Error during setup:", err);
  }
};

setupExpressApp();
