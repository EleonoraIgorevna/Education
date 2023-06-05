module.exports = function (app) {

    app.get('/users/:id', (req, res) => {

        // #swagger.tags = ['User']
        // #swagger.description = 'Описание метода 1'
        // #swagger.parameters['id'] = { description: 'Идентификатор клиента.' }

        /* #swagger.parameters['filtro'] = {
           in: 'query',
               description: 'Query параметр.',
               type: 'string'
        } */

        // содвание квери параметра
        const filtro = req.query.filtro

        if (false)
            return res.status(404).send(false)

        /* #swagger.responses[200] = { 
               schema: { $ref: "#/definitions/User" },
               description: 'Информация о пользователе.' 
        } */
        let data = {
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
        };

        return res.status(200).send(data)

    })



    app.post('/users', (req, res) => {
        /* #swagger.tags = ['User']
           #swagger.description = 'Добавление пользователя.' */

        /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Информация о пользователе.',
               required: true,
               schema: { $ref: "#/definitions/AddUser" }
        } */

        const newUser = req.body;

        let data = {
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
        };

        if (true) {
            // #swagger.responses[201] = { description: 'Успешно зарегистрированный пользователь!' }
            return res.status(201).send(data)
        }
        return res.status(500)    // #swagger.responses[500]
    })



}