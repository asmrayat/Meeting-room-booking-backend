import { Tslot } from './slot.interface';
import { Slot } from './slot.model';

const createSlotIntoDB = async (slotData: Tslot[]) => {
  const result = await Slot.insertMany(slotData);
  return result;
};
const getAllSlotFromDB = async () => {
  const result = await Slot.find();
  return result;
};

export const SlotServer = {
  createSlotIntoDB,
  getAllSlotFromDB
};
