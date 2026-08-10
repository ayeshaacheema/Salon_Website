module.exports = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    const errors = result.error.issues.map((e) => ({
      field: e.path.length ? e.path.join('.') : undefined,
      message: e.message,
    }));
    return res.status(400).json({
      status: 'fail',
      message: errors[0]?.message || 'Validation failed',
      errors,
    });
  }
  req.body = result.data;
  next();
};
