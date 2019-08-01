// use lodash as a helper
const _ = require('lodash');
const colorManager = require('./graphColorManager');

var seperateNodes = [];
var seperateEdges = [];

var Neo4JtoVisFormat = (data) => {
    // clean the data containers before processing
    seperateNodes = [];
    seperateEdges = [];
    if (!data.length) {
        console.error('Data provided to serialilze is not good enough, review you data', data);
    } else {
        // data is okay now time to serialize it.
        try {
            data = JSON.parse(data);
            data.forEach((dataNode, index) => {
                // node are at index 0 and 1, edge is at position 2
                let realNodes = dataNode._fields;
                realNodes.forEach(someData => {
                    if (someData.hasOwnProperty('start') && someData.hasOwnProperty('end')) {
                        // this someData is an edge
                        seperateEdges.push(someData);
                    } else {
                        //it is a node
                        seperateNodes.push(someData);
                    }
                });
                /* let node1 = dataNode._fields[0];
                let node2 = dataNode._fields[1];
                let edge = dataNode._fields[2];
                // push them seperately
                seperateNodes.push(node1);
                seperateNodes.push(node2);
                seperateEdges.push(edge); */
            });
        } catch (e) {
            console.error('An error occured while processing the data in the serializer', e);
        }
        // now serialize according to the expected visJS format
        /**
         * Nodes should be array of objects
         * Edges should be array objects with each object having from and to key also
         */
        try {
            seperateNodes = processNodes(seperateNodes);
            seperateEdges = processEdges(seperateEdges);
        } catch (e) {
            console.error('An error occured while serializing the edges accordingly', e);
        }
        // if there was no error in the processing of data, simply return the new collection
        return { seperateNodes, seperateEdges };
    }
}

function serializeProperties(propertyObject) {
    if (propertyObject.constructor === Object) {
        let finalString = '';
        _.forOwn(Object.keys(propertyObject), (key) => {
            if (propertyObject[key].hasOwnProperty('low')) {
                // if the key has an integer value then set the low value of it
                propertyObject[key] = propertyObject[key]['low']
            }
            finalString += `<strong>${key} :</strong> ${propertyObject[key]} <br>`
        });
        return finalString;
    } else return null
}

function processNodes(nodeArray) {
    let processedNode = [];
    console.log("done");
    var x = 5;
    console.log(x);
    let preprocessedNodeFiltered = [];
    if (nodeArray.length > 0) {
        // serialize edges accordingly
        try {
            processedNode = nodeArray.map(node => {
                let preprocessedNode = node;
                // if the node has a label key, add it to the properties key also for processing
                if (node.hasOwnProperty('labels') && node.labels.length > 0) {
                    node.properties['Type'] = node.labels[0];
                }
                preprocessedNode = {
                    properties: node.properties || null,
                    type: node.labels || null,
                    id: node.identity.low,
                    label: node.properties.Name || 'No Name',
                    font: { align: 'middle' },
                    value: 30,
                    title: serializeProperties(node.properties),
                }
                return preprocessedNode;
            });
            // make them unique
            preprocessedNodeFiltered = _.unionBy(processedNode, 'id');
        } catch (e) {
            throw e;
        }
        //if edges are properly processed, simply return them as is
        return preprocessedNodeFiltered;
    } else {
        return [];
    }
}

function processEdges(edgeArray) {
    let processedEdge = [];
    if (edgeArray.length > 0) {
        // serialize edges accordingly
        try {
            processedEdge = edgeArray.map(edge => {
                let preprocessedEdge = edge;
                preprocessedEdge = {
                    from: edge.start.low,
                    to: edge.end.low,
                    properties: edge.properties || null,
                    type: edge.type || null,
                    identity: edge.identity || null,
                    label: edge.type || 'Name not available',
                    arrows: 'to',
                    font: { align: 'bottom' },
                    title: serializeProperties(edge.properties),
                    color: colorManager.getEdgeColors(edge.type)
                }
                return preprocessedEdge;
            });
        } catch (e) {
            throw e;
        }
        //if edges are properly processed, simply return them as is
        return processedEdge;
    } else {
        return [];
    }
}

var processRelations = (relations) => {
    if (!!relations.length) {
        try {
            let data = JSON.parse(relations);

            // data is ready now process it
            let extractedData = [];
            data.forEach(record => {
                if (record.hasOwnProperty('_fields')) {
                    extractedData.push({type : record._fields[0], properties : record._fields[1]});
                }
            });
            return extractedData;
        }
        catch (e) {
            // Error occured while parsing the data
            console.error('Error occured while parsing the relations data in processRelations() ->', e);
        }
    }
    else {
        // the relations string is empty
        console.error('Cannot parse an empty string ---> error in processRelations()');
    }
}


module.exports = {
    Neo4JtoVisFormat,
    processRelations
}