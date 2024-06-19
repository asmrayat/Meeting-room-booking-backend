import { Request, Response } from 'express';
import { UserService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    //will call service func to send this data
    const result = await UserService.createUserIntoDB(userData);
    //send response
    res.status(200).json({
      success: true,
      message: 'user is created succesfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong',
        data: error,
      });
  }
};
const loginUser = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const email = userData.email
    const password = userData.password

    //will call service func to send this data
    const result = await UserService.loginUserFromDB(email,password);
    //send response
    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'something went wrong',
        data: error,
      });
  }
};

export const UserControllers = {
  createUser,
  loginUser
};
