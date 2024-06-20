import { Schema, model } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema = new Schema<Tbooking>({
    room: {
        type: Schema.Types.ObjectId,
        ref:'Room',
        required: true,
      },
      slots: {
        type: [Schema.Types.ObjectId],
        ref:'Slot',
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref:'User',
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      totalAmount: {
        type: Number
      },
      isConfirmed: {
        type: String,
        required: true,
        default:"unconfirmed"
      },
      isDeleted: {
        type: Boolean,
        required: true,
        default:false
      },
})

export const Booking  = model<Tbooking>('Booking',bookingSchema)