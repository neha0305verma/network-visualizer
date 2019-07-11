const express = require('express')
const app = express()
const port = 3050

//setup the neo4J data driver
const neo4j = require('./neo4jDriverUtility');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/initialdata', (req, res) => {
    // get initial data from the data base
    neo4j.getData().then(response => {
        res.send(response);
    }).catch(err => {
        console.log('err occured while sending back ', err);
        res.sendStatus(500);
    });
});

app.listen(port, () => {
    neo4j.initiate();
    console.log(`vis app server listening on port ${port}!`);
});