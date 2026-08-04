const AppError = require('../utils/AppError');

module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ status: 'fail', message: err.message });
  }
  console.error(err);
  res.status(500).json({ status: 'error', message: 'Something went wrong' });
};