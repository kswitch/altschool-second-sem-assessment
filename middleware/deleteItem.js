const path = require('path');

const file = require('../utils/paths')
const checkIfItemExists = require('../utils/checkIfItemExist');
const readFromDisk = require('../utils/readData');
const writeToDisk = require('../utils/writeData');

function deleteItem(req, res, next) {
    try {
        const data = readFromDisk();
        const result = JSON.parse(data);
        const item = checkIfItemExists(result, req.body, res);

        if (!item.statusCode) {
            const updatedData = result.filter(item => item.id !== req.body.id);
            writeToDisk(updatedData);
            res.status(204).json({message: 'Entry Deleted Successfully', entry: item}); 
        }
    } 
    catch (error) {
        console.log(`Something Went Wrong: ${error}`);
        return res.status(404).sendFile(path.join(file.webPages, '404.html'));
    }
}

module.exports = deleteItem;