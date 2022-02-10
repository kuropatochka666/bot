const express = require('express');
const ccxt = require('ccxt');
const axios = require('axios');

const router = express.Router();


const tick = async () => {
    const {asset, base, spread, allocation} = config;

    const orders = await binanceClent.fetchOpenOrders();
    const marketPrice = await axios.get(`https://api.binance.com/api/v3/ticker/price?symbol=${asset + base}`)
}

const run = () => {
    const config = {
        asset: 'AKRO',
        base: 'BTC',
        allocation: 0.1,
        spread: 0.1,
        tickInterval: 2000,
    }
    const binanceClient = new ccxt.binance({
        apiKey: process.env.API_KEY,
        secret: process.env.API_SECRET,
    });
    tick(config, binanceClient);
    setInterval(tick, config.tickInterval, config, binanceClient)
}


router.get('/', function (req, res) {
    run();
});


module.exports = router;
