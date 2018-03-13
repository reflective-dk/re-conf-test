"use strict";

var conf = require('../index');

module.exports = getIntegrationId;

function getIntegrationId(integrationName) {
    var instances = ((conf[integrationName] || {}).instances || {}).integration;

    if (!instances) {
        return {
            valid: false,
            message: 'No integration from model: ' + integrationName + '\n'
        };
    }

    var integrationId = (instances[integrationName] ||
                         instances[integrationName + '-integration'] || {}).id;

    if (!integrationId) {
        return {
            valid: false,
            message: 'Integration not found: ' + integrationName + '\n'
        };
    }
    return { valid: true, id: integrationId };
}
