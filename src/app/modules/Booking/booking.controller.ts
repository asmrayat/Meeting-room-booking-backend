import { Request, Response } from 'express';
import { BookingService } from './booking.server';

const createBooking = async (req: Request, res: Response) => {
  try {
    const bookingData = req.body;

    //will call service func to send this data
    const result = await BookingService.createBookingIntoDB(bookingData);
    //send response
    res.status(200).json({
      success: true,
      message: 'Booking created successfully',
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
const getAllBooking = async (req: Request, res: Response) => {
  try {
    //will call service func to send this data
    const result = await BookingService.getAllBookingFromDB();
    //send response
    res.status(200).json({
      success: true,
      message: 'All bookings retrieved successfully',
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
const updateSingleBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const bookingData = req.body;

    //will call service func to send this data
    const result = await BookingService.updateSingleBookingInDB(
      id,
      bookingData,
    );
    //send response
    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
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
const deleteSingleBooking = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      //will call service func to send this data
      const result = await BookingService.deleteSingleBookingFromDB(id);
      //send response
      res.status(200).json({
        success: true,
        message: 'Booking deleted successfully',
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
  
export const BookingControllers = {
  createBooking,
  getAllBooking,
  updateSingleBooking,
  deleteSingleBooking
};
