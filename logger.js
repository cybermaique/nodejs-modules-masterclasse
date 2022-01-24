const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('log', (message) => { //se emitir "log", vai exibir a mensagem
    console.log(message)
})
    //emitter.emit('log', "mensagem que eu quero")

function log(message) {
    emitter.emit('log', message)
}

//log("Emitindo mensagem de exemplo")

module.exports = log //exportando a funçao log do modulo logger