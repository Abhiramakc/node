const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message) {    
        this.emit('log', {id: 2, name: 'abhi'});
        console.log(message);        
    }
}

module.exports = Logger;