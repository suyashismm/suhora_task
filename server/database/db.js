const mongoose = require('mongoose');

const Connection = async (username, password) => {
    
    const URL = `mongodb+srv://${username}:${password}@cluster0.4snxf6l.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error in connecting to database: ', error.message);
    }

};

module.exports=Connection;

