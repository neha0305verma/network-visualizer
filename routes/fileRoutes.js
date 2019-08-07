const express = require('express');
const router = express.Router();

//setup the neo4J data driver
const file_utility = require('./../utility/fileUtility');

router.use(express.json());

router.get('/graph/export/:type', (req, res) => {
    console.log('graph export');
    let format_type = req.params.type;
    // file export as specified by user
    file_utility.fileExport(format_type)
        .then(response => {
            res.send(response);
        })
        .catch(err => {
            console.log('err occured while graph export operation ', err);
            res.sendStatus(500);
        });
});

module.exports = router;