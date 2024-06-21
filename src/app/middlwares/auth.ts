import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TUserRole } from '../modules/User/user.interface';
import httpStatus from 'http-status';
import sendResponse from '../utils/sendResponse';

const auth = (...requiredRoles: TUserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getToken = req.headers.authorization;
      const token = getToken?.split(' ')[1];

      if (!token) {
        throw new Error('Token is missing');
      }

      jwt.verify(
        token,
        config.jwt_access_secret as string,
        function (err, decoded) {
          // err
          if (err) {
            sendResponse(res, {
              statusCode: httpStatus.UNAUTHORIZED,
              success: false,
              message: 'You have no access to this route',
            });
          }
          // decoded undefined
          const role = (decoded as JwtPayload).role;

          if (requiredRoles && !requiredRoles.includes(role)) {
            sendResponse(res, {
              statusCode: httpStatus.UNAUTHORIZED,
              success: false,
              message: 'You have no access to this route',
            });
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
