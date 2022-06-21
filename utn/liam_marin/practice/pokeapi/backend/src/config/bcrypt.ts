const config = (() => {
  const saltCost = parseInt(process.env["BCRYPT_SALTCOST"] || "10");

  if (isNaN(saltCost)) {
    throw new Error("BCRYPT_SALTCOST is not a valid number");
  }

  return { saltCost };
})();

export default config;
