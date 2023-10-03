const fs = require('fs')
const file = require('./paths')

function readData() {
    return fs.readFileSync(file.dataFile)
}

module.exports = readData