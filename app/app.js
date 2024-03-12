const express = require('express');
const app = express();

const home = require('./src/routes/home')

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use('/', home); // use -> 미들 웨어를 등록해주는 매서드.

module.exports = app;