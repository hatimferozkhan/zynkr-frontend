// Import express and dotenv
const express = require('express');
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

const app = express(); // Create an express app
const port = process.env.PORT || 5000; // Set port for the server

// A simple route
app.get('/', (req, res) => {
    res.send('Hello World!'); // Response when you visit the homepage
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
 
