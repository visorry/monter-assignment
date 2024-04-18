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
    
});

// User Validation
router.post('/validate', async (req, res) => {
    
});

// User Login
router.post('/login', async (req, res) => {
    
});

module.exports = router;
