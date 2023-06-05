// const app = require('express')()
let express = require("express");
let app = express();
app.use(express.json());

// const http = require('http')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
let port = 3000;

// http.createServer(app).listen(3000);
// console.log("Listening at:// port:%s (HTTP)", 3000);

// the server started
app.listen(port, () => {
    console.log("API app started. http://127.0.0.1:3000");
});


// he middleware responsible for creating a Swagger graphical interface
// ratingProject - нейминг проекта
app.use('/ratingProject', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// and the endpoints
require('./endpoints')(app)

// http://localhost:3000/ratingProject