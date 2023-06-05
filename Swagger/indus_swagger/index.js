const express = require("express");
const app = express();
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJsDocs = YAML.load("./api.yaml");
app.use(express.json());


let users = [
    {
        id: 1,
        name: "Tom"
    },
    {
        id: 2,
        name: "Mike"
    },
    {
        id: 3,
        name: "Alex"
    }];


app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));


app.get("/string", (req, res) => { res.status(200).send("Hello") });


app.get("/user", (req, res) => {

    let obj = {
        id: 1,
        name: "Tom Cruise"
    };
    res.status(200).send(obj);

});

app.get("/users", (req, res) => { res.status(200).send(users) });

app.get("/users/:id", (req, res) => {
    const obj = users.find(x => x.id == req.params.id);
    console.log(obj);
    res.status(200).send(obj)
});


app.post("/create", (req, res) => {
    console.log(req.body);
    const obj = [req.body, ...users];
    res.status(200).send(obj)
});


app.get("/usersQuery", (req, res) => {
    const obj = users.find(x => x.id == req.query.id);
    res.status(200).send(obj)
});


app.get("/upload", (req, res) => {

});



app.listen(5000, () => ("UP"))