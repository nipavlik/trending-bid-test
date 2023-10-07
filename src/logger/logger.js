const pino = require('pino');

const transport = pino.transport({
  target: 'pino-pretty',
  options: { destination: 1 },
});

module.exports = pino(transport);
