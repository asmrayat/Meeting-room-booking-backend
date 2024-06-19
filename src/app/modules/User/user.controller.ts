import { NextFunction, Request, RequestHandler, Response } from 'express';
import { UserService } from './user.service';
import { UserValidation } from './user.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser:RequestHandler = async (req, res, next) => {
  try {
    const userData = req.body;

    // const zodParsedData = UserValidation.userValidationSchema.parse(userData);

    //will call service func to send this data
    const result = await UserService.createUserIntoDB(userData);
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'user is created successfully',
      data:result
    })
    // res.status(200).json({
    //   success: true,
    //   message: 'user is created succesfully',
    //   data: result,
    // });
  } catch (error) {
    next(error);
  }
};
const loginUser:RequestHandler = async (req, res,next) => {
  try {
    const userData = req.body;
    const email = userData.email;
    const password = userData.password;

    //will call service func to send this data
    const result = await UserService.loginUserFromDB(email, password);
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'User logged in successfully',
      data:result
    })
    
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createUser,
  loginUser,
};
