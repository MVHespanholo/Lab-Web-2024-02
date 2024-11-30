'use strict';

const dotenv = require('dotenv').config();

// All configurations will extend these options
// ============================================
const all = {
    basePath: '/cms/v1',

    env: process.env.ENVIRONMENT,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 5000
}

module.exports = all;