/* eslint no-param-reassign: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
require('dotenv').config();
const path = require('path');
const withPlugins = require('next-compose-plugins');
const stylus = require('@zeit/next-stylus');
const Dotenv = require('dotenv-webpack');

module.exports = withPlugins([
  [stylus, {}],
], {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
});
