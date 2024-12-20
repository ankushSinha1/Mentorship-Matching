const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getNotifications, markAsRead } = require('../controllers/notificationController');
const router = express.Router();

// Get User Notifications
router.get('/', protect, getNotifications);

// Mark Notification as Read
router.put('/:notificationId/read', protect, markAsRead);

module.exports = router;