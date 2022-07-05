import type { InferAttributes, InferCreationAttributes } from "sequelize";
import type { BaseUser, UserInstance } from "../types/user";

import { Model, DataTypes } from "sequelize";
import sequelize from "./connection.js";

class User
  extends Model<InferAttributes<User>, InferCreationAttributes<User>>
  implements UserInstance
{
  declare name: string;
  declare email: string;
  declare password: string;
  declare avatar: number;

  static buildUser(data: BaseUser): UserInstance {
    return this.build(data);
  }

  static async findUser(email: string): Promise<UserInstance | null> {
    return this.findOne({ where: { email } });
  }

  static async checkEmailAvailable(email: string): Promise<boolean> {
    const user = await this.findOne({ where: { email } });
    return user === null;
  }

  static async checkAvatarAvailable(avatar: number): Promise<boolean> {
    const user = await this.findOne({ where: { avatar } });
    return user === null;
  }

  static async getAvatars(): Promise<number[]> {
    const users = await this.findAll({ attributes: ["avatar"] });
    return users.map((user) => user.avatar);
  }

  async saveUser() {
    await this.save();
  }

  async deleteUser() {
    await this.destroy();
  }
}

User.init(
  {
    name: { type: DataTypes.STRING(32), allowNull: false },
    email: { type: DataTypes.STRING(254), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(255), allowNull: false },
    avatar: { type: DataTypes.SMALLINT, allowNull: false, unique: true },
  },
  { sequelize, modelName: "User", tableName: "users" }
);

User.sync({ alter: true });

export { User };
