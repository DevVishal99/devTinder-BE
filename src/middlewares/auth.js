const amdinAuthMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  const auth = token === "Basic dmlzaGFsOiIxMjM0Ig==";

  if (!auth) {
    res.status(401).send("Not Authorized");
  } else next();
};

const userAuthMiddleware = (req, res, next) => {
  const token = req.headers["authorization"];
  const auth = token === "Basic dmlzaGFsOiIxMjM0Ig==";
  if (!auth) {
    res.status(401).send("Not Authorized");
  } else next();
};

module.exports = { amdinAuthMiddleware, userAuthMiddleware };
