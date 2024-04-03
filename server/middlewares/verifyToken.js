const jwt = require("jsonwebtoken");
const { secretKey } = require("../config/jwtConfig");
const User = require("../models/user");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyToken;
