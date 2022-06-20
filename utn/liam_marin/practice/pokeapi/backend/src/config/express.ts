const config = (() => {
  const port = parseInt(process.env.EXPRESS_PORT || "4000");
  const root = process.env.EXPRESS_ROOT || "/";

  if (isNaN(port)) {
    throw new Error("EXPRESS_PORT is not a valid number");
  }

  return { port, root };
})();

export default config;
