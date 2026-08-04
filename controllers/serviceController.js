const Service = require('../models/Service');
const catchAsync = require('../utils/catchAsync');
const { success } = require('../utils/response');
const AppError = require('../utils/AppError');

exports.getAllServices = catchAsync(async (req, res) => {
  const services = await Service.findAll();
  success(res, services);
});

exports.getServiceById = catchAsync(async (req, res, next) => {
  const service = await Service.findByPk(req.params.id);
  if (!service) return next(new AppError('Service not found', 404));
  success(res, service);
});