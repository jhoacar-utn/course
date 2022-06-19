import { Sequelize } from "sequelize";
import config from "../../config/database";

const sequelize = new Sequelize(config.uri);

export default sequelize;
