// import ErrorHandler from "../Middleware/Error.js";
import User from "../Models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/hashPassword.js";
import {ErrorHandler} from '../middleware/error.js';
import {sendCookie} from '../helpers/cookie.js';

export const loginController = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user)
      return next(new ErrorHandler("Invalid username or password", 404));

    const isMatch = comparePassword(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid username or password", 404));

    sendCookie(user, res, `Welcome back ${user.username}`, 200);
  } catch (error) {
    next(error);
  }
};
export const registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const exisitingUser = await User.findOne({ email });

    if (exisitingUser)
      return next(new ErrorHandler("User already exists", 400));

    const hashedPassword = await hashPassword(password);
    //save

    const user = await new User({
      username,
      email,
      password: hashedPassword,
    }).save();

    sendCookie(user, res, "registered successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const logoutController = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
    })
    .json({
      success: true,
      user: req.user,
    });
};