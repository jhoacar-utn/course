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

export type UserInstance = BaseUser & UserMethods;

export interface UserModel {
  buildUser(data: BaseUser): UserInstance;
  findUser(email: string): Promise<UserInstance | null>;
  checkEmailAvailable(email: string): Promise<boolean>;
  checkAvatarAvailable(avatar: number): Promise<boolean>;
  getAvatars(): Promise<number[]>;
}
