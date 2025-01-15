#!/usr/bin/env node
const fs = require("fs-extra");
const path = require("path");
const { exec } = require("child_process");
const inquirer = require("inquirer").default; // Ensure default export if required

const sourceDir = path.join(__dirname, "../");

const promptForDirectory = async () => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "directory",
        message:
          "Enter the directory where you want to set up the Express app (or '.' for current directory):",
        default: ".", // Default to current directory
      },
    ]);

    return answers.directory;
  } catch (error) {
    console.error("Error during prompt:", error);
  }
};

// Promisify exec to use async/await
const execPromise = (command, options = {}) =>
  new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
      if (error) {
        reject(`Error executing command: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(`stderr: ${stderr}`);
        return;
      }
      resolve(stdout);
    });
  });

const setupExpressApp = async () => {
  try {
    const selectedDir = await promptForDirectory();

    const destinationDir =
      selectedDir === "."
        ? process.cwd()
        : path.resolve(process.cwd(), selectedDir);

    // Create directory if it doesn't exist
    if (!fs.existsSync(destinationDir)) {
      console.log(`Creating directory: ${destinationDir}`);
      fs.mkdirSync(destinationDir);
    }

    console.log("Creating project in the selected directory...");
    fs.copySync(sourceDir, destinationDir, {
      overwrite: false,
      filter: (src) => {
        const relativePath = path.relative(sourceDir, src);
        return !relativePath.startsWith("scripts"); // Skip copying the 'scripts' folder
      },
    });

    console.log("Express App Created successfully!");

    const packageJsonPath = path.join(destinationDir, "package.json");
    if (!fs.existsSync(packageJsonPath)) {
      console.log("Initializing package.json...");
      await execPromise("npm init -y", { cwd: destinationDir });
      console.log("package.json initialized successfully!");
    } else {
      console.log("package.json already exists, skipping npm init.");
    }

    console.log("Installing dependencies...");
    await execPromise("npm install", { cwd: destinationDir });
    console.log("Dependencies installed successfully!");
  } catch (err) {
    console.error("Error during setup:", err);
  }
};

setupExpressApp();
