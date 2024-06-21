import {  RequestHandler } from 'express';
import { RoomService } from './room.server';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createRoom: RequestHandler = async (req, res, next) => {
  

  try {
    const roomData = req.body;

    //will call service func to send this data
    const result = await RoomService.createRoomIntoDB(roomData);
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room added successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllRoom: RequestHandler = async (req, res, next) => {
  try {
    //will call service func to send this data
    const result = await RoomService.getAllRoomFromDB();

    if (result.length <= 0) {
      sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'No Data Found',
        data: result,
      });
    } else {
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Rooms retrieved successfully',
        data: result,
      });
    }
  } catch (error) {
    next(error);
  }
};
const getSingleRoom: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    //will call service func to send this data
    const result = await RoomService.getSingleRoomFromDB(id);
   
    
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'No Data Found',
        data: [],
      });
    }
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Rooms retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateSingleRoom: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const roomData = req.body;

    //will call service func to send this data
    const result = await RoomService.updateSingleRoomInDB(id, roomData);
    //send response
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'No Data Found',
        data: [],
      });
    }
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSingleRoom: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    //will call service func to send this data
    const result = await RoomService.deleteSingleRoomFromDB(id);
    if (!result) {
      return sendResponse(res, {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: 'No Data Found',
        data: [],
      });
    }
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Room deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const RoomControllers = {
  createRoom,
  getAllRoom,
  getSingleRoom,
  updateSingleRoom,
  deleteSingleRoom,
};
