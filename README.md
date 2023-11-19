# MovieFlix
## Project Overview

MovieFlix is a full-stack CRUD (Create, Read, Update, Delete) application built using React and Node.js that enables users to manage a collection of movies. It features a user-friendly interface, search functionality, secure authentication, and a comprehensive backend server.

## Key Features

->Comprehensive Movie Management: Users can effortlessly manage their    movie collection by adding, updating, and deleting movies.

->Advanced Search Functionality: Utilize advanced search filters to find movies based on actor name, director name, release year, and language.

->Secure User Authentication: Restrict unauthorized access to sensitive actions using a secure user authentication system.

->Robust Backend Server: A well-structured backend server handles data storage, user management, and API requests.

# Getting Started
## Prerequisites
To run MovieFlix, ensure you have the following installed:

->Node.js (Version 16 or higher)

->npm (Node Package Manager)

# Installation and Setup
## FRONT END

1. Clone the MovieFlix repository from GitHub:

### `git clone https://github.com/logeshloki585/Movie-application-frontend`

2. Modify the endpoint URL in the client-side code to point to the local backend server:

## "open client/src/assests/Container.jsx"

### `Replace ENT_POINT with http://localhost:5000`

3. Navigate to the Movie-application-frontend and start the project by:

### `npm start`

## BACK END

1. Clone the MovieFlix repository from GitHub:

### `https://github.com/logeshloki585/Movie-application-backend`

2. Add .env file and add: (example)

### `JWT_SECRET_KEY= abcd`
### `MONGOOSE_URI = mongodb+srv://admin:password@.nr5hcl9.mongodb.net/?retryWrites=true&w=majority`
### `PORT = 5000` 


3.  Navigate to the Movie-application-BACKEND and start the project by:

### `npm start`

## YOU CAN ABLE TO UNDERSTAND THE WHOLE WORKING OF THIS APPLICATION WITH THIS FLOWCHAT

![FLOW CHART](./src/Assests/flowchart.jpg)


## Authentication

MovieFlix employs a secure authentication system to protect user data and restrict unauthorized access. Users must register and log in to perform actions like adding, updating, or deleting movies.

## Security
-> MovieFlix implements various security measures to safeguard user data and prevent malicious attacks, including:

-> Data Encryption: User passwords and other sensitive information are stored in encrypted form.

-> Input Validation: User inputs are thoroughly validated to prevent code injection or malicious data entry.

-> Session Management: User sessions are securely managed to ensure that only authorized users can access their accounts.
