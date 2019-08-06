const express = require('express')
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3050

//setup the neo4J data driver
const neo4j = require('./neo4jDriverUtility');

/* app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
 */
app.use(cors());

const graphRoutes = require('./routes/graphRoutes');

app.use('/api', graphRoutes);
app.use('/v2', express.static(path.join(__dirname, 'client/dist/')));
app.use('/d3', express.static(path.join(__dirname, 'client/dist/')));

app.use(express.static(path.join(__dirname, 'client/dist/')));



app.listen(port, () => {
    neo4j.initiate();
    console.log(`network visualizer server is burining on ${port}!`);
});