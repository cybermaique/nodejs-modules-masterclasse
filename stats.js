const os = require('os') //importando "os". o node trabalha com Common JS(require e exports) para importar módulos. Aqui estamos importando o módulo do Node.
const log = require('./logger') //importando o arquivo logger


setInterval(() => { //função global, executar todo o script a cada 1000ms (definido no final)
//console.log(os.platform()) //mostra o nome do sistema sendo usado.

const {freemem, totalmem} = os //extrair de dentro do os o freemen e totalmem > para exibir

const total = parseInt(totalmem() / 1024 / 1024)
const mem = parseInt(freemem() / 1024 / 1024)
const percents = parseInt((mem / total) * 100)

//console.log(mem, total, percents)
//console.log(`${parseInt(freemem() / 1024 / 1024)} MB`, totalmem()) //com o template litorals podemos usar codigo js e string

const stats = {
    free: `${mem}MB`, 
    total: `${total}MB`,
    usage: `${percents}%`
}

console.log(stats)

console.clear()
console.log("=== PC STATS ===")
console.table(stats)

console.log("Rodando")

}, 1000)

