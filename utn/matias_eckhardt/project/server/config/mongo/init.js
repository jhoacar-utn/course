const mongoose = require("mongoose");
const initDatabase = async () => {
  try {
    await require("./connection");
    const options = {};
    const db = await mongoose.connect(process.env.DB_URI, options);
    console.log(
      `Connected to DB: (${db.connection.name}) at: ${db.connection.host}`
    );
  } catch (error) {
    console.log("Error connection", error);
  }
};

module.exports = initDatabase;
