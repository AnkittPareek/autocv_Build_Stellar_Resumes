module.exports = {
  secretKey: process.env.JWT_SECRET,
  // secretKeyRefreshToken: process.env.JWT_REFRESH_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN,
  // refreshTokenExpiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN,
};
