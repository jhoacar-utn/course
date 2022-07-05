import mongoose from "mongoose";
import databaseConfig from "../../config/database.js";

const connection = mongoose.createConnection(databaseConfig.uri);

export default connection;
