# PayTM Clone Application

Welcome to the PayTM Clone Application repository! I developed this project as part of the 100xDevs Cohort 2 by Harkirat Singh.

## Overview

This PayTM Clone Application aims to replicate some of the core functionalities of the popular payment platform PayTM. It allows users to perform various actions such as signing up, logging in, checking balances, and sending money to other users.

## Features

- User authentication (signup, login)
- Account creation with random balances
- Displaying user balance
- Searching and viewing other users
- Sending money to other users
- Supports concurrency
- Minimal yet beautiful UI

## Technologies Used

### Frontend

- React
- Axios for HTTP requests
- React Router for navigation

### Backend

- Node.js with Express.js
- MongoDB for database management
- JWT for user authentication
- Bcrypt for password hashing
  
## Getting Started

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/harshalgunjal69/paytm.git
    ```

2. Navigate to the `frontend` directory and run `npm install` to install frontend dependencies.

    ```bash
    cd frontend
    npm instal
    ```

3. Navigate to the `backend` directory and run `npm install` to install backend dependencies.

    ```bash
    cd backend
    npm install
    ```

4. Run the mongodb docker instance using the dockerfile provided. Make sure you are in the root directory.

    ```bash
    docker build ./ -t mongodb:4.7-replset
    docker run --name mongodb-repltset -p 27017:27017 -d mongodb:4.7-replset
    ```

    If you do not have `docker` installed, first install it. Refer to this link: [Official Docker Installation Site](https://docs.docker.com/engine/install/)

5. Start the backend server by running `npm start` in the `backend` directory.

    ```bash
    npm start
    ```

6. Start the frontend development server by running `npm run dev` in the `frontend` directory.

    ```bash
    npm run dev
    ```

7. Access the application in your browser at [http://localhost:5173](http://localhost:5173).
