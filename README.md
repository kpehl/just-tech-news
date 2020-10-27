# Just Tech News

## Project Description
This application creates the database and back-end structure for a news aggregate site called "Just Tech News," where a user can add articles, as well as comment, and vote on them, similar to Hacker News. 

## Tools Used to Create This Project
* JavaScript ES6
* Node.js
* Express.js
* dotenv (npm package used to store environmental variables used in a project locally so sensitive data like root passwords are not exposed on GitHub)
* MySQL
* Sequelize (npm package for integrating MySQL and Node.js)
* bcrypt (npm package for password hashing)
* Heroku

## Usage
The application is deployed on Heroku at https://quiet-thicket-58359.herokuapp.com/

There is currently no front end, so the browser can only be used to access API endpoints.  For instance, to view all the users in the database, enter https://quiet-thicket-58359.herokuapp.com/api/users

Alternatively, use the application of your choice, such as Insomnia Core or Postman to access the API endpoints.  With an application, you can test out adding, updating, and deleting users; logging in as a user; adding, updating, and deleting posts; adding an upvote to a post; adding and deleting a comment; getting information on all users; getting information on a single user; getting all posts; getting a single post; and getting all comments.

For sample data and API endpoint URLs, see [sample data](sample_data.md)
