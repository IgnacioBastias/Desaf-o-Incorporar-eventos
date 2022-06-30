// Variables

let apuesta = 0;
let apuesta1 = 0;
let fondo1 = 0;
let Opcion1 = 0;
let Valor = 0;
let Valor1 = 0;
let resultado = 0;

// Variables DOM

const titulo = document.getElementById('titulo');
const datos = document.getElementById('datos');
const agregarDinero = document.getElementsByClassName(`agregarDinero`)[0];
const dinero = document.getElementById(`dinero`)
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
let subtitulo = document.createElement("h2");
let resutadoRuleta = document.createElement("h3");

// Storage

let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');

// Arrays y Objetos 

const numeros = [
    { valores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36], id: "Total " },
    { valores: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36], id: "Rojos" },
    { valores: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35], id: "Negros" },
    { valores: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36], id: "Pares" },
    { valores: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35], id: "Impares" },
    { valores: [0], id: "cero" },
]

const fichas = [
    { color: `Amarillo`, valor: 5 },
    { color: `Rojo`, valor: 1000 },
    { color: `Negro`, valor: 50 },
    { color: `Blanco`, valor: 500 },
]

// Funciones

const Apuesta = () => {
    if (apuesta > saldo) {
        alert("No tienes tanto dinero");
        apuesta = 0;
    } else {
        alert(`Estas apostando $${apuesta}`);
    }
}

const ResultadoPleno = () => {
    if (Opcion1 === resultado) {
        subtitulo.innerHTML = `🤑 ¡Ganaste! 🤑`;
        titulo.append(subtitulo);
        // alert("🤑 ¡Ganaste! 🤑");
        saldo = Number(saldo) + apuesta;
    } else {
        subtitulo.innerHTML = `😢 Gana la Casa 😢`;
        titulo.append(subtitulo);
        // alert("😢 Gana la Casa 😢");
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
    }
}

const Resultado = () => {
    const resultadoFinal = Valor.some(Valor => Valor === resultado);
    if (resultadoFinal === true) {
        subtitulo.innerHTML = `🤑 ¡Ganaste! 🤑`;
        titulo.append(subtitulo);
        // alert("🤑 ¡Ganaste! 🤑");
        saldo = Number(saldo) + apuesta;
    } else {
        subtitulo.innerHTML = `😢 Gana la Casa 😢`;
        titulo.append(subtitulo);
        // alert("😢 Gana la Casa 😢");
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
    }
}

const Girar = () => {
    if (Valor != ``) {
        resultado = Math.round(Math.random() * 36);
        resutadoRuleta.innerHTML = `La ruleta salio ${resultado}`;
        titulo.append(resutadoRuleta);
        // alert(`La ruleta salio ${resultado}`);
        Resultado();
        reiniciarApuesta();
    } else if (Opcion1 != 0) {
        resultado = Math.round(Math.random() * 36);
        resutadoRuleta.innerHTML = `La ruleta salio ${resultado}`;
        titulo.append(resutadoRuleta);
        // alert(`La ruleta salio ${resultado}`);
        ResultadoPleno();
        reiniciarApuesta();
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

const marcarFicha = () => {
    fichaRoja.style.opacity = ".6";
    fichaAmarilla.style.opacity = ".6";
    fichaBlanca.style.opacity = ".6";
    fichaNegra.style.opacity = ".6";
    fichaClick.style.opacity = "2";
}

const respuestaClickGrupos = () => {
    Valor = click1;
    Valor1 = numeros.find(numero => numero.id === Valor);
    Valor = Valor1.valores;
    marcarBorde();
}

Pares.addEventListener(`click`, () => {
    click = Pares;
    click1 = `Pares`;
    respuestaClickGrupos();
});

// Eventos

Pares.addEventListener(`click`, () => {
    click = Pares;
    click1 = `Pares`;
    respuestaClickGrupos();
});

Impares.addEventListener(`click`, () => {
    click = Impares;
    click1 = `Impares`;
    respuestaClickGrupos();
});

numeroCero.addEventListener(`click`, () => {
    click = numeroCero;
    click1 = `cero`;
    respuestaClickGrupos();
});

Rojos.addEventListener(`click`, () => {
    click = Rojos;
    click1 = `Rojos`;
    respuestaClickGrupos();
});

Negros.addEventListener(`click`, () => {
    click = Negros;
    click1 = `Negros`;
    respuestaClickGrupos();
});

fichaAmarilla.addEventListener(`click`, () => {
    apuesta = `Amarillo`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaAmarilla;
    marcarFicha();
    Apuesta();
});

fichaRoja.addEventListener(`click`, () => {
    apuesta = `Rojo`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaRoja;
    marcarFicha();
    Apuesta();
});

fichaBlanca.addEventListener(`click`, () => {
    apuesta = `Blanco`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaBlanca;
    marcarFicha();
    Apuesta();
});

fichaNegra.addEventListener(`click`, () => {
    apuesta = `Negro`;
    apuesta1 = fichas.find(ficha => ficha.color === apuesta);
    apuesta = apuesta1.valor;
    fichaClick = fichaNegra;
    marcarFicha();
    Apuesta();
});

agregarDinero.addEventListener(`click`, respuestaAgregarDinero);

botonGirar.addEventListener(`click`, Girar);

if (apellidoUsuario != `` && nombreUsuario != ``) {
    subtitulo.innerHTML = `Bienvenid@ ${nombreUsuario} ${apellidoUsuario}`;
    titulo.append(subtitulo);
}
