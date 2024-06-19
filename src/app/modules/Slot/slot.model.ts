import { Schema, model } from "mongoose";
import { Tslot } from "./slot.interface";

const slotSchema = new Schema<Tslot>({
    room:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    startTime:{
        type:String,
        required:true
    },
    endTime:{
        type:String,
        required:true
    },
    isBooked:{
        type:Boolean,
        required:true,
        default:false
    },
})

export const Slot = model<Tslot>('Slot',slotSchema)