import { z } from 'zod';

// Define the Zod schema for Tslot

const slotValidationSchema = z.object({
  body: z.object({
    room: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Invalid date format. Expected YYYY-MM-DD",
      }).refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date",
      }),
    startTime: z
      .string()
      .refine((val) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(val), {
        message: 'Invalid time format. Expected HH:mm',
      }),
    endTime: z
      .string()
      .refine((val) => /^([01]\d|2[0-3]):([0-5]\d)$/.test(val), {
        message: 'Invalid time format. Expected HH:mm',
      }),
    isBooked: z.boolean().default(false),
  }),
});
export const SlotValidation = {
  slotValidationSchema,
};
