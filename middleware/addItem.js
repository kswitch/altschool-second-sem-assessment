const { validationResult } = require('express-validator');
const writeToDisk = require('../utils/writeData');
const readFromDisk = require('../utils/readData');

function addItem(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const newItem = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price,
            size: req.body.size,
        };
        const data = readFromDisk();
        const result = JSON.parse(data);
        result.push(newItem);
        console.log(result);
        writeToDisk(result);
        return res.status(201).json({message: 'Entry Created Successfully', entry: newItem});
    } 
    catch (error) {
        console.log(`Something Went Wrong: ${error}`);
        return res.status(404).sendFile(path.join(file.webPages, '404.html'));
    }
}

module.exports = addItem;