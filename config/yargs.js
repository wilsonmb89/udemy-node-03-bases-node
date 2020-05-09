const paramConfig = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    demand: true,
    alias: 'l',
    default: 10
  }
};

const argv = require('yargs')
  .command('multiplicar', 'Genera el archivo de tabla de multiplicar', paramConfig)
  .command('listar', 'Imprime en consola la tabla de multiplicar', paramConfig)
  .help()
  .argv;

module.exports = { argv };