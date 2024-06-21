import { z } from 'zod';

const roomValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Room name is required' }),
    roomNo: z
      .number()
      .int()
      .positive({ message: 'Room number must be a positive integer' }),
    floorNo: z
      .number()
      .int()
      .min(0, { message: 'Floor number must be 0 or greater' }),
    capacity: z
      .number()
      .int()
      .positive({ message: 'Capacity must be a positive integer' }),
    pricePerSlot: z
      .number()
      .min(0, { message: 'Price per slot must be 0 or greater' }),
    amenities: z.array(z.string()),
    isDeleted: z.boolean().default(false)
  }),
});
export const RoomValidation = {
    roomValidationSchema,
};
