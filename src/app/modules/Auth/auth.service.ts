/* eslint-disable @typescript-eslint/no-unused-vars */
import { log } from 'console';
import config from '../../config';
import { User } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const loginUser = async (loginData: TLoginUser) => {
  const isUserExists = await User.findOne({ email: loginData?.email });

  if (isUserExists) {
    await bcrypt.compare(loginData?.password, isUserExists?.password);
    // console.log(loginData?.password,isUserExists?.password);
  }

  if (!isUserExists) {
    throw new Error('This user is not exist');
  }

  const jwtPayload = {
    email: loginData.email,
    role: isUserExists.role,
  };
  const acessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  const { password, ...userWithoutPassword } = isUserExists.toObject();
  return { userWithoutPassword, acessToken };
};

export const AuthServices = {
  loginUser,
};
