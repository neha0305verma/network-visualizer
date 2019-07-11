const colorConfig = require('./../color_config/config.json');

let getNodeColor = () => {
    if (colorConfig.hasOwnProperty('node') && !!colorConfig.node ) {
        return colorConfig.node
    }
    return null
}
let getEdgeColors = (label) => {
    let colorObj = {
        color: '#97c2fc', highlight: '#239cff'
    };

    if (!!label && label.length) {
        if (colorConfig.hasOwnProperty('edges') && JSON.stringify(colorConfig.edges).length > 0) {
            colorObj =  {
                color: colorConfig.edges[label] || '#97c2fc', 
                highlight: colorConfig.edges.highlight || colorConfig.edges[label] || '#239cff'
            };
        } else {
            colorObj = {
                color: '#97c2fc', highlight: '#239cff'
            }
        }
    }
    return colorObj;
}

module.exports = {
    getNodeColor,
    getEdgeColors
}