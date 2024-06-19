import { NextFunction, Request, RequestHandler, Response } from 'express';
import { RoomService } from './room.server';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createRoom:RequestHandler = async (req, res,next) => {
  try {
    const roomData = req.body;

    //will call service func to send this data
    const result = await RoomService.createRoomIntoDB(roomData);
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Room added successfully',
      data:result
    })
  } catch (error) {
    next(error);
  }
};
const getAllRoom:RequestHandler = async (req, res,next) => {
  try {
    //will call service func to send this data
    const result = await RoomService.getAllRoomFromDB();
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Rooms retrieved successfully',
      data:result
    })
   
  } catch (error) {
    next(error);
  }
};
const getSingleRoom:RequestHandler = async (req, res,next) => {
  try {
    const { id } = req.params;

    //will call service func to send this data
    const result = await RoomService.getSingleRoomFromDB(id);
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Rooms retrieved successfully',
      data:result
    })
  } catch (error) {
    next(error);
  }
};
const updateSingleRoom:RequestHandler = async (req, res,next) => {
  try {
    const { id } = req.params;
    const roomData = req.body;

    //will call service func to send this data
    const result = await RoomService.updateSingleRoomInDB(id, roomData);
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Room updated successfully',
      data:result
    })
  } catch (error) {
    next(error);
  }
};
const deleteSingleRoom:RequestHandler = async (req, res,next) => {
  try {
    const { id } = req.params;

    //will call service func to send this data
    const result = await RoomService.deleteSingleRoomFromDB(id);
    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Room deleted successfully',
      data:result
    })
  } catch (error) {
    next(error);
  }
}

export const RoomControllers = {
  createRoom,
  getAllRoom,
  getSingleRoom,
  updateSingleRoom,
  deleteSingleRoom,
};
