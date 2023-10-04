const { validationResult } = require('express-validator');
const writeToDisk = require('../utils/writeData');
const readFromDisk = require('../utils/readData');

function addItem(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    if(!req.query) {
        try {
            const newItem = { ...req.body };
            const data = readFromDisk();
            const result = JSON.parse(data);
            result.push(newItem);
            writeToDisk(result);
            return res.status(201).json({message: 'Entry Created Successfully', entry: newItem});
        } 
        catch (error) {
            console.log(`Something Went Wrong: ${error}`);
            return res.status(404).sendFile(path.join(file.webPages, '404.html'));
        }
    }

    return res.status(400).json({message: 'Bad Request, please check URL'})
}

module.exports = addItem;