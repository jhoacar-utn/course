const fetch = require("node-fetch");
const {api} = require("../database");
const {url} = api;

const isConnectedApi = async ()=>{
    return await fetch(url);
}

module.exports = isConnectedApi;