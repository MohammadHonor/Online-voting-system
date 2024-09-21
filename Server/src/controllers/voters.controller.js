import { asyncHandler } from "../utils/AsyncHandler.js";
import { Voters } from "../Models/voters.model.js";
import bcrypt from "bcrypt";
import mongoose, { Schema } from "mongoose";
import { admins } from "../Models/admin.models.js";
import uploadOnCloudinary from "../utils/Cloudinary.js";
import { generateAccessAndRefreshToken } from "../utils/TokenGenerator.js";

const registerVoters = async (req, res) => {
  const {
    aadharNumber,
    firstName,
    midName,
    lastName,
    dob,
    password,
    gender,
    address,
    email,
    fmName,
    constituency,
    state,
    mobileNumber
  } = req.body;

  const localPath = req.files.image[0].path;

  if (!localPath) {
    res.status(402).json("file path error");
  }

  const imagePath = await uploadOnCloudinary(localPath);

  const voter = await Voters.create({
    aadharNumber: aadharNumber,
    firstName: firstName,
    midName: midName,
    lastName: lastName,
    dob: dob,
    password: password,
    gender: gender,
    address: address,
    email: email,
    image: imagePath,
    fmName: fmName,
    constituency:constituency,
    state:state,
    mobileNumber:mobileNumber
  });
  //  await admins.findOneAndUpdate({
  //   "name":`${process.env.Admin}`
  // },
  // {
  //     $push :{
  //         voters:voter._id
  //     }
  // },
  // {
  //     upsert:true,
  // })

  res.status(200).json("success");

  //  } catch (error) {
  //   res.json(error)
  //  }
};

const loginVoters = async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    res.status(400).json({ error: "password and email are required" });
  }

  try {
    const login_info = await Voters.findOne({
      $or: [{ password: password }, { email: email }],
    });

    if (!login_info) {
      res.status(401).json("email and password are not matched");
    }

    const loginValidation = await login_info.isPasswordCorrect(password);

    if (!loginValidation) {
      res.status(400).json("password are not correct");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      login_info._id,
    );

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    };

    const loggedInUser = await Voters.findById(login_info._id).select("-password -refreshToken");

    res.cookie("accessToken", accessToken, options);
    res.cookie("refreshToken", refreshToken, options);
    res.status(200).json(loggedInUser);


  } catch (error) {
    return res.status(500).json(error + " login failed");
  }
};

const forgetPassword = async (req, res) => {
  const { newpassword, email } = req.body;

  if (!newpassword || !email) {
    res.status(400).json({
      error: "New password and email are required",
    });
  }
  try {
    const pass = await bcrypt.hash(newpassword, 10);

    const vot = await Voters.findOneAndUpdate(
      { email: email },
      { password: pass },
      {
        new: true,
        upsert: false,
      },
    );

    if (!vot) {
      res.status(400).json({ erro: "email is not persent" });
    }

    res.status(200).json("password updated successfully");
  } catch (error) {
    res
      .status(500)
      .json({ error: "error occured while updating the password" });
  }
};

export { registerVoters, loginVoters, forgetPassword };
