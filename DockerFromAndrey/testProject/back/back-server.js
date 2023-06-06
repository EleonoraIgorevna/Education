//Этот файл нужен, чтобы раздавать контент из index.html
const express = require("express");
const app = express();
const cors = require("cors");

//Добавляем библиотеку cors - иначе когда мы будет делать запрос на бек, то будет отображаться ошибка, что не разрешено с локал хост с 3002 на 3003 делать запрос

app.use(cors({ origin: 'http://localhost:8888' }));

app.get('/api/data', (req, res) => {
    let obj = {
        key: 'value',
        key1: 'value1'
    }
    res.json(obj);
})

app.listen(9999, () => console.log("Back started"));