const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    // w = apaga o conteudo
    // a = adiciona o conteudo novo
    fs.writeFile(caminho, dados, {flag: 'w'}); 
};