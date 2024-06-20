import { NextFunction, Request, RequestHandler, Response } from 'express';
import { SlotServer } from './slot.server';
import httpStatus from 'http-status';
import sendResponse from '../../utils/sendResponse';
import { Slot } from './slot.model';

const createSlot: RequestHandler = async (req, res, next) => {
  try {
    const { room, date, startTime, endTime } = req.body;
    const slotDuration = 60;

    if (startTime >= endTime) {
      sendResponse(res, {
        statusCode: httpStatus.NOT_ACCEPTABLE,
        success: false,
        message: 'Slot time wrong',
        data: '',
      });
    } else {
      const startMinutes =
        parseInt(startTime.split(':')[0]) * 60 +
        parseInt(startTime.split(':')[1]);
      const endMinutes =
        parseInt(endTime.split(':')[0]) * 60 + parseInt(endTime.split(':')[1]);
      const totalDuration = endMinutes - startMinutes;
      const numberOfSlots = totalDuration / slotDuration;

      const slots = [];

      for (let i = 0; i < numberOfSlots; i++) {
        const slotStart = startMinutes + i * slotDuration;
        const slotEnd = slotStart + slotDuration;
        const slotStartTime = `${String(Math.floor(slotStart / 60)).padStart(2, '0')}:${String(slotStart % 60).padStart(2, '0')}`;
        const slotEndTime = `${String(Math.floor(slotEnd / 60)).padStart(2, '0')}:${String(slotEnd % 60).padStart(2, '0')}`;

        const slot = new Slot({
          room,
          date,
          startTime: slotStartTime,
          endTime: slotEndTime,
          isBooked: false,
        });

        slots.push(slot);
      }
      //will call service func to send this data
      const result = await SlotServer.createSlotIntoDB(slots);
      // const result = await SlotServer.getAllSlotFromDB();
      //send response
      sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Slots created successfully',
        data: result,
      });
    }
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
