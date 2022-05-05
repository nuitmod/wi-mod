var api  = require("binance");
//import * as api from 'binance';
//import * as api from '../node_modules/binance/lib/binance.js';
//import * as BinanceWS from '../node_modules/binance/lib/ws.js';
//var Binance = require('binance-api-node').default;
//define(function (require) {
//  var api = require ("binance");
//});

// require(['../node_modules/binance/lib/ws'], function(BinanceWS){

// })

//let binanceWS = await import('../node_modules/binance/lib/ws.js')

var binanceWS = new api.BinanceWS(true);

//var inf;

binanceWS.onKline('BNBBTC', '1m', data=>{
    console.log(data);
   // inf=data;
   // document.getElementById("bi-1").value += JSON.stringify(data);
})

// module.exports=(req,res)=>{
//     res.json(inf);
//   }