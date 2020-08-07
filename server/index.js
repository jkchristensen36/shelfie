require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
})



app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}.`);
})