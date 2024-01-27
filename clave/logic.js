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
 
let Coleccion = [1,2,3,4,5,6,7,8,9,0];
 
let ColeccionMezclada = mezclarArray(Coleccion);
 
console.log(ColeccionMezclada);