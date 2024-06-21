/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.UNAUTHORIZED).json({
    success: false,
    statusCode:httpStatus.UNAUTHORIZED,
    message: 'Not Found',
  });
};

export default notFound;
