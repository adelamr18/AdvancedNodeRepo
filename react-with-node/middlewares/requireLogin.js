module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({
      error: "You must log in!"
    });
  }
  next();
};
//next middleware is the middleware we call when we finish our custom made middleware
//so it passes the request to the next middleware
