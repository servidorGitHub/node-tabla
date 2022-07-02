//

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();

//let data = [, , primero] = process.argv;
//console.log(primero);

//const base = 6;

//console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(res => console.log(res))
    .catch(err => console.log(err))