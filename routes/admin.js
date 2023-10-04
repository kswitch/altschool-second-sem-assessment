require('dotenv').config()
const router = require('express').Router();

const checkApiKey = require('../middleware/checkApiKey');
const validateNewEntry = require('../middleware/validateNewEntry');
const validateUpdatedEntry = require('../middleware/validateUpdatedEntry');
const getAllItems = require('../middleware/getAllItems');
const addItem = require('../middleware/addItem');
const deleteItem = require('../middleware/deleteItem');
const updateItem = require('../middleware/updateItem');

// admin/items
router.get('/items', checkApiKey, getAllItems)

// admin/add-item
router.post('/add-item', checkApiKey, validateNewEntry, addItem);

// admin/delete-item
router.delete('/delete-item', checkApiKey, deleteItem);

// admin/update-item
router.put('/update-item', checkApiKey, validateUpdatedEntry, updateItem)

module.exports = router