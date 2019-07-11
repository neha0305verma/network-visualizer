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
            data.forEach((dataNode,index) => {
                // node are at index 0 and 1, edge is at position 2
                let node1 = dataNode._fields[0];
                let node2 = dataNode._fields[1];
                let edge = dataNode._fields[2];
                // push them seperately
                seperateNodes.push(node1);
                seperateNodes.push(node2);
                seperateEdges.push(edge);
            });
        }
        catch (e) {
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
        return {seperateNodes,seperateEdges};
    }
}

function serializeProperties(propertyObject) {
    if (propertyObject.constructor === Object) {
        let finalString = '';
        _.forOwn(Object.keys(propertyObject), (key)=>{
           finalString += `<strong>${key} :</strong> ${propertyObject[key]} <br>`
        });
        return finalString;
    } else return null
   }

function processNodes(nodeArray) {
    let processedNode = [];
    let preprocessedNodeFiltered = [];
    if (nodeArray.length > 0) {
        // serialize edges accordingly
        try {
            processedNode = nodeArray.map(node => {
                let preprocessedNode = node;
                preprocessedNode = {
                    properties: node.properties || null,
                    type: node.type || null,
                    id: node.identity.low,
                    label: node.properties.Name || 'No Name',
                    font: {align: 'middle'},
                    value: node.properties.Name.length || 30,
                    title: serializeProperties(node.properties),
                }
                return preprocessedNode;
            });
            // make them unique
            preprocessedNodeFiltered = _.unionBy(processedNode, 'id');
        }
        catch (e) {
            throw e;
        }
        //if edges are properly processed, simply return them as is
        return preprocessedNodeFiltered;
    }
    else {
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
                    font: {align: 'bottom'},
                    title: serializeProperties(edge.properties),
                    color: colorManager.getEdgeColors(edge.type)
                }
                return preprocessedEdge;
            });
        }
        catch (e) {
            throw e;
        }
        //if edges are properly processed, simply return them as is
        return processedEdge;
    }
    else {
        return [];
    }
}


module.exports = {
    Neo4JtoVisFormat
}