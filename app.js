const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const file = require('./utils/paths');
const jsonParser = bodyParser.json();
const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', jsonParser, adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(file.webPages, '404.html'));
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});
