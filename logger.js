const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('log', (message) => {
    console.log(message)
})
    //emitter.emit('log', "mensagem que eu quero")

function log(message) {
    emitter.emit('log', message)
}

module.exports = log //exportando a funçao log do modulo logger