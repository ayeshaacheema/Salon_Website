const Booking = require('../models/Booking');
const Service = require('../models/Service');
const catchAsync = require('../utils/catchAsync');
const { success } = require('../utils/response');
const AppError = require('../utils/AppError');

exports.createBooking = catchAsync(async (req, res, next) => {
  const { serviceId, name, phone, date, time, notes } = req.body;

  const service = await Service.findByPk(serviceId);
  if (!service) return next(new AppError('Service not found', 404));

  const booking = await Booking.create({
    serviceId,
    name,
    phone,
    date,
    time,
    notes,
  });

  success(res, booking, 201);
});
