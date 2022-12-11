const { env } = require('process');

const target = 'http://localhost:3010';

const PROXY_CONFIG = [
  {
    context: [
      "/api",
   ],
    target: target + '/api',
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  },
  {
    context: [
      "/auth",
   ],
    target: target + '/auth',
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;
