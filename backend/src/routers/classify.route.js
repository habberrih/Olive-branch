const express = require('express');
const router = express.Router();

const { httpGetModelResult } = require('./classifiy.controller');

router.get('/model', httpGetModelResult);

module.exports = router;
