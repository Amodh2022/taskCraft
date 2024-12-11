import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { user } from "../models/users.js";
import bcrypt from "bcrypt";

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json(new ApiError(400, "Both fields are required", null));
  }

  const checkUser = await user.findOne({ email });
  if (!checkUser) {
    return res
      .status(401)
      .json(new ApiError(401, "Invalid email or password", null));
  }

  const isMatch = await bcrypt.compare(password, checkUser.password);
  if (!isMatch) {
    return res
      .status(401)
      .json(new ApiError(401, "Invalid email or password", null));
  }

  const sanitizedUser = {
    id: checkUser._id,
    userName: checkUser.userName,
    role: checkUser.role,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, sanitizedUser, "Login Successful"));
});

export { loginController };
