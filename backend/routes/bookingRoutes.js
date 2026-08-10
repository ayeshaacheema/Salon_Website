const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const { createBookingSchema } = require('../validators/bookingValidator');
const { createBooking } = require('../controllers/bookingController');

// Public: customers create bookings. List/update/delete are disabled until an admin dashboard exists.
router.post('/', validate(createBookingSchema), createBooking);

module.exports = router;
