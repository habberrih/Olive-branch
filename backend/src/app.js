const express = require('express');
const app = express();

// const authRouter = require('./routes/auth');
const modelRouter = require('./routers/classify.route');
// const authenticateUser = require('./middleware/authentication');

app.use(express.json());

app.use('/', modelRouter);

module.exports = app;
