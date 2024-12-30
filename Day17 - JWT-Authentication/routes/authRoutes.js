const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/protected', protect, (req, res) => {
    res.status(200).json({ message: 'Welcome to the protected route!' });
});

module.exports = router;
