const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
            require: true
        },
        password: String,
        avatar: {
            type: String,
            unique: true
        },
        image: String
    },
    {
        versionKey: false,
        timestamps: true
    }
);

console.log(`Using mongodb's Schema`);

const User = mongoose.model('User', UserSchema);

const Find = async () => {
    return await User.find({}).exec();
};

const FindOne = async (objectToFind) => {
    return await User.findOne(objectToFind).exec();
};

const Create = async (objectToCreate) => {
    const user = new User(objectToCreate);
    await user.save();
    return user;
};

const Update = async (dataToUpdate, objectToFind) => {
    return await User.updateOne(objectToFind, dataToUpdate);
};
User.Find = Find;
User.FindOne = FindOne;
User.Create = Create;
User.Update = Update;

module.exports = User;
