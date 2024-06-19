import { NextFunction, Request, RequestHandler, Response } from 'express';
import { BookingService } from './booking.server';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createBooking: RequestHandler = async (req, res, next) => {
  try {
    const bookingData = req.body;

    //will call service func to send this data
    const result = await BookingService.createBookingIntoDB(bookingData);
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getAllBooking: RequestHandler = async (req, res, next) => {
  try {
    //will call service func to send this data
    const result = await BookingService.getAllBookingFromDB();
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'All bookings retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateSingleBooking: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bookingData = req.body;

    //will call service func to send this data
    const result = await BookingService.updateSingleBookingInDB(
      id,
      bookingData,
    );
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Booking updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSingleBooking: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    //will call service func to send this data
    const result = await BookingService.deleteSingleBookingFromDB(id);
    //send response
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const BookingControllers = {
  createBooking,
  getAllBooking,
  updateSingleBooking,
  deleteSingleBooking,
};
