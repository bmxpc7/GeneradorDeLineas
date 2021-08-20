function myFunction() {
  const region = document.getElementById("region").value;
  const iccidInicial = document.getElementById("numerosIccid").value;
  const numerosGenerar = document.getElementById("numerosGenerar").value;
  generarTabla(generarNumeros(region, iccidInicial, numerosGenerar), iccidInicial)
}

function myFunctionBorrar() {
  document.getElementById("region").value;
  document.getElementById("numerosIccid").value = "";
  document.getElementById("numerosGenerar").value = "";
  document.getElementById("listaNumeros").value = "";
  document.getElementById("listaIccid").value = "";
  var padre = document.getElementById("tblNum");
  for (var i = 0; i < padre.children.length; i++) {
    var hijo = padre.children[i]
    padre.remove(hijo)
  }
  var padre2 = document.getElementById("tblIccid");
  for (var j = 0; j < padre2.children.length; j++) {
    var hijo = padre.children[j]
    padre2.remove(hijo)
  }
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
      if (numeroActual.length === 10 && iccidActual.length === 19) {
        contador++;
        listaNumeros.push(numeroActual)
      } else {
        i--
      }
    }
    return listaNumeros
  }
  if (folio[1] === "5") {

    let ladaAleatoria
    let lada = ["443", "438"]
    for (var j = 0; j < numerosGenerar; j++) {
      ladaAleatoria = Math.floor(Math.random() * 2)
      numeroActual = lada[ladaAleatoria] + Math.floor(Math.random() * 9999999);
      iccidActual = inicialFolio + Math.floor(Math.random() * 99999999999999999)
      if (numeroActual.length === 10 && iccidActual.length === 19) {
        contador++;
        listaNumeros.push(numeroActual)
      } else {
        j--
      }
    }
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
      if (numeroActual.length === 10 && iccidActual.length === 19) {
        contador++;
        listaNumeros.push(numeroActual)
      } else {
        k--
      }
    }
    return listaNumeros
  }

}

const generarTabla = (datos, inicialIccid) => {
  let listaInicio = '<ul class="list-group" id="tblNum" style="width: 18rem;">';
  let lista = 'Numeros Telefonicos';
  let listaFin = '</ul>';
  for (var i = 0; i < datos.length; i++) {
    lista += '<li class="list-group-item">' + datos[i] + '</li>';
  }
  let datosICCID = [];
  for (let j = 0; j < datos.length; j++) {
    iccidActual = inicialIccid + Math.floor(Math.random() * 99999999999999999)
    if (iccidActual.length === 19) {
      datosICCID.push(iccidActual)
    } else {
      j--
    }
  }
  let listaInicioICCID = '<ul class="list-group" id="tblIccid" style="width: 18rem;">';
  let listaICCID = 'ICCID';
  let listaFinICCID = '</ul>';
  for (var k = 0; k < datosICCID.length; k++) {
    listaICCID += '<li class="list-group-item">' + datosICCID[k] + '</li>';
  }
  document.getElementById("listaNumeros").innerHTML = listaInicio + lista + listaFin;
  document.getElementById("listaIccid").innerHTML = listaInicioICCID + listaICCID + listaFinICCID;
}