//Этот файл нужен, чтобы раздавать контент из index.html
const express = require("express");
const app = express();

app.use('/', express.static('public'));
app.listen(8888, () => console.log("Front started"));
