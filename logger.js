const EventEmitter = require('events')
const fs = require('fs') //módulo fs = módulo que trabalha com os arquivos do sistema (system files)
const path = require('path') //vai pegar o arquivo no local exato que eu falar

const emitter = new EventEmitter()

emitter.on('log', (message) => { //se emitir "log", vai exibir a mensagem
    fs.appendFile(path.join(__dirname, 'log.txt' ), message, err =>  { //join identifica so, dirname pega o melhor caminho, log pela o arquivo log
        if (err) throw err
    })
})
    //emitter.emit('log', "mensagem que eu quero")

function log(message) {
    emitter.emit('log', message)
}

//log("Emitindo mensagem de exemplo")

module.exports = log //exportando a funçao log do modulo logger'