#!/usr/bin/node

const express = require('express');
const router = require('./routes/index');

const app = express();
//app.set('json spaces', 4)
app.use(express.json());
app.set('json spaces', 2)

app.use(router);

app.listen(3000, () => {
  console.log('server is running')});
