import type { UserModel } from "./types/user";

import config from "../config/database";

const User: UserModel = await (async () => {
  let mod;
  switch (config.connection) {
    case "mongodb":
      mod = await import("./mongoose/user");
      break;
    case "mysql":
      mod = await import("./sequelize/user");
      break;
    default:
      throw new Error("'config.connection' is invalid");
  }
  return mod.User;
})();

export default User;
