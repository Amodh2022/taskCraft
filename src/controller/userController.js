import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { user } from "../models/users.js";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/apiError.js";

const userController = asyncHandler(async (req, res) => {
  const { userName, email, password, role } = req.body;
  if (!userName || !email || !password || !role) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  try {
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new user({
      userName,
      email,
      password: hashedPassword,
      role,
    });

    await newUser.save();
    return res
      .status(200)
      .json(new ApiResponse(200, newUser, "User Created Successfully"));
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res
        .status(409)
        .json(new ApiResponse(409, null, `${field} already exists`));
    }

    return res
      .status(500)
      .json(new ApiResponse(500, null, "An error occurred"));
  }
});

export { userController };
