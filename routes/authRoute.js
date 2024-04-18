const express = require('express');
const router = express.Router();
const User = require('../models/user');
const nodemailer = require('nodemailer');

//random OTP generation
function generateOTP() {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}

//User Registration
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        const otp = generateOTP();

        const newUser = new User({ email, password, otp, validated: false });
        await newUser.save();

        // await sendOTP(email, otp);
        res.status(201).json({ message: 'User registered successfully. Check your email for OTP.' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// User Validation
router.post('/validate', async (req, res) => {
    
});


//User Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
-       const user = await User.findOne({ email, password, validated: true });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials or user not validated' });
        }
        // Generate JWT token
        const token = req.headers.authorization;
        res.json({ message: 'Login successful', token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
