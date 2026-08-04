const { z } = require('zod');

const phoneRegex = /^(\+92|0)3\d{9}$/;

exports.createBookingSchema = z.object({
  serviceId: z.number().int(),
  name: z.string().min(2),
  phone: z.string()
    .transform((v) => v.replace(/\s+/g, ''))
    .refine((v) => phoneRegex.test(v), { message: 'Enter a valid Pakistani phone number (e.g. 03001234567)' }),
  date: z.string(),
  time: z.string(),
  notes: z.string().optional(),
});