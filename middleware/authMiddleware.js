export const authMiddleware = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split("");
    const bearerToken = bearer[1];

    (user) => {
      req.user = user;
    };

    console.log("token verified");
  } else {
    res.status(403);
  }

  next();
};
