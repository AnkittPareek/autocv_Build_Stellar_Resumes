const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { secretKey, expiresIn } = require("../config/jwtConfig");

exports.register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Account already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, phone, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.register_google = async (req, res) => {
  try {
    const { token } = req.body;

    fetch(
      "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then(async (userInfo) => {
        const { names, emailAddresses } = userInfo;
        const name = names[0].displayName;
        const email = emailAddresses[0].value;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: "Account already exists" });
        }
        const hashedPassword = await bcrypt.hash("test@123", 10);
        const user = new User({
          username: name,
          email,
          phone: "",
          password: hashedPassword,
        });
        await user.save();
        res.status(201).json({ message: "User registered successfully" });
      });
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

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login_google = async (req, res) => {
  try {
    const { token } = req.body;

    fetch(
      "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then(async (userInfo) => {
        const { emailAddresses } = userInfo;

        const email = emailAddresses[0].value;

        const user = await User.findOne({ email });
        if (!user) {
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

        res.json({ accessToken });
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
