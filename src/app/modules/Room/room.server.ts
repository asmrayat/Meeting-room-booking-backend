import { Troom } from './room.interface';
import { Room } from './room.model';

const createRoomIntoDB = async (roomData: Troom) => {
  const result = await Room.create(roomData);
  return result;
};
const getAllRoomFromDB = async () => {
  const result = await Room.find();
  return result;
};
const getSingleRoomFromDB = async (_id: string) => {
  const result = await Room.findOne({ _id });
  return result;
};
const updateSingleRoomInDB = async (_id: string, roomData: Partial<Troom>) => {
  const result = await Room.findOneAndUpdate({ _id }, { $set: roomData },{ new: true });
  return result;
};
const deleteSingleRoomFromDB = async (_id: string) => {
  const result = await Room.findOneAndUpdate({ _id }, { isDeleted: true },{ new: true });
  return result;
};

export const RoomService = {
  createRoomIntoDB,
  getAllRoomFromDB,
  getSingleRoomFromDB,
  updateSingleRoomInDB,
  deleteSingleRoomFromDB
};
