var fs = require('fs');
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
      if (numeroActual.length === 10 && iccidActual.length ===19) {
        contador++;
        listaNumeros.push(numeroActual)
        listaNumeros.push(iccidActual)
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
      if (numeroActual.length === 10 && iccidActual.length ===19) {
        contador++;
        listaNumeros.push(numeroActual)
        listaNumeros.push(iccidActual)
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
      if (numeroActual.length === 10 && iccidActual.length ===19) {
        contador++;
        listaNumeros.push(numeroActual)
        listaNumeros.push(iccidActual)
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
  stream.once('open', function (fd) {
    for (let index = 0; index < datos.length; index++) {
      if (index % 2 === 0) {
        stream.write(datos[index] + "\t");
      } else {
        stream.write(datos[index] + "\n");
      }
    }
    stream.end();
  });
  console.log("El archivo fue creado correctamente");
}
const folioFinal = generarFolio()
generarArchivo(generarNumeros(folioFinal, "53", 4), folioFinal)