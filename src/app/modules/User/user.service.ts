import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  
  const result = await User.create(userData);
  return result;
};
const loginUserFromDB = async (email: string, password: string) => {
  const data = await User.findOne({email},{password});
  const result = await User.findOne( data._id );
  
  return result;
};

export const UserService = {
  createUserIntoDB,
  loginUserFromDB
};
