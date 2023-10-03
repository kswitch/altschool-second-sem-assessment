const fs = require('fs')
const file = require('./paths')

function writeData(data) {
    return fs.writeFileSync(file.dataFile, JSON.stringify(data, null, 2))
}

module.exports = writeData