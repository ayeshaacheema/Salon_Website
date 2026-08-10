const { z } = require('zod');

const phoneRegex = /^(\+92|0)3\d{9}$/;

/** Must match the time slots offered on the booking page */
const ALLOWED_TIMES = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30', '19:00'];

const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

function isValidIsoDate(value) {
  if (!isoDateRegex.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime())) return false;
  return parsed.toISOString().slice(0, 10) === value;
}

function isNotPastDate(value) {
  const today = new Date().toISOString().slice(0, 10);
  return value >= today;
}

exports.ALLOWED_TIMES = ALLOWED_TIMES;

exports.createBookingSchema = z.object({
  serviceId: z.number().int().positive({ message: 'Service is required' }),
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be at most 100 characters'),
  phone: z
    .string()
    .transform((v) => v.replace(/\s+/g, ''))
    .refine((v) => phoneRegex.test(v), {
      message: 'Enter a valid Pakistani phone number (e.g. 03001234567)',
    }),
  date: z
    .string()
    .refine(isValidIsoDate, { message: 'Date must be a valid ISO date (YYYY-MM-DD)' })
    .refine(isNotPastDate, { message: 'Date cannot be in the past' }),
  time: z.string().refine((v) => ALLOWED_TIMES.includes(v), {
    message: `Time must be one of: ${ALLOWED_TIMES.join(', ')}`,
  }),
  notes: z
    .string()
    .trim()
    .max(500, 'Notes must be at most 500 characters')
    .optional()
    .transform((val) => (val === '' || val === undefined ? undefined : val)),
});
