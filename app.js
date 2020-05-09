const { argv } = require("./config/yargs");

const operacion = argv._[0];

switch (operacion) {
  case 'multiplicar':
    // import { crearArchivo } from './multiplicar/multiplicar.js';
    const { crearArchivo } = require('./multiplicar/multiplicar.js'); // Destructuracion del metodo crearArchivo en multiplicar.js
    crearArchivo(argv.base, argv.limite)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    break;
  case 'listar':
    const { listarTabla } = require('./multiplicar/multiplicar');
    listarTabla(argv.base, argv.limite)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    break;
  default:
    console.log('Operacion no soportada');
    break;
}
