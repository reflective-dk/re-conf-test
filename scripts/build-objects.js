#!/usr/bin/env node

"use strict";

var fs = require('fs');
var path = require('path');
var conf = require('../index');

conf.resolve().then(cnf => {
    var output = JSON.stringify({ objects: cnf.state['conf-test'] }, null, 2);
    fs.writeFileSync(path.join('build', 'objects.json'), output);
});
