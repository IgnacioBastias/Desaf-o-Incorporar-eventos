let nombre;
const titulo = document.getElementById('titulo');
const contenido = document.getElementById('contenido');
let apuesta = 0;
let apuesta1 = 0;
let fondo = 0;
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
    { formato: `Ficha redonda`, color: `Rojo`, valor: 5 },
    { formato: `Ficha redonda`, color: `Verde`, valor: 50 },
    { formato: `Ficha redonda`, color: `Negro`, valor: 500 },
    { formato: `Ficha cuadrada`, color: `Blanco`, valor: 1000 },
    { formato: `Ficha cuadrada`, color: `Violeta`, valor: 5000 },
]

const Pleno = () => {
    let numb = 0;
    do {
        Opcion1 = Number(prompt(`Elige un Numero del 1 al 36`));
        numb = numeros.numerosTotal.some(Valor => Valor === Opcion1);
    } while (numb === false)
    alert(`Elegiste el N°${Opcion1}`);
}
const Girar = () => {
    resultado = Math.round(Math.random() * 36);
    alert(`La ruleta salio ${resultado}`);
}

const ResultadoPleno = () => {
    if (Opcion1 === resultado) {
        alert("🤑 ¡Ganaste! 🤑");
        fondo = fondo + apuesta;
    } else {
        alert("😢 Gana la Casa 😢");
        fondo = fondo - apuesta;
    }
    fondo1.innerHTML = ` Tu saldo es $ ${fondo} `;
    contenido.append(fondo1);
}

const Apuesta = () => {
    do {
        apuesta = Number(prompt(`
    💲¿Cuanto quieres apostar?💲
    5 - 50 - 500 - 1000 - 5000`));
        apuesta1 = fichas.find(ficha => ficha.valor === apuesta);
    } while (apuesta > 5 && apuesta > 5000 || apuesta > fondo);

    alert(`Tu apuesta es $ ${apuesta1.valor}, ${apuesta1.formato} color ${apuesta1.color}`);
}

const Resultado = () => {
    const resultadoFinal = Valor.some(Valor => Valor === resultado);
    if (resultadoFinal === true) {
        alert("🤑 ¡Ganaste! 🤑");
        fondo = fondo + apuesta;
    } else {
        alert("😢 Gana la Casa 😢");
        fondo = fondo - apuesta;
    }
    fondo1.innerHTML = ` Tu saldo es $ ${fondo} `;
    contenido.append(fondo1);
}

nombre = prompt('Ingresa tu nombre');

let subtitulo = document.createElement("h2");
subtitulo.innerHTML = `Bienvenid@ ${nombre}`;
titulo.append(subtitulo);

do {
    fondo = Number(prompt(`💲 Ingrese su dinero 💲`));
} while (fondo < 5);

let fondo1 = document.createElement("h2");
fondo1.innerHTML = ` Tu saldo es $ ${fondo} `;
contenido.append(fondo1);

const respuestaClickStart = () => {

    Opcion = Number(prompt(`
      1 Numero
      2 Rojo
      3 Negro
      4 Par
      5 Impar
      6 Cero 
    `))
    switch (Opcion) {
        case 1: {
            Valor = numeros.numerosTotal;
            Pleno();
            Apuesta();
            Girar();
            ResultadoPleno();
            break;
        }
        case 2: {
            alert(`🔴 Elegiste Numeros Rojos 🔴`);
            Valor = numeros.numerosRojos;
            Apuesta();
            Girar();
            Resultado();
            break;
        }
        case 3: {
            alert(`⚫ Elegiste Numeros Negros ⚫`);
            Valor = numeros.numerosNegros;
            Apuesta();
            Girar();
            Resultado();
            break;
        }
        case 4: {
            alert("👀 Elegiste Numeros Pares 👀");
            Valor = numeros.numerosPares;
            Apuesta();
            Girar();
            Resultado();
            break;
        }
        case 5: {
            alert("👁 Elegiste Numeros Impares  👁");
            Valor = numeros.numerosImpares;
            Apuesta();
            Girar();
            Resultado();
            break;
        }
        case 6: {
            alert("Elegiste el N°0");
            Valor = numeros.cero;
            Apuesta();
            Girar();
            Resultado();
            break;
        }
        default: {
            alert("❌ Dato no valido ❌");
            break;
        }
    }

    if (fondo <= 0) {
        fondo1.innerHTML = `👎 Te quedaste sin dinero, suerte para la proxima 👎`;
        contenido.append(fondo1);
    }
}

const respuestaClickRestart = () => {
    location.reload();
}

let botonPlay = document.getElementById(`play`);
botonPlay.onclick = () => { respuestaClickStart() };

let botonRestart = document.getElementById(`restart`);
botonRestart.addEventListener(`click`, respuestaClickRestart);

