// use lodash as a helper
const _ = require('lodash');

var Neo4JtoJsonFormat = (data) => {
    // clean the data containers before processing
    let allLabelData = {};
    let name = [];


    if (!data.length) {
        console.error('Data provided to serialilze is not good enough, review you data', data);
    } else {
        // data is okay now time to serialize it.
        try {
            data = JSON.parse(data);
            data[0].keys.forEach(key => {
                if (true) {
                    //check for dot
                    if (true) {
                        // check for tild
                        allLabelData[key] = [];
                    } else {
                        allLabelData[key] = [];
                    }
                }

            });
            data.forEach((properties, index) => {
                // Extract keys 

                let propertiesArray = properties._fields;
                propertiesArray.forEach((property, i) => {
                    if (property) {
                        // store property with respective keys
                        // use index in both this&allLabelData
                    }
                });
            });
        } catch (e) {
            console.error('An error occured while processing the data in the labelserializer', e);
        }
        return allLabelData;
    }
}

module.exports = {
    Neo4JtoJsonFormat
}