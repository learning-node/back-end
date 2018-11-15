const express = require('express');
const app = express();
const PORT = 3000;
const search = require('./controllers/google.js');

app.get('/search/:term', search);

app.use((req, res, next) => res.send(`I'm sorry Dave. I can't do that.`));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
