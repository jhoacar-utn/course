const fetch = require("node-fetch");
const { api } = require("../../config/database");
const { url } = api;

const User = {};

console.log("Using model user with api");

const customCreate = async (objectToCreate) => {

    const response = await fetch(url + "/users", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objectToCreate),
    });

    return await response.json();
};



User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customUpdate = customUpdate;

module.exports = User;