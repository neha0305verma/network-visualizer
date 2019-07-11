const neo4j = require('neo4j-driver').v1;

//import config file for database
const neoConfig = require('./database_config/config.json');

//import serializer to serialize for visJS format
const serializer = require('./utility/serializer');

const {user,password} = neoConfig;

let neo4Jdriver;
var session;

var runQuery = (query) => {
    if (!!query.length) {
        return session.run(query);
    } else {
        console.error('Empty query passed');
        throw Error;
    }
}

var initiate = () => {
    if(!user) {
        console.error('No User provided, make sure you have entered the user in database_config/config.json --->', user);
    } else if (!password) {
        neo4Jdriver = neo4j.driver(neoConfig.url, neo4j.auth.basic(neoConfig.user, ''))
    } else {
        neo4Jdriver = neo4j.driver(neoConfig.url, neo4j.auth.basic(neoConfig.user, neoConfig.password))
    }
    session = neo4Jdriver.session();
}

var getData = (query) => {
    if(!query || query.length <= 0) {
        query = neoConfig.initial_query
    }
    return runQuery(query)
    .then(result => {
        let serializedData = serializer.Neo4JtoVisFormat(JSON.stringify(result.records));
        console.log('serialized data is ',serializedData.seperateNodes.length, serializedData.seperateEdges.length);
        neo4Jdriver.close();
        return new Promise ((res,rej) => {
            if (serializedData.seperateNodes.length > 0 ||  serializedData.seperateEdges.length > 0) {
                console.log('successfully returining the request');
                res(serializedData);
            } else {
                console.log('error while returning data');
                rej('Both are empty in serialized data');
            }
        });
    })
    .catch(err => {
        console.log('an error occured while retrieving', err);
        neo4Jdriver.close();
    });
}

module.exports = {
    initiate,
    getData
}
