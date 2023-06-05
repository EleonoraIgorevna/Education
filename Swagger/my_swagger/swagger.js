const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./endpoints.js']

// swaggerAutogen(outputFile, endpointsFiles)

const doc = {
    info: {
        version: "1.0.0",
        title: "Rating Project",
        description: "Свагер для проекта Рейтинг."
    },
    host: "localhost:3000",
    // basePath - This is the root of your project
    basePath: "/",
    // Although we don’t use HTTPS in this article, I added it only for educational purposes, but you can choose HTTP and/or HTTPS
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    /*
    It is a given goal, that is, it will be the groups of endpoints
    within your API. An API can have, for example, a “Users” tag and 
    a tag called “Books” to separate the endpoints.
    */
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    // These are your inputs and outputs
    definitions: {
        User: {
            name: "Jhon Doe",
            age: 29,
            parents: {
                father: "Simon Doe",
                mother: "Marie Doe"
            },
            diplomas: [
                {
                    school: "XYZ University",
                    year: 2020,
                    completed: true,
                    internship: {
                        hours: 290,
                        location: "XYZ Company"
                    }
                }
            ]
        },
        AddUser: {
            $name: "Jhon Doe",
            $age: 29,
            about: ""
        }
    }
}

// if I want the swagger_output.json file to be generated every time I start the project
swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js')
})