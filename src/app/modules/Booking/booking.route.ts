import express from 'express';
import { BookingControllers } from './booking.controller';
import auth from '../../middlwares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();
router.post('/bookings',auth(USER_ROLE.user), BookingControllers.createBooking);
router.get('/bookings',auth(USER_ROLE.admin), BookingControllers.getAllBooking);
router.get('/my-bookings',auth(USER_ROLE.user), BookingControllers.getUsersBooking);
router.put('/bookings/:id',auth(USER_ROLE.admin), BookingControllers.updateSingleBooking);
router.delete('/bookings/:id',auth(USER_ROLE.admin), BookingControllers.deleteSingleBooking);

export const BookingRoutes = router;