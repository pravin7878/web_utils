# mvc-express-setup

**mvc-express-setup** is a simple and customizable backend setup for building web applications using **Express.js** and **MongoDB** with **Mongoose** in a **Model-View-Controller (MVC)** architecture. This package provides a ready-to-use project structure with essential configuration files, making it easier to get started with backend development.

---

## 🛠 Features

- 🚀 Fully configured **Express.js** server setup
- 🗄 MongoDB connection with **Mongoose**
- 🔑 Basic **MVC** architecture (Models, Views, Controllers)
- 🌱 Simple API setup for easy extension
- 🔒 Environment configuration with **dotenv**
- ⚡ Supports **nodemon** for automatic reloading during development

---

## 🚀 Installation

- To use this package in your project, simply install it via npm:
  ```
    npm install mvc-express-setup
  ```     
- Or, if you prefer to quickly set up the Express server, you can run the setup command directly:

    ```
    npx setup-express
    ```

- This will automatically generate the basic folder structure and files needed for your project.

## 📂 Project Structure
- After setting up, your project will have the following structure:
   ```
    my-project/
    ├── src/
    │   ├── config/
    │   │   └── db.js            # MongoDB connection configuration
    │   ├── controllers/
    │   │   └── exampleController.js  # Controller for handling API logic
    │   ├── models/
    │   │   └── exampleModel.js   # Mongoose model
    │   ├── routes/
    │      └── exampleRoutes.js  # API routes
    ├──.env                  # Environment variables (e.g., DB URI)
    ├── server.js             # Main server file
    └── package.json              # Project dependencies and scripts
    ```
#### Setup and Configuration
 - Environment Configuration
   - This package uses a .env file to configure environment variables. The .env file is required for       storing sensitive information like the MongoDB connection URI and other configuration values.
    Example .env file:
    ```
     PORT = <you can run on any port>
     MONGO_URI = <your mongo db connection string>
    ```
  - Make sure to set up your MongoDB URI (MONGO_URI) and any other necessary environment variables.

#### Starting the Server
- You can start the server by running the following command and If you want to change this command you can change by package.json     
    ```
       npm run start
    ```
- This will start the server using the nodemon package for automatic reloading during development.

#### 🔧 Usage
 - After setting up the project, you can extend it by adding your own routes, controllers, and models.
   Now you don't need to same basic setup code again and again you can start your real code after setup this project directly by CLI only.

#### 📝 Available Scripts
  - Start the server: Run npm start to start the server.
  - Run with nodemon: For automatic server reloading, run npx nodemon src/server.js.
  - Run tests: You can add tests to your project (optional).

#### 📦 Available Dependencies
  - express: Web framework for Node.js
  - mongoose: MongoDB object modeling for Node.js
  - dotenv: Loads environment variables from a .env file
  - nodemon: Automatically restarts the server during development

