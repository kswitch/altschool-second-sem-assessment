require('dotenv').config()
const router = require('express').Router();
const checkApiKey = require('../middleware/checkApiKey');
const validateEntry = require('../middleware/validateEntry');
const addItem = require('../middleware/addItem');
const deleteItem = require('../middleware/deleteItem');
const getAllItems = require('../middleware/getAllItems');

// admin/items
router.get('/items', checkApiKey, getAllItems)

// admin/add-item
router.post('/add-item', checkApiKey, validateEntry, addItem);

// admin/delete-item
router.delete('/delete-item', checkApiKey, deleteItem);


// admin/update-item
router.put('/update-item', checkApiKey, (req, res, next) => {
    return res.status(204).json({message: 'Entry Updated Successfully'})
})

module.exports = router