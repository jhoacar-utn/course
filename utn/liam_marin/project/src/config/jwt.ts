const jwtConfig = (() => {
  const secret = process.env["JWT_SECRET"];

  if (!secret) {
    throw new Error("JWT_SECRET is required");
  }

  return { secret };
})();

export default jwtConfig;
