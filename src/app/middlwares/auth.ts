import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/User/user.interface';
import { log } from 'console';

const auth = (...requiredRoles:TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new Error('Token is missing');
      }

      jwt.verify(
        token,
        config.jwt_access_secret as string,
        function (err, decoded) {

        
          
          // err
          if (err) {
            throw new Error('Token is not valid');
          }
          // decoded undefined
          const role = (decoded as JwtPayload).role      
          
          if(requiredRoles && ! requiredRoles.includes(role)){
            throw new Error('Your Role is not valid');
          }
          req.user = decoded as JwtPayload;
           next();
        },
      );

      
    } catch (error) {
      next(error);
    }
  };
};

export default auth;
