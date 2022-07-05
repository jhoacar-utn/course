import type { Document, Model } from "mongoose";
import type { BaseUser, UserInstance, UserModel } from "../types/user";

import mongoose from "mongoose";
import connection from "./connection.js";

type MongooseUserInstance = Document & UserInstance;
type MongooseUserModel = UserModel & Model<MongooseUserInstance>;

const schema = new mongoose.Schema<MongooseUserInstance>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: Number, required: true, unique: true },
  },
  {
    methods: {
      async saveUser() {
        await this.save();
      },

      async deleteUser() {
        await this.remove();
      },
    },

    statics: {
      buildUser(data: BaseUser): UserInstance {
        return new this(data);
      },

      async findUser(email: string): Promise<UserInstance | null> {
        return this.findOne({ email }).exec();
      },

      async checkEmailAvailable(email: string): Promise<boolean> {
        const user = await this.exists({ email }).exec();
        return user === null;
      },

      async checkAvatarAvailable(avatar: number): Promise<boolean> {
        const user = await this.exists({ avatar }).exec();
        return user === null;
      },

      async getAvatars(): Promise<number[]> {
        return this.distinct("avatar").exec();
      },
    },
  }
);

const User = connection.model<MongooseUserInstance, MongooseUserModel>(
  "User",
  schema
);

export { User };
