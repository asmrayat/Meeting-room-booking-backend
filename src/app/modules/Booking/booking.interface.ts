import { Types } from "mongoose";

export type Tbooking={
    room:Types.ObjectId;
    slots:Types.ObjectId[];
    user:Types.ObjectId;
    date:string;
    totalAmount :number;
    isConfirmed: string;
    isDeleted:boolean;
}