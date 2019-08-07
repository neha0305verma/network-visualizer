//setup the neo4J data driver
const neo4j = require('./../neo4jDriverUtility');

var fileExport = (format) => {
    return neo4j.neo4jRunQuery("MATCH (p) OPTIONAL MATCH (p)-[r]-(q) return p,r,q")
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(err => {
            console.log('err occured while run initial query', err);
            return Promise.reject("error occured while retriving data from database");
        });
}

module.exports = { fileExport }