const config = (() => {
  const secret = process.env.TOKEN_SECRETKEY;

  if (!secret) {
    throw new Error("TOKEN_SECRETKEY is unset");
  }

  return { secret };
})();

export default config;
