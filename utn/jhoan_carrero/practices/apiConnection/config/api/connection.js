const fetch = require("node-fetch");
const {api} = require("../database");
const {url} = api;

const isConnectedApi = async ()=>{
    await fetch(url);
}

module.exports = isConnectedApi;