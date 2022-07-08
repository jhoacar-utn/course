const mongoose = require("mongoose");
const { stringify } = require("querystring");

const userScheema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
    image: String
})

const User = mongoose.model('User',userScheema);


const customFindOne = async (userToFind) => {
    return await User.findOne(userToFind).exec();
    
}

const customFindAll = async () => {
    return await User.find({}).select('avatar');
}

const customCreate = async (userData) => {

    const user = new User(Userdata);
    await user.save();
    return user;
    
}

User.customFindOne = customFindOne;
User.customFindAll = customFindAll;
User.customCreate = customCreate;

module.exports = User;
