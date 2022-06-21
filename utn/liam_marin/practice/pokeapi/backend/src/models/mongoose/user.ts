import type { Model, Document } from "mongoose";
import type { BaseUser, UserInstance, UserModel } from "../types/user";

import mongoose from "mongoose";
import connection from "./connection.js";

interface MongoUserInstance extends UserInstance, Document {}
interface MongoUserModel extends UserModel, Model<MongoUserInstance> {}

const schema = new mongoose.Schema<MongoUserInstance>(
  {
    username: { type: String, required: true, unique: true },
    displayname: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatarId: { type: Number, required: true, unique: true },
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
      createUser(data: BaseUser): UserInstance {
        return new this(data);
      },

      async findByUsername(username: string): Promise<UserInstance | null> {
        return this.findOne({ username }).exec();
      },

      async findByEmail(email: string): Promise<UserInstance | null> {
        return this.findOne({ email }).exec();
      },

      async checkUsernameAvailable(username: string): Promise<boolean> {
        const user = await this.exists({ username }).exec();
        return user === null;
      },

      async checkEmailAvailable(email: string): Promise<boolean> {
        const user = await this.exists({ email }).exec();
        return user === null;
      },

      async checkAvatarAvailable(avatarId: number): Promise<boolean> {
        const user = await this.exists({ avatarId }).exec();
        return user === null;
      },

      async getAvatars(): Promise<number[]> {
        return this.distinct("avatarId").exec();
      },
    },
  }
);

const User = connection.model<MongoUserInstance, MongoUserModel>(
  "User",
  schema
);

export { User };
