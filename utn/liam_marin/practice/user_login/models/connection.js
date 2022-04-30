import { Sequelize } from "sequelize";
import { sequelize as config } from "../config.js";

export default new Sequelize(config);
