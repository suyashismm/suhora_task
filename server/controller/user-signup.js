const eventUser = require('../model/user-schema');


const userSignUp = async (request, response) => {
    try {
        const exist = await eventUser.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        console.log(user);
        const newUser = new eventUser(user);
        await newUser.save();
        response.status(200).json({ mesage: user });
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}



module.exports = userSignUp;
