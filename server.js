const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
});

app.use(bodyParser.json());
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url)
    .then((res) => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...');
        process.exit();
    });

app.get('/', (req, res) => {
    res.json({ "message": "Welcome to my Application" });
});


require('./app/routes/note.routes.js')(app);

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

