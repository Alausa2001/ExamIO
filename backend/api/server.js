#!/usr/bin/node

const express = require('express');
const cors = require('cors');
const router = require('./routes/index');

const app = express();
//app.set('json spaces', 4)
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.listen(3000, () => {
  console.log('server is running')});
