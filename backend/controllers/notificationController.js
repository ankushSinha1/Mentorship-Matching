const Notification = require('../models/Notification');

// Get User Notifications
exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.user._id });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

// Mark Notification as Read
exports.markAsRead = async (req, res) => {
    try {
        const { notificationId } = req.params;
        const notification = await Notification.findById(notificationId);

        if (!notification) {
            return res.status(404).json({ message: 'Notification not found.' });
        }

        // Ensure notification belongs to the user
        if (notification.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Not authorized to update this notification.' });
        }

        notification.isRead = true;
        await notification.save();

        res.status(200).json({ message: 'Notification marked as read.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};
