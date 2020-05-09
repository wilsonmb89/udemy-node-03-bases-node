// requires

// import fs from 'fs';
const fs = require('fs');
const colors = require('colors');

//module.exports.crearArchivo = async (base) => {
const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`La base ingresada ${base} no es un numero`.red);
    }
    if (!Number(limite)) {
      return reject(`El limite ingresado ${limite} no es un numero`.red);
    }
    console.log('Base:'.blue, base);
    console.log('limite:'.blue, limite);
    let data = '';
    for (let index = 0; index < limite; index++) {
      const mult = (index + 1);
      data = `${data}${base} * ${mult} = ${base * mult}\n`;
    }
    const dataWrite = new Uint8Array(Buffer.from(data));
    fs.writeFile(`./multiplicar/tablas/tabla-${base}.txt`, dataWrite, (err) => {
      if (err) return reject(err);
      return resolve(`The tabla-${base}.txt file has been saved!`.green);
    });
  });
}

const listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`La base ingresada ${base} no es un numero`.red);
    }
    if (!Number(limite)) {
      return reject(`El limite ingresado ${limite} no es un numero`.red);
    }
    for (let index = 0; index < limite; index++) {
      const mult = (index + 1);
      console.log(`${base} * ${mult} = ${base * mult}`);
    }
    resolve(`Es la tabla con base ${base} y limite ${limite} generada`.blue);
  });
}

module.exports = { crearArchivo, listarTabla }; 