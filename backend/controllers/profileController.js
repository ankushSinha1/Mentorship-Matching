const User = require('../models/User');

// Get User Profile
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User profile not found.' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
    try {
        const { name, skills, interests, bio } = req.body;

        // Find user by ID and update
        const updatedUser = await User.findByIdAndUpdate(
            req.user._id,
            { name, skills, interests, bio },
            { new: true, runValidators: true }
        ).select('-password');

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }

        res.status(200).json({ message: 'Profile updated successfully.', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};
