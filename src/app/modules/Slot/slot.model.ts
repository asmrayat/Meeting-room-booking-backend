import { Schema, model } from "mongoose";
import { Tslot } from "./slot.interface";

const slotSchema = new Schema<Tslot>({
    room:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'Room'
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

// slotSchema.pre('find', async function (next) {
//     this.find({ isBooked: false})
//     next();
//   });

export const Slot = model<Tslot>('Slot',slotSchema)