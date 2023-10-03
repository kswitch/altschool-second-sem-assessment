const { check } = require('express-validator');

const validateEntry = [
    check('id').isFloat({ min: 0 }).withMessage('ID must be a positive number'),
    check('name').not().isEmpty().withMessage('Name is required'),
    check('price').not().isEmpty().withMessage('Price must be a positive number'),
    check('size').not().isEmpty().withMessage('Size is required'),
];

module.exports = validateEntry