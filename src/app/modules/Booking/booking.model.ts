import { Schema, model } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema = new Schema<Tbooking>({
    room: {
        type: String,
        required: true,
      },
      slots: {
        type: [String],
        required: true,
      },
      user: {
        type: String,
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      totalAmount: {
        type: Number,
        required: true,
        default:0
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