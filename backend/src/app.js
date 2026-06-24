const express = require('express');
const authRouter = require('./routes/auth.routes');
const app = express();


// Middleware
app.use(express.json());
app.use('/api/auth', authRouter);

module.exports = app;