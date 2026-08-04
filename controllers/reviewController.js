const Review = require('../models/Review');
const catchAsync = require('../utils/catchAsync');
const { success } = require('../utils/response');

exports.getAllReviews = catchAsync(async (req, res) => {
  const reviews = await Review.findAll();
  success(res, reviews);
});

exports.createReview = catchAsync(async (req, res) => {
  const review = await Review.create(req.body);
  success(res, review, 201);
});