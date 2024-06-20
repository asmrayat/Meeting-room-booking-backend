import { RequestHandler } from "express";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { AuthServices } from "./auth.service";

const loginUser:RequestHandler = async (req, res,next) => {
    try {
      const loginData = req.body;
      
  
      //will call service func to send this data
      const result = await AuthServices.loginUser(loginData)
      //send response
      sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'User logged in successfully',
        token:result.acessToken,
        data:result.userWithoutPassword,
        
        
      })
      
    } catch (error) {
      next(error);
    }
  };

  export const AuthControllers = {
    loginUser
  }