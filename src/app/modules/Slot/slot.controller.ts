import { Request, Response } from "express";
import { SlotServer } from "./slot.server";

const createSlot = async (req: Request, res: Response) => {
    try {
      const slotData = req.body;
  
      //will call service func to send this data
      await SlotServer.createSlotIntoDB(slotData);
      const result = await SlotServer.getAllSlotFromDB();
      //send response
      res.status(200).json({
        success: true,
        message: 'Slots created successfully',
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
const getAllSlot = async (req: Request, res: Response) => {
    try {
      //will call service func to send this data
      const result = await SlotServer.getAllSlotFromDB();
      //send response
      res.status(200).json({
        success: true,
        message: 'Available slots retrieved successfully',
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

  export const SlotControllers ={
    createSlot,
    getAllSlot
  }