const path = require('path');
const file = require('../utils/paths');
const readFromDisk = require('../utils/readData')
const checkIfItemExists = require('../utils/checkIfItemExist');

function getAllItems(req, res, next) {
    try {
        const data = readFromDisk();
        const result = JSON.parse(data)
        
        if (!Object.keys(req.query).length) {
            res.status(200).type('application/json').send(result);
        }
        else {
            const output = checkIfItemExists(result, req.query, res)
            res.status(200).type('application/json').send(output);
        }
    } 
    catch (error) {
        console.log(`Something Went Wrong: ${error}`);
        res.status(404).sendFile(path.join(file.webPages, '404.html'));
    }
}

module.exports = getAllItems