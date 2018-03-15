"use strict";

var path = require('path');
var rootLoc = path.dirname(require.resolve('./index.js'));
var confLoc = path.join(rootLoc, 'conf');
var dataLoc = path.join(rootLoc, 'data');

var confUtil = require('re-conf-util');

module.exports = confUtil.prepareConf(confLoc, dataLoc, 'conf-test', [  ]);
