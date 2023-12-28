const eventUser = require('../model/user-schema');

const userLogin = async (request, response) => {
    try {
        let user = await eventUser.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json({data: user});
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

module.exports = userLogin;