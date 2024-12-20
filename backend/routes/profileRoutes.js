const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');
const router = express.Router();

// Routes for profile management
router.get('/', protect, getUserProfile);
router.put('/', protect, updateUserProfile);

module.exports = router;
