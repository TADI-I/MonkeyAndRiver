# MonkeyAndRiver


## Stack Choice:
We've chosen a full-stack application using React for the frontend and Node.js for the backend, with PostgreSQL as our relational database. This stack provides a robust and scalable foundation for building complex web applications.

## Setup Steps:

1. Clone the Repository

bash
git clone https://github.com/TADI-I/MonkeyAndRiver.git


2. Install Dependencies
Frontend

bash
cd frontend
npm install


Backend

bash
cd backend
npm install


Database

bash
npm install pg


3. Set up PostgreSQL Database
1. Install PostgreSQL on your machine.
2. Create a new database:

CREATE DATABASE monkeyandriver_db;

3. Update the config.js file in the backend directory with your PostgreSQL database credentials.

4. Start the Application
Frontend

bash
cd frontend
npm start


Backend

bash
cd backend
node app.js


5. Verify DB Connectivity
Access the healthcheck endpoint (/healthcheck) to verify database connectivity.

## Features:

- User Profile and Preferences: View and edit name, email, password, notification preferences, and toggle dark/light mode.
- Alerts Dashboard: Display a list of alert records from the database, with timestamp, title, and status.

Authentication and Authorization:

- Implemented JWT-based authentication to secure routes and protect sensitive data.
- All feature routes are protected behind authentication.

## Project Structure:

The project is structured into two main directories: frontend and backend. The frontend directory contains the React application, while the backend directory contains the Node.js server and database configuration.
