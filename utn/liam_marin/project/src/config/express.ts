const expressConfig = (() => {
  const frontendDir = process.env["EXPRESS_FRONTDIR"];
  const port = parseInt(process.env["EXPRESS_PORT"] || "4000");

  if (isNaN(port)) {
    throw new Error("EXPRESS_PORT is invalid");
  }

  return { frontendDir, port };
})();

export default expressConfig;
