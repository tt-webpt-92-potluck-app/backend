# backend

Project Guidelines: https://www.notion.so/Potluck-Planner-cc216a2434e94f9fb98285a5175050d3
Product Vision Document: https://docs.google.com/document/d/15jAz2uH0ZU8g7Dr7sX5Buia0mLydwZIeZGHFno-FtKM/edit?usp=sharing


# Potluck Application

Deployed Backend: https://tt-webpt-92-potluck-app.herokuapp.com/

Potluck Event Planner provides a web application that allows a user to create events in their profile as well as add various details about the potluck. Once a user adds a potluck, they are able to invite other users to attend their event and food items for the potluck. The application could be used for any type of event and is not limited to just potluck events.

# Build With

Node.js - JavaScript runtime for executing JavaScript at the server outside the browser
Express.js - Lightweight web framework to bootstrap Node.js APIs
SQLite3 - Super lightweight database to bootstrap development environments
PostgreSQL - An advanced object-relational database for production environments
Knex.js - A SQL query builder that helps abstracting migrations and DDLs for different database types into a single coherent structure
Bcrypt.js - A module to help make passwords more secure
CORS - A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options
Helmet - A collection of 14 smaller middleware functions that set HTTP response headers
JWT - JSON Web Token for authorization and client side tokens for security
Supertest - A test module for HTTP assertions
Jest - A simple JavaScript testing framework
Dotenv - a zero-dependency module that loads environment variables from a .env file into process.env


# Endpoints

JWT protected (header) ✔️
A JWT protected endpoint means that a header object, which contains a key called Authorization with the value being a JSON web token, must be passed along with the API call in order to gain access to the endpoint.


# Register and Login a User

GET [API RUNNING]

https://tt-webpt-92-potluck-app.herokuapp.com/

POST [REGISTER A USER]

https://tt-webpt-92-potluck-app.herokuapp.com/api/register

Example Request Body:

{
  "username": "user", // required
  "password": "password", // required
  "firstName": "test", // required
  "lastName": "test" // required
}


POST [LOGIN A USER]

https://tt-webpt-92-potluck-app.herokuapp.com/api/login

Example Request Body:

{
  "username": "user", // required
  "password": "password", // required
}


# Potlucks

GET [POTLUCK BY ID]

https://tt-webpt-92-potluck-app.herokuapp.com/potlucks/:id


GET [POTLUCKS BY USER ID(ORGANIZER)]
Get all the potlucks organized by a user

https://tt-webpt-92-potluck-app.herokuapp.com/users/organized


GET [POTLUCKS BY USER ID(ORGANIZER)]
Get all the potlucks a user is attending as a guest - GET

https://tt-webpt-92-potluck-app.herokuapp.com/users/attending?isAttending=true

GET [POTLUCKS BY USER ID(ORGANIZER)]
Get all potlucks for which the user has not yet responded to invitations

https://tt-webpt-92-potluck-app.herokuapp.com/users/attending?isAttending=false

POST [ADD A POTLUCK]

https://tt-webpt-92-potluck-app.herokuapp.com/potlucks

PUT [UPDATE A POTLUCK]

https://tt-webpt-92-potluck-app.herokuapp.com/potlucks/:id

DELETE [POTLUCK BY ID]

https://tt-webpt-92-potluck-app.herokuapp.com/potlucks/:id
