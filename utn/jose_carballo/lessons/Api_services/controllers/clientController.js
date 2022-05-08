const Clients = require('../models/Clients');

exports.newClient = async(req,res, next) =>{
    const client = new Clients(req.body);
    try {
        await client.save()
        res.json({
            msg:'client created success',
            client
        })
    } catch (error) {
        res.status(500).json({
            msg:' hubo un error',
            error
        })
        next();
    }
};

exports.getAllClients = async(req,res,next) => {
    try {
        const clients = await Clients.find({});
        res.json(clients)
    } catch (error) {
        res.status(500).json({
            msg:' hubo un error',
            error
        })
        next();
    }
}