require('dotenv').config();

const fs = require('fs');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'cheap-source-map',

  devServer: {
    open: false,
    port: 3000,
    host: '0.0.0.0',
    headers: {
      'Content-Security-Policy':
        "default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data:; style-src 'self'; font-src 'self' data:;",
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin',
      'Feature-Policy':
        "accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'self'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none';  picture-in-picture 'none'; speaker 'none'; sync-xhr 'none'; usb 'none'; vr 'none';",
    },
    https: {
      key: fs.readFileSync(process.env.HTTPS_KEY_FILE),
      cert: fs.readFileSync(process.env.HTTPS_CERT_FILE),
    },
  },
});
