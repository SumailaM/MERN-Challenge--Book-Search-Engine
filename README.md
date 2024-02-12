# MERN Challenge: Book Search Engine
 
Book Search Engine

    This project is a Book Search Engine built with the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to search for books using the Google Books API and save them to their profile.

Table of Contents

    Overview
    Features
    Technologies
    Setup
    Deployment
    Contributing
    License

Overview

    The Book Search Engine project aims to refactor a fully functioning Google Books API search engine, originally built with a RESTful API, to use GraphQL queries and mutations with Apollo Server. This allows for more efficient data fetching and modification. Additionally, the existing authentication middleware is modified to work seamlessly with the GraphQL API.

Features

    Search for books using the Google Books API
    Save books to user profile
    View saved books
    Remove saved books from profile
    User authentication and authorization
    GraphQL API integration
Technologies

    MongoDB: NoSQL database for storing user profiles and saved books
    Express.js: Web application framework for Node.js
    React: JavaScript library for building user interfaces
    Node.js: JavaScript runtime environment
    Apollo Server: GraphQL server implementation for Node.js
    GraphQL: Query language for APIs
    JWT (JSON Web Tokens): Authentication mechanism for user sessions
    Render: Cloud platform for deploying web applications

Setup
    Clone the Repository:

    -git clone https://github.com/SumailaM/MERN-Challenge--Book-Search-Engine.git
Navigate to the Project Directory:

    -cd book-search-engine
Install Dependencies:


    -npm install

    Set Up Environment Variables:

    Create a .env file in the root directory.
    Add environment variables for MongoDB connection URI, Google Books API key, and any other necessary configurations.

Start the Development Server:

    sql
    npm start
Open the Application:

    Open your web browser and navigate to http://localhost:3000 to access the Book Search Engine.

Deployment

    To deploy the application to Render, follow these steps:

Sign Up for Render: If you haven't already, sign up for a Render account at https://render.com/.

Create a New Web Service:

Choose GitHub as the repository source.
Connect to your GitHub repository.
Configure the deployment settings.

Set Environment Variables:

    Add environment variables for production, such as MongoDB connection URI and Google Books API key, in the Render dashboard.

Deploy the Application:

Click the "Deploy" button in the Render dashboard to deploy the application.
Access the Deployed Application:

Once the deployment is complete, access your application using the provided URL.

License
This project is licensed under the MIT License.






