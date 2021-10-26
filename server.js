// !!NOTE: When changes are made you must stop and restart app to see changes on browser

// Using express package
const express = require('express');
const app = express();
const port = 3000;

// Including the path package
const path = require('path');

// Include body parser for post request
const bodyParser = require('body-parser');

// Allows you to parse the body of a HTTP request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Creating our routes - listening for a HTTP request to URL
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!');
})

// Add a new path to the server
app.get('/hello/:name', (req, res) => {
    console.log(req.params.name); // Testing
    // Sends name specified in the URL to the page
    res.send('Hello ' + req.params.name);
})

// Adding a route point to return JSON data
app.get('/api/movies', (req, res) => {

    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ]

    // Data being sent from the server to the client - API displayed in the browser
    res.json({ movies: myMovies });
})

// Adding a route that returns a HTML page
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

// Adding a route from index.html form action to the server
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
})

// Adding a route point that's listening for a post being passed up to \name
app.post('/name', (req, res) => {
    // Logic thats going to listen to the post request
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

// Setting up Web server - listening at port 3000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})