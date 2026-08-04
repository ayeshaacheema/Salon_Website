const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate');
const { createReviewSchema } = require('../validators/reviewValidator');
const { getAllReviews, createReview } = require('../controllers/reviewController');

router.get('/', getAllReviews);
router.post('/', validate(createReviewSchema), createReview);

module.exports = router;