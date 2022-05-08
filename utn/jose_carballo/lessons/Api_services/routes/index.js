const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

module.exports = () =>{
    router.post('/clients', clientController.newClient)
    router.get('/clients', clientController.getAllClients)

    return router;
}