const express = require('express');
const app = express();
const PORT = 3000;
const search = require('./controllers/google.js');

app.get('/search/:term', search);

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
