const asyncHandler = require("express-async-handler");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "100y",
  });
};

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter All the Fields!!!!!");
  }
  const userExist = await user.findOne({ email });
  if (userExist) {
    res.status(409);
    throw new Error(
      "Email-ID is already registered. Please Use Different Email-ID"
    );
  }
  const newUser = await user.create({
    name,
    email,
    password,
    pic,
  });
  if (newUser) {
    res.status(200).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      pic: newUser.pic,
      token: generateToken(newUser._id),
    });
    res.send("User Registered Successfully!!");
  } else {
    res.status(400);
    throw new Error("Registration Failed!! Please try again.");
  }
});
const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.send(users);
})
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist && (await userExist.matchPassword(password))) {
    res.status(200).json({
      _id: userExist._id,
      name: userExist.name,
      email: userExist.email,
      pic: userExist.pic,
      token: generateToken(userExist._id),
    });
  }
});
module.exports = { registerUser, authUser, allUsers };
