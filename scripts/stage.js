#!/usr/bin/env node

"use strict";

var shell = require('shelljs');

var getIntegrationId = require('./get-integration-id');

var integrationName = process.argv[2];

if (!integrationName) {
    console.log('usage: stage.js <integration-name>\n');
    process.exit(1);
}

var integrationId = getIntegrationId(integrationName);

if (!integrationId.valid) {
    console.log('No integration from model: ' + integrationName + '\n');
    process.exit(1);
}

shell.exec('re integrate -o stage -i ' + integrationId.id);
