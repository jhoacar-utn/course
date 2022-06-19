import mongoose from "mongoose";
import config from "../../config/database";

const connection = mongoose.createConnection(config.uri);

export default connection;
