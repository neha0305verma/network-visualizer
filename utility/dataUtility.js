function processProperties(objectName, dataProperties) {
    if (Object.keys(dataProperties).length > 0) {
        // has some properties, now convert them
        if (!!objectName) {
            let query = [];
            Object.keys(dataProperties).forEach(key => {
                query.push(`${objectName}.\`${key}\` = "${dataProperties[key]}"`)
            });
            // join all the sub queries
            let completeQuery = query.join(',');
            return completeQuery;
        }
        else {
            // no reference object name provided, cannot create a new query
            return ''
        }
    }
    else return '';
}

var createUpdateNodeQuery = (data) => {
    if (data.hasOwnProperty('type') && data.hasOwnProperty('id')) {
        // node has the previous id and type, find the node using these and update the properties
        let query = `match (targetNode : \`${data.type[0]}\` ) where id(targetNode) = ${data.id} set`;
        let subQuery = '';
        let returnQuery = 'return targetNode';
        // subquery will store the data of properties to update
        subQuery = processProperties('targetNode',data.properties);
        // join all the queries
        let finalQuery = `${query} ${subQuery} ${returnQuery}`
        return finalQuery;
    } else return '';
}

module.exports = {
    createUpdateNodeQuery
}