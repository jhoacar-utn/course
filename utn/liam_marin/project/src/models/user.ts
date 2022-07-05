import type { UserModel } from "./types/user";

import databaseConfig from "../config/database.js";

const User: UserModel = await (async () => {
  let mod;
  switch (databaseConfig.connection) {
    case "mongodb":
      mod = await import("./mongoose/user.js");
      break;
    case "mysql":
      mod = await import("./sequelize/user.js");
      break;
    default:
      throw new Error("'databaseConfig.connection' is invalid");
  }
  return mod.User;
})();

export default User;
