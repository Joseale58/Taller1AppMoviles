let clavecontainer = document.getElementById("clave");

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
 
const mappedNumbers = ColeccionMezclada.map((number, index) => {
    /* return `<div class="project-card" key=${index}>
                  <img src=${user.avatar} alt="user profile image" />
                  <div class="details">
                   <p>${user.name}</p>
                   <p>${user.home_address}</p>
                   <p>${user.office_address}</p>
                 </div>
            </div>`; */
    return `<tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        </tr>`;
  });