const {
  ValidationError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
  DatabaseError,
} = require('sequelize');
const AppError = require('../utils/AppError');

module.exports = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ status: 'fail', message: err.message });
  }

  if (err instanceof ValidationError) {
    const message = err.errors?.[0]?.message || 'Validation failed';
    return res.status(400).json({ status: 'fail', message });
  }

  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({ status: 'fail', message: 'Duplicate entry' });
  }

  if (err instanceof ForeignKeyConstraintError) {
    return res.status(400).json({ status: 'fail', message: 'Invalid reference' });
  }

  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ status: 'fail', message: 'Invalid JSON body' });
  }

  if (err instanceof DatabaseError) {
    console.error(err);
    return res.status(500).json({ status: 'error', message: 'Database error' });
  }

  console.error(err);
  res.status(500).json({ status: 'error', message: 'Something went wrong' });
};
