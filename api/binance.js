var  api  = require("binance");
//import * as api from 'binance';
//import * as BinanceWS from '../node_modules/binance/lib/ws.js'
//import binance from 'binance';
//var Binance = require('binance-api-node').default;

var binanceWS = new api.BinanceWS(true);

var inf;

binanceWS.onKline('BNBBTC', '1m', data=>{
    console.log(data);
    inf=data;
   // document.getElementById("bi-1").value += JSON.stringify(data);
})

module.exports=(req,res)=>{
    res.json(inf);
  }