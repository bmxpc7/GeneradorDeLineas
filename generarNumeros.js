var fs = require('fs');
var readline = require('readline');
const generarFolio = () => {
  let ruta = ["R4-", "R5-", "R6-"];
  let tipo = ["T", "P", "A"]
  let num1 = Math.floor(Math.random() * 9)
  let letra = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "K", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let num2 = Math.floor(Math.random() * 99999)
  let rutaAleatoria = Math.floor(Math.random() * 3)
  let letraAleatoria = Math.floor(Math.random() * 26)
  return ruta[rutaAleatoria] + tipo[rutaAleatoria] + num1 + letra[letraAleatoria] + num2
}

const generarNumeros = (folio, inicialFolio, numerosGenerar) => {
  let contador = 0;
  let listaNumeros = []
  if (folio[1] === "4") {

    listaNumeros = []
    let ladaAleatoria
    let lada = ["812", "826"]
    for (var i = 0; i < numerosGenerar; i++) {
      ladaAleatoria = Math.floor(Math.random() * 2)
      numeroActual = lada[ladaAleatoria] + Math.floor(Math.random() * 9999999);
      iccidActual = inicialFolio + Math.floor(Math.random() * 99999999999999999)
      let TAC
      let FAC
      let SNR
      let W
      let imei
      do {
        do {
          TAC = Math.floor(Math.random() * 999999)
        } while (TAC.length === 6);
        do {
          FAC = Math.floor(Math.random() * 99)
        } while (FAC.length === 2);
        do {
          SNR = Math.floor(Math.random() * 999999)
        } while (SNR.length === 6);
        do {
          W = Math.floor(Math.random() * 9)
        } while (W.length === 1);
        imei = TAC.toString() + FAC.toString() + SNR.toString() + W.toString()
      } while (imei.length !== 15);
      if (numeroActual.length === 10 && iccidActual.length === 19) {
        contador++;
        listaNumeros.push(numeroActual)
        listaNumeros.push(iccidActual)
        listaNumeros.push(imei)
      } else {
        i--
      }
    }
    console.log(contador);
    return listaNumeros
  }
  if (folio[1] === "5") {

    let ladaAleatoria
    let lada = ["443", "438"]
    for (var j = 0; j < numerosGenerar; j++) {
      ladaAleatoria = Math.floor(Math.random() * 2)
      numeroActual = lada[ladaAleatoria] + Math.floor(Math.random() * 9999999);
      iccidActual = inicialFolio + Math.floor(Math.random() * 99999999999999999)
      let TAC
      let FAC
      let SNR
      let W
      let imei
      do {
        do {
          TAC = Math.floor(Math.random() * 999999)
        } while (TAC.length === 6);
        do {
          FAC = Math.floor(Math.random() * 99)
        } while (FAC.length === 2);
        do {
          SNR = Math.floor(Math.random() * 999999)
        } while (SNR.length === 6);
        do {
          W = Math.floor(Math.random() * 9)
        } while (W.length === 1);
        imei = TAC.toString() + FAC.toString() + SNR.toString() + W.toString()
      } while (imei.length !== 15);
      if (numeroActual.length === 10 && iccidActual.length === 19) {
        contador++;
        listaNumeros.push(numeroActual)
        listaNumeros.push(iccidActual)
        listaNumeros.push(imei)
      } else {
        j--
      }
    }
    console.log(contador);
    return listaNumeros
  }
  if (folio[1] === "6") {
    listaNumeros = []
    let ladaAleatoria
    let lada = ["442", "445", "438"]
    for (var k = 0; k < numerosGenerar; k++) {
      ladaAleatoria = Math.floor(Math.random() * 3)
      numeroActual = lada[ladaAleatoria] + Math.floor(Math.random() * 9999999)
      iccidActual = inicialFolio + Math.floor(Math.random() * 99999999999999999)
      let TAC
      let FAC
      let SNR
      let W
      let imei
      do {
        do {
          TAC = Math.floor(Math.random() * 999999)
        } while (TAC.length === 6);
        do {
          FAC = Math.floor(Math.random() * 99)
        } while (FAC.length === 2);
        do {
          SNR = Math.floor(Math.random() * 999999)
        } while (SNR.length === 6);
        do {
          W = Math.floor(Math.random() * 9)
        } while (W.length === 1);
        imei = TAC.toString() + FAC.toString() + SNR.toString() + W.toString()
      } while (imei.length !== 15);
      if (numeroActual.length === 10 && iccidActual.length === 19) {
        contador++;
        listaNumeros.push(numeroActual)
        listaNumeros.push(iccidActual)
        listaNumeros.push(imei)
      } else {
        k--
      }
    }
    console.log(contador);
    return listaNumeros
  }

}

const generarArchivo = (datos, nombre) => {
  var stream = fs.createWriteStream(nombre + ".txt");
  stream.once('open', function () {
    for (let index = 0; index < datos.length; index++) {
      if (index % 2 === 0) {
        stream.write(datos[index] + "\t");
      } else if (index % 2 === 1) {
        stream.write(datos[index] + "\t");
      } else if (index % 2 === 2) {
        stream.write(datos[index] + "\n");
      }
    }
    stream.end();
  });
console.log("El archivo fue creado correctamente");
}
const folioFinal = generarFolio()

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question("¿Cuántos números desea generar?", function (answer) {
  generarArchivo(generarNumeros(folioFinal, "89", answer), folioFinal)
  rl.close();
});
