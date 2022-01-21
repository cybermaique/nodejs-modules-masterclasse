const os = require('os') //importando "os". o node trabalha com Common JS(require e exports) para importar módulos. Aqui estamos importando o módulo do Node.

//console.log(os.platform()) //mostra o nome do sistema sendo usado.

const {freemem, totalmem} = os //extrair de dentro do os o freemen e totalmem > para exibir
console.log(freemem(), totalmem())