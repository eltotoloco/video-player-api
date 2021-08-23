// ./src/index.js

// importing the dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const HistoryController = require('./Controller/HistoryController.js');
const BookmarksController = require('./Controller/BookmarksController.js');


// defining the Express app
const app = express();
const port = process.env.port || 8000;

// using bodyParser from express 4.16+ to parse JSON bodies into JS objects
app.use(express.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.use('/history',HistoryController)
app.use('/bookmarks',BookmarksController)


// starting the server
app.listen(port, () => {
  console.log('listening on port ' + port);
});