const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const productControllers = reuqire('../controllers/productControllers')

module.exports = () =>{
    router.post('/clients', clientController.newClient)
    router.get('/clients', clientController.getAllClients)
    router.get('/clients/:id', clientController.getClientById)
    router.put('/clients/:id', clientController.updateClientById)
    router.delete('/clients/:id', clientController.deleteClientById)

    router.post('/products', productControllers.newProduct)

    return router;
}