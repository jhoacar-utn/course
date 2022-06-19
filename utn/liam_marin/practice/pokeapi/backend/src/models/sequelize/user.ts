import type { InferAttributes, InferCreationAttributes } from "sequelize";
import type { BaseUser, UserInstance } from "../types/user";

import { DataTypes, Model } from "sequelize";
import sequelize from "./connection";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare name: string;
  declare email: string;
  declare password: string;
  declare avatarId: number;

  static createUser(data: BaseUser): UserInstance {
    return this.build(data);
  }

  static async findUser(email: string): Promise<UserInstance | null> {
    return this.findOne({ where: { email } });
  }

  static async checkEmailAvailable(email: string): Promise<boolean> {
    const user = await this.findOne({ where: { email } });
    return user === null;
  }

  static async checkAvatarAvailable(avatarId: number): Promise<boolean> {
    const user = await this.findOne({ where: { avatarId } });
    return user === null;
  }

  static async getAvatars(): Promise<number[]> {
    const users = await this.findAll({ attributes: ["avatarId"] });
    return users.map((user) => user.avatarId);
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
    name: { type: DataTypes.STRING(64), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false, unique: true },
    password: { type: DataTypes.STRING(64), allowNull: false },
    avatarId: { type: DataTypes.SMALLINT, allowNull: false, unique: true },
  },
  { tableName: "users", modelName: "User", sequelize }
);

export { User };
