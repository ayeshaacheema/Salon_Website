const Booking = require('../models/Booking');
const Service = require('../models/Service');
const catchAsync = require('../utils/catchAsync');
const { success } = require('../utils/response');
const AppError = require('../utils/AppError');

exports.createBooking = catchAsync(async (req, res, next) => {
  const service = await Service.findByPk(req.body.serviceId);
  if (!service) return next(new AppError('Service not found', 404));

  const booking = await Booking.create(req.body);
  success(res, booking, 201);
});

exports.getAllBookings = catchAsync(async (req, res) => {
  const bookings = await Booking.findAll({ include: Service });
  success(res, bookings);
});

exports.getBookingById = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.id, { include: Service });
  if (!booking) return next(new AppError('Booking not found', 404));
  success(res, booking);
});

exports.updateBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return next(new AppError('Booking not found', 404));
  await booking.update(req.body);
  success(res, booking);
});

exports.deleteBooking = catchAsync(async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.id);
  if (!booking) return next(new AppError('Booking not found', 404));
  await booking.destroy();
  res.status(204).send();
});