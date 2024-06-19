import { NextFunction, Request, RequestHandler, Response } from 'express';
import { SlotServer } from './slot.server';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';

const createSlot: RequestHandler = async (req, res, next) => {
  try {
    const slotData = req.body;

    //will call service func to send this data
    await SlotServer.createSlotIntoDB(slotData);
    const result = await SlotServer.getAllSlotFromDB();
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Slots created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllSlot: RequestHandler = async (req, res, next) => {
  try {
    //will call service func to send this data
    const result = await SlotServer.getAllSlotFromDB();
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Available slots retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const SlotControllers = {
  createSlot,
  getAllSlot,
};
