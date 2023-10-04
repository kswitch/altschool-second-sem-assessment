const { body } = require('express-validator');

const validateUpdatedEntry = [
    body('id').optional().trim().isFloat({min: 0}).bail(),
    body('name').optional().trim().isString(),
    body('price').optional().trim().isString(),
    body('size').optional().trim().isString(),
];

module.exports = validateUpdatedEntry