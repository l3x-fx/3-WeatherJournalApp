// Setup empty JS object to act as endpoint for all routes
let projectData = {
    temp: '',
    date: '',
    feel: ''
};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();


/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000; 
const server = app.listen(port, ()=> {
    console.log('Server is running')
}) 

app.get('/all', (request, response) => {
    response.send(projectData);
})

app.post('/addEntry', (request, response) => {
    projectData.temp = request.body.temp;
    projectData.date = request.body.date;
    projectData.feel = request.body.feel;
    response.send(projectData)
})

