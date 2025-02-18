// Import express
const express = require('express');

// Create an instance of express
const app = express();

// Set the port the server will listen on
const port = process.env.PORT || 3000;

//Establish connection to db
// const db = require('./config/connection');

// Require path to routes
const routes = require('./routes');

//Hide passwords
// var dotenv = require('dotenv');

// Middleware (if needed)
app.use(express.json());


// Middleware to routes
app.use(routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
