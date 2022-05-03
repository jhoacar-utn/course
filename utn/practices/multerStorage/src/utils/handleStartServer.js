const { initDatabase } = require("@config/connection");

const handleStartServer = async function () {

    console.log("Server had been started on port ", this.address().port);

    await initDatabase();
};

module.exports = handleStartServer;