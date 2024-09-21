import jwt from 'jsonwebtoken'
import { Voters } from '../Models/voters.model.js';
const generateAccessAndRefreshToken = async (voterId) => {
    try {
        // console.log("generate access token");
      const voter = await Voters.findById(voterId);
      const accessToken = voter.generateAccessToken();
      const refreshToken = voter.generateRefreshToken();
      voter.refreshToken = refreshToken;
      // console.log(refreshToken)
      await voter.save({validateBeforeSave:false});
      return { accessToken, refreshToken };
    } catch (error) {
      // console.log(error);
      return error;
    }
  };
  export {generateAccessAndRefreshToken};