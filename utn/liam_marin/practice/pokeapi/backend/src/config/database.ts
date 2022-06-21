interface DatabaseConfig {
  connection: "mongodb" | "mysql";
  uri: string;
}

const config: DatabaseConfig = (() => {
  let connection = process.env["DB_CONNECTION"] || "mongodb";
  let uri = process.env["DB_URI"];

  if (!(connection === "mongodb" || connection === "mysql")) {
    throw new Error("DB_CONNECTION must be 'mongodb' or 'mysql'");
  }

  if (!uri) {
    throw new Error("DB_URI is not set");
  }

  return { connection, uri };
})();

export default config;
