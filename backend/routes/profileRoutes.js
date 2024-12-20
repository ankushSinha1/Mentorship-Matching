const express = require('express');
const router = express.Router();

router.get('/:userId', (req, res) => {
    res.send(`Get Profile of User ${req.params.userId}`);
});

router.put('/:userId', (req, res) => {
    res.send(`Update Profile of User ${req.params.userId}`);
});

module.exports = router;
