const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
});

const customFindOne = async (objectQuery) => {
    return await User.findOne(objectQuery).lean().exec();
}

const User = mongoose.model('User', userSchema);

User.first = customFindOne;

module.exports = User;