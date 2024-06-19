import express from 'express';
import { BookingControllers } from './booking.controller';

const router = express.Router();
router.post('/bookings', BookingControllers.createBooking);
router.get('/bookings', BookingControllers.getAllBooking);
router.put('/bookings/:id', BookingControllers.updateSingleBooking);
router.delete('/bookings/:id', BookingControllers.deleteSingleBooking);

export const BookingRoutes = router;