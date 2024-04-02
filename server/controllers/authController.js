const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const {
  secretKey,
  // secretKeyRefreshToken,
  expiresIn,
  // refreshTokenExpiresIn,
} = require("../config/jwtConfig");

exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const accessToken = jwt.sign(
      {
        id: user._id,
        username: user.username,
        email: user.email,
        createdAt: user.createdAt,
        phone: user.phone,
        updatedAt: user.updatedAt,
      },
      secretKey,
      {
        expiresIn: expiresIn,
      }
    );

    // // Generate refresh token
    // const refreshToken = jwt.sign({ id: user._id }, secretKeyRefreshToken, {
    //   expiresIn: refreshTokenExpiresIn,
    // });

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// exports.refreshToken = (req, res) => {
//   const { refreshToken } = req.body;

//   // Verify the refresh token
//   jwt.verify(refreshToken, secretKeyRefreshToken, (err, decoded) => {
//     if (err) {
//       return res
//         .status(401)
//         .json({ message: "Invalid or expired refresh token" });
//     }

//     // If refresh token is valid, generate a new access token
//     const accessToken = jwt.sign({ id: decoded._id }, secretKey, {
//       expiresIn: accessTokenExpiresIn,
//     });
//     res.json({ accessToken });
//   });
// };
