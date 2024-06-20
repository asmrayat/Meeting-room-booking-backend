import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';

import { UserValidation } from './user.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();
//validation


//will call controller function
router.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);



export const UserRoutes = router;
