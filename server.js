// Server for the Just Tech News project

// Dependencies
// Express.js server
const express = require('express');
// All routes as defined and exported in the routes folder
const routes = require('./routes');
// Sequelize connection to the database
const sequelize = require('./config/connection');

// Initialize the server
const app = express();
// Define the port for the server
const PORT = process.env.PORT || 3001;

// Have Express parse JSON and string data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on the routes
app.use(routes);

// Turn on connection to db and then to the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});