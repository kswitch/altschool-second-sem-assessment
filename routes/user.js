const path = require('path');

const express = require('express');
const router = express.Router();
const file = require('../utils/paths');
const getAllItems = require('../middleware/getAllItems');

router.get('/', (req, res, next) => {
    res.status(200).type('html').sendFile(path.join(file.webPages, 'index.html'));
});

router.get('/index.html', (req, res, next) => {
    res.status(200).type('html').sendFile(path.join(file.webPages, 'index.html'));
});

router.get('/api/v1/items', getAllItems);

module.exports = router;