const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const { createBookingSchema } = require('../validators/bookingValidator');
const {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');

router.post('/', validate(createBookingSchema), createBooking);
router.get('/', getAllBookings);
router.get('/:id', getBookingById);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;