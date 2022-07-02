const argv = require("yargs")
    .options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Numero base de la tabla de multiplicar',
        //default: 1
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Muestra numero maximo de la tabla'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) throw new Error('numero base erroneo');

        //  si no exite error retornar true
        return true;
    })
    .argv;


module.exports = argv;