
import { z } from 'zod';

const bookingValidationSchema = z.object({
  body: z.object({
    room: z.string(),
    slots: z.array(z.string()),
    user: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
        message: "Invalid date format. Expected YYYY-MM-DD",
      }).refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date",
      }),
    isConfirmed: z.string().default('unconfirmed'),
    isDeleted: z.boolean().default(false),
  }),
});
export const BookingValidation = {
  bookingValidationSchema,
};
