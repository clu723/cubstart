const { response } = require("express");
const express = require("express"); // import express
const app = express(); // run application

// get parameters: (path, function)
app.get('/', (req, res) => {
    res.send("Hello World!");
})

// gets the info from form made in index.html and sends it to the webserver
app.get('/process_get', (req, res) => {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
    }
    console.log(response);
    res.send(response);
})

// run website on a local port
app.listen(8080, () => {
    console.log("Demo listening on 8080");
})
