const Sequelize = require('sequelize');

// Initialize Sequelize with your MySQL database credentials
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test the database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Define your models and their associations here

// Export the Sequelize instance for use in other parts of your application
module.exports = sequelize;
