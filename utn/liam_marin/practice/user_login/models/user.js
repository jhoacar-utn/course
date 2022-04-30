import { DataTypes, Model } from "sequelize/types";
import sequelize from "./connection.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: "User", tableName: "users" }
);

export { User };
