const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { BadRequestError } = require('../errors');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  // This code snippet generates a JSON Web Token (JWT) using the jwt.sign function. The token contains the user's ID (userId) and name (name). The token is signed using the secret key 'jwtSecret'.
  const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', {
    expiresIn: '30d',
  });
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send('login user');
};

module.exports = {
  register,
  login,
};
