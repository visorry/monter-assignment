const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoute')
const dotenv = require('dotenv');

dotenv.config(); 
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(process.env.DB_URI);

// Routes
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
