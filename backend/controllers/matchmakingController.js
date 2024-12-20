const User = require('../models/User');

// Get Matches for User
exports.getMatches = async (req, res) => {
    try {
        const { role, skills, interests } = req.user;

        // Determine opposite role for matching
        const matchRole = role === 'mentor' ? 'mentee' : 'mentor';

        // Match criteria: shared skills or interests
        const criteria = {
            role: matchRole,
            ...(role === 'mentor'
                ? { interests: { $in: skills } } // Mentor matches mentees with shared skills
                : { skills: { $in: interests } }), // Mentee matches mentors with shared interests
        };

        // Find matches
        const matches = await User.find(criteria).select('-password');

        if (!matches.length) {
            return res.status(200).json({ message: 'No matches found. Try updating your skills or interests.', matches: [] });
        }

        res.status(200).json({ message: 'Matches found.', matches });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
};
