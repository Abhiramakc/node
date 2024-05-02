const Logger = require('./logger');
const logger = new Logger();


logger.on('log', (val) => {
    console.log(`Called listener:: ${JSON.stringify(val)}`);
    console.log(val);
});

logger.log('Calling Logger Method..');
