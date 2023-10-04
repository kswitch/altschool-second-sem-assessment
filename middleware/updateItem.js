const path = require('path');

const { validationResult } = require('express-validator');

const file = require('../utils/paths')
const checkIfItemExists = require('../utils/checkIfItemExist');
const readFromDisk = require('../utils/readData');
const writeToDisk = require('../utils/writeData');

function updateItem(req, res, next) {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const data = readFromDisk();
        const result = JSON.parse(data);
        const item = checkIfItemExists(result, req.query, res);

        const updatedItem = { ...req.body};

        if (!item.statusCode) {
            const index = result.findIndex((item) => item.id === req.query.id);
            result[index] = {...result[index], ...updatedItem};
            writeToDisk(result);
            return res.status(200).json({message: 'Item Updated Successfully', entry: result[index]}); 
        }
    } 
    catch (error) {
        console.log(`Something Went Wrong: ${error}`);
        return res.status(404).sendFile(path.join(file.webPages, '404.html'));
    }
}

module.exports = updateItem