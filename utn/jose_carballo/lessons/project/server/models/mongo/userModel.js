const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El nombre es Obligatorio"],
      },
      email: {
        type: String,
        required: [true, "El email es Obligatorio"],
        unique: true
      },
      password: {
        type: String,
        required: [true, "El el password es Obligatorio"],
        trim: true,
      },
      avatar: {
        type: String,
        required: [true, "El el avatar es Obligatorio"],
      },
      image: {
        type: String,
        trim: true,
      }
});
console.log("Using model user with mongodb");
const User = mongoose.model('User', UserSchema);

const customFindOne = async (objectToFind) => await User.findOne({email:objectToFind}).exec();

const customFind = async () => await User.find({}).exec();

const customFindById = async (id) => await User.findById(id).exec();
  
const customFindNameAvatar = async (obj) => await User.findOne({ avatar: obj }).exec();

const customFindEmail = async (obj) => await User.findOne({ email: obj }).exec();

const customCreate = async (objectToCreate) => {
    const user = new User(objectToCreate);
    await user.save();
    return user;
};

const customUpdate = async (dataToUpdate, objectToFind) => await User.updateOne(objectToFind, dataToUpdate);

User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customFindNameAvatar = customFindNameAvatar;
User.customFindEmail = customFindEmail;
User.customFindById = customFindById;
User.customFind = customFind;
User.customUpdate = customUpdate;

module.exports = User;
