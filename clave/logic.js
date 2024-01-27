let Coleccion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function mezclarArray(Coleccion) {
  for (var i = Coleccion.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    // Intercambiar elementos
    var temp = Coleccion[i];
    Coleccion[i] = Coleccion[j];
    Coleccion[j] = temp;
  }
  return Coleccion;
}
let ColeccionMezclada = mezclarArray(Coleccion);

for (var k = 0; k < ColeccionMezclada.length; k++) {
  document.getElementById("n" + k).innerHTML = ColeccionMezclada[k];
}
function mouseoverPass() {
  for (var k = 0; k < ColeccionMezclada.length; k++) {
    document.getElementById("n" + k).innerHTML = "*";
  }
}
function mouseoutPass() {
  for (var k = 0; k < ColeccionMezclada.length; k++) {
    document.getElementById("n" + k).innerHTML = ColeccionMezclada[k];
  }
}

let inputVal = "";

function cleanInput() {
  inputVal = "";
  document.getElementById("input").value = inputVal;
}

function sendClave() {
    alert(inputVal);
}

function btnClick(num) {
  if (inputVal.length < 4) {
    inputVal = inputVal + ColeccionMezclada[num];
    document.getElementById("input").value = inputVal;
  }
}
