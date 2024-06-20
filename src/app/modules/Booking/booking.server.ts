import { Room } from '../Room/room.model';
import { Slot } from '../Slot/slot.model';
import { User } from '../User/user.model';
import { Tbooking } from './booking.interface';
import { Booking } from './booking.model';

const createBookingIntoDB = async (bookingData: Tbooking) => {
  const room=await Room.findOne({ _id: bookingData.room });
  bookingData.totalAmount = room.pricePerSlot*bookingData.slots.length
  const result = await Booking.create(bookingData);
  for (const slot of bookingData.slots) {
    await Slot.findOneAndUpdate({ _id: slot }, { isBooked: true }, { new: true });
    
  }
  return (await (await result.populate('user')).populate('slots')).populate('room');
 
};

const getAllBookingFromDB = async () => {
  const result = await Booking.find().populate('user').populate('slots').populate('room');
  return result;
};
const getUserBookingFromDB = async (email: string) => {  
  const Data = await User.findOne({email})
  const userData = Data._id
  // console.log('data',emailData);
  const result = await Booking.findOne({user:userData}).populate('slots').populate('room').select('-user');
  
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
  deleteSingleBookingFromDB,
  getUserBookingFromDB
};
