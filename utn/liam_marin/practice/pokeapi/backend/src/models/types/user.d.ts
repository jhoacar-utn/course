export interface BaseUser {
  name: string;
  email: string;
  password: string;
  avatar: number;
}

export interface UserMethods {
  saveUser(): Promise<void>;
  deleteUser(): Promise<void>;
}

export interface UserInstance extends BaseUser, UserMethods {}

export interface UserModel {
  createUser(data: BaseUser): UserInstance;
  findUser(email: string): Promise<UserInstance | null>;
  checkEmailAvailable(email: string): Promise<boolean>;
  checkAvatarAvailable(avatar: number): Promise<boolean>;
  getAvatars(): Promise<number[]>;
}
