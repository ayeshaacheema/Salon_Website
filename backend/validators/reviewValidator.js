const { z } = require('zod');

exports.createReviewSchema = z.object({
  name: z.string().min(2),
  role: z.string().optional(),
  comment: z.string().min(3),
  rating: z.number().int().min(1).max(5).default(5),
});