interface DatabaseConfig {
  connection: "mongodb" | "mysql";
  uri: string;
}

const databaseConfig: DatabaseConfig = (() => {
  const connection = process.env["DB_CONNECTION"];
  const uri = process.env["DB_URI"];

  if (!(connection === "mongodb" || connection === "mysql")) {
    throw new Error("DB_CONNECTION must be either 'mongodb' or 'mysql'");
  }

  if (!uri) {
    throw new Error("DB_URI is required");
  }

  return { connection, uri };
})();

export default databaseConfig;
