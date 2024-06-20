import { Tslot } from './slot.interface';
import { Slot } from './slot.model';

const createSlotIntoDB = async (slotData: Tslot[]) => {
  const result = await Slot.insertMany(slotData);
  return result;
};
const getAllSlotFromDB = async (query: Record<string, unknown>) => {
 

  if (query && query.date && query.roomId) {
    const result = await Slot.find({
      $and: [{ date: query.date }, { room: query.roomId }],
    }).populate('room');
    return result;
  } else {
    const result = await Slot.find({ isBooked: false }).populate('room');
    return result;
  }
};

export const SlotServer = {
  createSlotIntoDB,
  getAllSlotFromDB,
};
