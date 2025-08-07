let numeroSecreto = 0;
let intentos = 1;
let listaNumeroSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

if(numeroDeUsuario === numeroSecreto){

  asignarTextoElemento("p", `¡Felicidades! Has adivinado el número secreto en  solo ${intentos} ${(intentos === 1) ? "intento" : "intentos"} `  );
  document.querySelector('#reiniciar').removeAttribute('disabled');
} 
else{
  //el usuario no acerto
  if(numeroDeUsuario > numeroSecreto){
    asignarTextoElemento("p", `El número secreto es menor que ${numeroDeUsuario}.`);
  }
  else{
    asignarTextoElemento("p", `El número secreto es mayor que ${numeroDeUsuario}.`);
  }
    limpiarCampo();
    intentos++;
  }
  return;
}

function limpiarCampo(){
  document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
  asignarTextoElemento("h1", "Juega conmigo");
  asignarTextoElemento("p", `Adivina el número secreto entre 1 y ${numeroMaximo}.`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
   console.log(numeroGenerado);
   console.log(listaNumeroSorteados);
  //si ya sorteamos los numeros
  if(listaNumeroSorteados.length == numeroMaximo)
    {
      asignarTextoElemento('p','Ya se sortearon todos los numeros');
      
    }
    else {
      //si el numero generado esta incluido en la lista
      if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
      }
      else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
      }
    }
  }

function nuevoJuego(){
  //limpiar caja
  limpiarCampo();
  //indicar mensaje de intervalo de numeros
  //generar el numero aleatorio
  //inicializar el numero intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.getElementById('reiniciar').setAttribute('disabled', true );
}
  
condicionesIniciales();