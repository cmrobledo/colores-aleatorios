// Seleccionar los elementos del DOM

const boton = document.querySelector('button'); // Aqui elegí el boton
const color = document.getElementById('color'); // Aqui elegí el parrafo

// Funcion para generar el color aleatorio
function generarColorHexAleatorio() {
  let digitos = "0123456789ABCDEF";
  let colorHex = "#";

  for (let i = 0; i < 6; i++) {
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorHex += digitos[indiceAleatorio];
  }
  return colorHex;
}

boton.addEventListener('click', function(){
  let colorAleatorio = generarColorHexAleatorio(); //Aqui ingreso la función a una variable
  // Actualizar el texto
  color.textContent = colorAleatorio;
  // Actualizar el fondo
  document.body.style.backgroundColor = colorAleatorio;
});

