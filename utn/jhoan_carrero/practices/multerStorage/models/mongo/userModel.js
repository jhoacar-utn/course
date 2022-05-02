const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    avatar: String,
});

const customFindOne = async (objectQuery) => {
    return await User.findOne(objectQuery).exec();
}

userSchema.methods.first = customFindOne;

const User = mongoose.model('User', userSchema);

module.exports = User;