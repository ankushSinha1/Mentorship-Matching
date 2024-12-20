const mongoose = require('mongoose');

const MentorshipRequestSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'declined'], default: 'pending' },
    message: { type: String, maxlength: 500 },
}, { timestamps: true });

module.exports = mongoose.model('MentorshipRequest', MentorshipRequestSchema);
