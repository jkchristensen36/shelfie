const express = require('express');
const ctrl = require('./controller');
const app = express();
const port = 3005


app.listen(port, () => console.log(`Server listening on port ${port}.`));