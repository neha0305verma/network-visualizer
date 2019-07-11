var visGraphOptions = {
    "physics": false,
    "edges": {
        "smooth": {
            "type": "continuous",
            "forceDirection": "none"
            }
    },
    "nodes": {
        "shape": "dot",
        "scaling": {
            customScalingFunction: function (min,max,total,value) {
                return value/total;
            },
            "min":5,
            "max":150
        }
    }
};