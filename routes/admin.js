require('dotenv').config()
const router = require('express').Router();
const checkApiKey = require('../middleware/checkApiKey');
const validateEntry = require('../middleware/validateEntry');
const addItem = require('../middleware/addItem');
const deleteItem = require('../middleware/deleteItem');
const getAllItems = require('../middleware/getAllItems');

// admin/items
router.get('/items', checkApiKey, getAllItems)

router.post('/add-item', checkApiKey, validateEntry, addItem);

router.delete('/delete-item', checkApiKey, deleteItem);

router.put('/update-item', checkApiKey, (req, res, next) => {
    return res.status(204).json({message: 'Entry Updated Successfully'})
})



module.exports = router