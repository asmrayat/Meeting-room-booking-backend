import { Request, Response } from 'express';
import { RoomService } from './room.server';

const createRoom = async (req: Request, res: Response) => {
  try {
    const roomData = req.body;

    //will call service func to send this data
    const result = await RoomService.createRoomIntoDB(roomData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Room added successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};
const getAllRoom = async (req: Request, res: Response) => {
  try {
    //will call service func to send this data
    const result = await RoomService.getAllRoomFromDB();
    //send response
    res.status(200).json({
      success: true,
      message: 'Rooms retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};
const getSingleRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //will call service func to send this data
    const result = await RoomService.getSingleRoomFromDB(id);
    //send response
    res.status(200).json({
      success: true,
      message: 'Room retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};
const updateSingleRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const roomData = req.body;

    //will call service func to send this data
    const result = await RoomService.updateSingleRoomInDB(id, roomData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Room updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};
const deleteSingleRoom = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    //will call service func to send this data
    const result = await RoomService.deleteSingleRoomFromDB(id);
    //send response
    res.status(200).json({
      success: true,
      message: 'Room deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      data: error,
    });
  }
};

export const RoomControllers = {
  createRoom,
  getAllRoom,
  getSingleRoom,
  updateSingleRoom,
  deleteSingleRoom,
};
