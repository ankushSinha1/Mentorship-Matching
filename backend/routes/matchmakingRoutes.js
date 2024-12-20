const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getMatches } = require('../controllers/matchmakingController.js');
const router = express.Router();

// Get Matches
router.get('/', protect, getMatches);

module.exports = router;
