const Clients = require("../models/Clients");

exports.newClient = async (req, res, next) => {
  const client = new Clients(req.body);
  try {
    await client.save();
    res.json({
      msg: "client created success",
      client,
    });
  } catch (error) {
    res.status(500).json({
      msg: " hubo un error",
      error,
    });
    next();
  }
};

exports.getAllClients = async (req, res, next) => {
  try {
    const clients = await Clients.find({});
    res.json(clients);
  } catch (error) {
    res.status(500).json({
      msg: " hubo un error",
      error,
    });
    next();
  }
};
exports.getClientById = async (req, res, next) => {
  const client = await Clients.findById(req.params.id);
  if (!client) {
    res.json({ msg: "Client Not found" });
    next();
  }
  res.json(client);
};
exports.deleteClientById = async (req, res, next) => {
    try {
      await Clients.findOneAndDelete({_id:req.params.id});
      res.json({msg:'Client deleted'})
  } catch (error) {
    console.log(error);
    next();
  }
 
};
exports.updateClientById = async (req, res, next) => {
  try {
    const client = await Clients.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json({ msg: "Client updated", client });
  } catch (error) {
    console.log(error);
    next();
  }
};
