
const titulo = document.getElementById('titulo');
const datos = document.getElementById('datos');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const agregarDinero = document.getElementsByClassName(`agregarDinero`)[0];
const dinero = document.getElementById(`dinero`)
let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
const fichaAmarilla = document.getElementsByClassName('fAmarillo')[0];
const fichaRoja = document.getElementsByClassName('fRojo')[0];
const fichaBlanca = document.getElementsByClassName('fBlanco')[0];
const fichaNegra = document.getElementsByClassName('fNegro')[0];
const botonGirar = document.getElementById(`girar`);
const Pares = document.getElementsByClassName('par')[0];
const Impares = document.getElementsByClassName('impar')[0];
const numeroCero = document.getElementsByClassName('numero0')[0];
const Negros = document.getElementsByClassName('negro')[0];
const Rojos = document.getElementsByClassName(`rojo`)[0];
let apuesta = 0;
let apuesta1 = 0;
let fondo = 0;
let fondo1 = 0;
let Opcion = 0;
let Opcion1 = 0;
let Valor = 0;
let resultado = 0;

const numeros = {
    numerosTotal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    numerosRojos: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    numerosNegros: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
    numerosPares: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    numerosImpares: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    cero: [0]
}

const fichas = [
    { color: `Amarillo`, valor: 5 },
    { color: `Rojo`, valor: 1000 },
    { color: `Negro`, valor: 50 },
    { color: `Blanco`, valor: 500 },
]

const Pleno = () => {
    let numb = 0;
    do {
        Opcion1 = Number(prompt(`Elige un Numero del 1 al 36`));
        numb = numeros.numerosTotal.some(Valor => Valor === Opcion1);
    } while (numb === false)
    alert(`Elegiste el N°${Opcion1}`);
}

const Apuesta = () => {
    if (apuesta > saldo) {
        alert("No tienes tanto dinero")
    } else {
        alert(`Estas apostando $${apuesta}`)
    }
}

const ResultadoPleno = () => {
    if (Opcion1 === resultado) {
        alert("🤑 ¡Ganaste! 🤑");
        saldo = Number(saldo) + apuesta;
    } else {
        alert("😢 Gana la Casa 😢");
        saldo = saldo - apuesta;
    }
    fondo1.innerHTML = ` Tu saldo es $ ${saldo} `;
    datos.append(fondo1);
}

const Resultado = () => {
    const resultadoFinal = Valor.some(Valor => Valor === resultado);
    if (resultadoFinal === true) {
        alert("🤑 ¡Ganaste! 🤑");
        saldo = Number(saldo) + apuesta;
    } else {
        alert("😢 Gana la Casa 😢");
        saldo = saldo - apuesta;
    }
    fondo1.innerHTML = ` Tu saldo es $ ${saldo} `;
    datos.append(fondo1);

    if (saldo <= 0) {
        fondo1.innerHTML = `👎 Te quedaste sin dinero 👎`;
        fichaRoja.style.visibility = "hidden";
        fichaAmarilla.style.visibility = "hidden";
        fichaBlanca.style.visibility = "hidden";
        fichaNegra.style.visibility = "hidden";
        botonGirar.style.visibility = "hidden";
        contenido.append(fondo1);
    }
}

const Girar = () => {
    console.log(Valor)
    if (Valor != 0) {
        resultado = Math.round(Math.random() * 36);
        alert(`La ruleta salio ${resultado}`);
        Resultado();
    } else if (Opcion1 != 0) {
        resultado = Math.round(Math.random() * 36);
        alert(`La ruleta salio ${resultado}`);
        ResultadoPleno();
    } else {
        alert(`olvidaste tu apuesta`)
    }
}

const respuestaAgregarDinero = () => {
    saldo = dinero.value
    if (saldo != 0) {
        dinero.style.display = 'none';
        agregarDinero.style.display = 'none';
        fondo1 = document.createElement("h2");
        fondo1.innerHTML = ` Tu saldo es $ ${saldo} `;
        datos.append(fondo1);
    }
    fichaRoja.style.visibility = "visible";
    fichaAmarilla.style.visibility = "visible";
    fichaBlanca.style.visibility = "visible";
    fichaNegra.style.visibility = "visible";
}

Pares.addEventListener(`click`, () => {
    Valor = numeros.numerosPares;
    Pares.style.border = `solid orange`;
});

Impares.addEventListener(`click`, () => {
    Valor = numeros.numerosImpares;
    Impares.style.border = `solid orange`;
});

numeroCero.addEventListener(`click`, () => {
    Valor = numeros.cero;
    numeroCero.style.border = `solid orange`;
});

Rojos.addEventListener(`click`, () => {
    Valor = numeros.numerosRojos;
    Rojos.style.border = `solid orange`;
});

Negros.addEventListener(`click`, () => {
    Valor = numeros.numerosNegros;
    Negros.style.border = `solid orange`;
});

fichaAmarilla.addEventListener(`click`, () => {
    apuesta = `Amarillo`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaRoja.style.opacity = ".6";
    fichaAmarilla.style.opacity = "2";
    fichaBlanca.style.opacity = ".6";
    fichaNegra.style.opacity = ".6";
    Apuesta();
});

fichaRoja.addEventListener(`click`, () => {
    apuesta = `Rojo`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaRoja.style.opacity = "2";
    fichaAmarilla.style.opacity = ".6";
    fichaBlanca.style.opacity = ".6";
    fichaNegra.style.opacity = ".6";
    Apuesta();
});

fichaBlanca.addEventListener(`click`, () => {
    apuesta = `Blanco`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaRoja.style.opacity = ".6";
    fichaAmarilla.style.opacity = ".6";
    fichaBlanca.style.opacity = "2  ";
    fichaNegra.style.opacity = ".6";
    Apuesta();
});

fichaNegra.addEventListener(`click`, () => {
    apuesta = `Negro`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaRoja.style.opacity = ".6";
    fichaAmarilla.style.opacity = ".6";
    fichaBlanca.style.opacity = ".6";
    fichaNegra.style.opacity = "2";
    Apuesta();
});

if (apellidoUsuario != `` && nombreUsuario != ``) {
    let subtitulo = document.createElement("h2");
    subtitulo.innerHTML = `Bienvenid@ ${nombreUsuario} ${apellidoUsuario}`;
    titulo.append(subtitulo);
}

agregarDinero.addEventListener(`click`, respuestaAgregarDinero);

botonGirar.addEventListener(`click`, Girar);

//.reset()

// const respuestaClickStart = () => {

//     Opcion = Number(prompt(`
//       1 Numero
//       2 Rojo
//       3 Negro
//       4 Par
//       5 Impar
//       6 Cero
//     `))
//     switch (Opcion) {
//         case 1: {
//             Valor = numeros.numerosTotal;
//             Pleno();
//             Apuesta();
//             Girar();
//             ResultadoPleno();
//             break;
//         }
//         case 2: {
//             alert(`🔴 Elegiste Numeros Rojos 🔴`);
//             Valor = numeros.numerosRojos;
//             Apuesta();
//             Girar();
//             Resultado();
//             break;
//         }
//         case 3: {
//             alert(`⚫ Elegiste Numeros Negros ⚫`);
//             Valor = numeros.numerosNegros;
//             Apuesta();
//             Girar();
//             Resultado();
//             break;
//         }
//         case 4: {
//             alert("👀 Elegiste Numeros Pares 👀");
//             Valor = numeros.numerosPares;
//             Apuesta();
//             Girar();
//             Resultado();
//             break;
//         }
//         case 5: {
//             alert("👁 Elegiste Numeros Impares  👁");
//             Valor = numeros.numerosImpares;
//             Apuesta();
//             Girar();
//             Resultado();
//             break;
//         }
//         case 6: {
//             alert("Elegiste el N°0");
//             Valor = numeros.cero;
//             Apuesta();
//             Girar();
//             Resultado();
//             break;
//         }
//         default: {
//             alert("❌ Dato no valido ❌");
//             break;
//         }
//     }

//     if (fondo <= 0) {
//         fondo1.innerHTML = `👎 Te quedaste sin dinero, suerte para la proxima 👎`;
//         contenido.append(fondo1);
//     }
// }












