'use strict';

var pp = require('polish-proverbs');
var rpp = function(cb) {
  pp(function(proverbs) {
    proverbs = proverbs.split('\n');

    cb(proverbs[~~(Math.random()*proverbs.length)]);
  });
}

rpp(function(proverb) {
  console.log(proverb);
});
