// Все маршруты вынесены в отдельные файлы routers/web.js и класс router из express
// middlewares/app3.js по Никонову 3 урок

const express = require('express');
 const path = require('path'); // здесь он уже не нужен
const router = require('../routes/web');
const app = express();

app.use('/static', express.static(__dirname + '/../public/assets'));

app.use('/', router);
app.use(require('./ehandler'));

module.exports = app; 