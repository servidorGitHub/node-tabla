//

const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, maximo) => {

    try {

        let salida = '';
        let consola = '';
        for (let i = 1; i <= maximo; i++) {
            consola += `  ${ base } X ${ i } = ${ base * i }\n`.cyan;
            salida += `  ${ base } X ${ i } = ${ base * i }\n`;

        }
        if (listar) {
            console.clear();
            console.log('========================='.green);
            console.log(`      tabla del: ${base}`.yellow);
            console.log('========================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla - ${ base }.txt`, salida);
        return (`Tabla - ${ base }.txt creado`.yellow.italic);

    } catch (error) {
        throw error
    }
}

module.exports = { crearArchivo };