import { RequestHandler } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createUser:RequestHandler = async (req, res, next) => {
  try {
    const userData = req.body;

    const result = await UserService.createUserIntoDB(userData);

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

export const UserControllers = {
  createUser,
 
};
