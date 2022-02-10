const express = require('express');

const router = express.Router();

const binanceBot = require('./binance-bot');


router.use('/', binanceBot);

module.exports = router;
