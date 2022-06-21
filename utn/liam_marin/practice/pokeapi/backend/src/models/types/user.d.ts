export interface BaseUser {
  username: string;
  displayname?: string;
  email: string;
  password: string;
  avatarId: number;
}

export interface UserMethods {
  saveUser(): Promise<void>;
  deleteUser(): Promise<void>;
}

type UserInstance = BaseUser & UserMethods;

export interface UserModel {
  createUser(data: BaseUser): UserInstance;
  findByUsername(username: string): Promise<UserInstance | null>;
  findByEmail(email: string): Promise<UserInstance | null>;
  checkUsernameAvailable(username: string): Promise<boolean>;
  checkEmailAvailable(email: string): Promise<boolean>;
  checkAvatarAvailable(avatarId: number): Promise<boolean>;
  getAvatars(): Promise<number[]>;
}
