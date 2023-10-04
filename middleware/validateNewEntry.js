const { body } = require('express-validator');

const validateNewEntry = [
    body('id').trim().notEmpty().isFloat({ min: 0 }).withMessage('ID must be a positive number'),
    body('name').trim().notEmpty().bail().withMessage('Name is required'),
    body('price').trim().notEmpty().bail().withMessage('Price is requiredd'),
    body('size').trim().notEmpty().bail().withMessage('Size is required'),
];

module.exports = validateNewEntry