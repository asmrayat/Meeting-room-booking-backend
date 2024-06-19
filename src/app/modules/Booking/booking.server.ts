import { Tbooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (bookingData: Tbooking) => {
  const result = await Booking.create(bookingData);
  return result;
};

const getAllBookingFromDB = async () => {
  const result = await Booking.find();
  return result;
};
const updateSingleBookingInDB = async (_id: string, bookingData: Partial<Tbooking>) => {
    const result = await Booking.findOneAndUpdate({ _id }, { $set: bookingData },{ new: true });
    return result;
  };
  const deleteSingleBookingFromDB = async (_id: string) => {
    const result = await Booking.findOneAndUpdate({ _id }, { isDeleted: true },{ new: true });
    return result;
  };
export const BookingService = {
  createBookingIntoDB,
  getAllBookingFromDB,
  updateSingleBookingInDB,
  deleteSingleBookingFromDB
};
