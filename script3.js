let personajeJugador;
let personajeMaquina;
let turnoJugador = true;
const equipoRival = [
    {
        nombre: "Mario2",
        Tipo: "Red",
        VidaMaxima: 120,
        VidaActual: 120,
        imagen: "images/personajes/mario.png",
        ataques: [
            {
                nombre: "Salto",
                Ataque: 10,
                Curacion: 0,
                Tipo: "Purple"
            },

        ]
    },
    { nombre: "Mario",
        Tipo: "Red",
        VidaMaxima: 120,
        VidaActual: 120,
        imagen: "images/personajes/luigi.png",
        ataques: [
            {
                nombre: "Salto",
                Ataque: 100,
                Curacion: 0,
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Ataque: 100,
                Curacion: 0,
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Ataque: 100,
                Curacion: 40,
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Ataque: 100,
                Curacion: 20,
                Tipo: "Blue"
            }
        ]
    },
];

function initScript3() {
    const equipoAlmacenado = sessionStorage.getItem('equipo');
    if (equipoAlmacenado) {
        equipo = JSON.parse(equipoAlmacenado);
    } else {
        equipo = [null, null, null, null];
    }

    console.log(equipo);
    mostrarInfoPersonajes();
    seleccionarPersonaje(equipo).then((personaje) => {
        personajeJugador = personaje;
        mostrarInfoJugador();
        seleccionarPersonajeAleatorio(equipoRival);
        iniciarCombate();
    });
}


function iniciarCombate() {
    turnoJugador = true;
    accionJugador();
}

function accionJugador() {
    mostrarOpcionesJugador();

    const atacarButton = document.getElementById('atacar');
    atacarButton.removeEventListener('click', atacarButtonClickHandler);
    atacarButton.addEventListener('click', atacarButtonClickHandler);

    const cambiarButton = document.getElementById('cambiar');
    cambiarButton.removeEventListener('click', cambiarButtonClickHandler);
    cambiarButton.addEventListener('click', cambiarButtonClickHandler);
}
function atacarButtonClickHandler() {
    mostrarAtaques();
    console.log("Atacar");
    seleccionarAtaque().then((ataque) => {
        atacar(ataque, personajeJugador, personajeMaquina);
    });
}

function cambiarButtonClickHandler() {
    mostrarCambioPersonaje();
    console.log("Cambiar");
    cambiarPersonaje();
}

function turnoMaquina() {
    setTimeout(() => {
    const ataqueAleatorio = seleccionarAtaqueAleatorio(personajeMaquina);
    console.log(ataqueAleatorio);
    atacar(ataqueAleatorio, personajeMaquina, personajeJugador);
    }, 500);
}

async function atacar(ataque, atacante, objetivo) {
    console.log(ataque, atacante, objetivo);
    let daño = ataque.Ataque;
    let curacion = ataque.Curacion;

    mostrarMensajesCombate();
    document.getElementById('mensaje-combate').textContent = `${atacante.nombre} ha usado ${ataque.nombre}!`;
    setTimeout(async () => {
        switch (ataque.Tipo) {
            case "Red":
                if (objetivo.Tipo === "Purple") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Blue") {
                    daño /= 2;
                }
                break;
            case "Purple":
                if (objetivo.Tipo === "Blue") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Red") {
                    daño /= 2;
                }
                break;
            case "Blue":
                if (objetivo.Tipo === "Red") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Purple") {
                    daño /= 2;
                }
                break;
        }

        atacante.VidaActual += curacion;
        if (atacante.VidaActual > atacante.VidaMaxima) {
            atacante.VidaActual = atacante.VidaMaxima;
        }

        objetivo.VidaActual -= daño;
        if (objetivo.VidaActual < 0) {
            objetivo.VidaActual = 0;
        }
        actualizarBarraVida();

        if (objetivo.VidaActual === 0) {
            alert(`${objetivo.nombre} ha sido derrotado.`);
            if (!turnoJugador) {
                const index = equipo.indexOf(objetivo);
                equipo.splice(index, 1);
                verificarFinDeJuego();
                console.log(equipo)
                mostrarInfoPersonajes();
                mostrarCambioPersonaje();
                await cambiarPersonaje();
                return;
            } else {
                const index = equipoRival.indexOf(objetivo);
                equipoRival.splice(index, 1);
                verificarFinDeJuego();
                seleccionarPersonajeAleatorio(equipoRival);
            }

        }
        if (turnoJugador) {
            turnoJugador = false;
            turnoMaquina();
        } else {
            turnoJugador = true;
            console.log("Turno jugador");
            accionJugador();
        }
    }, 1000);
}

let cambiandoPersonaje = false;

async function cambiarPersonaje() {
    if (cambiandoPersonaje) {
        return;
    }
    cambiandoPersonaje = true;

    try {
        personajeJugador = await seleccionarPersonaje(equipo);
        mostrarInfoJugador();
        mostrarMensajesCombate();
        document.getElementById('mensaje-combate').textContent = `Has cambiado a ${personajeJugador.nombre}`;
        setTimeout(() => {
            if (turnoJugador) {
                turnoJugador = false;
                cambiandoPersonaje = false;
                turnoMaquina();
                return;
            } else {
                turnoJugador = true;
                cambiandoPersonaje = false;
                accionJugador();
                return;
            }
        }, 2000);
    } catch (error) {
        console.error(error);
    }
}


function seleccionarPersonajeAleatorio(equipo) {
    const indiceAleatorio = Math.floor(Math.random() * equipo.length);
    personajeMaquina = equipo[indiceAleatorio];
    console.log(personajeMaquina);
    mostrarInfoRival();
}

function seleccionarPersonaje(equipo) {
    mostrarCambioPersonaje();

    return new Promise((resolve, reject) => {
        document.querySelectorAll('.seleccion-personaje').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const personajeSeleccionado = equipo[index];
                resolve(personajeSeleccionado);
            });
        });
    });
}

function seleccionarAtaqueAleatorio(personaje) {
    const indiceAleatorio = Math.floor(Math.random() * personaje.ataques.length);
    return personaje.ataques[indiceAleatorio];
}

async function seleccionarAtaque() {
    return new Promise((resolve, reject) => {
        document.querySelectorAll('#ataques button').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const ataqueSeleccionado = personajeJugador.ataques[index];
                resolve(ataqueSeleccionado);
            });
        });
    });
}


function mostrarInfoJugador() {
    document.getElementById('nombre-jugador').textContent = personajeJugador.nombre;
    document.getElementById('tipo-jugador').style.backgroundColor = personajeJugador.Tipo;
    document.getElementById('salud-jugador').textContent = `${personajeJugador.VidaActual}/${personajeJugador.VidaMaxima}`;
    document.getElementById('barra-vida-jugador').value = personajeJugador.VidaActual;
    document.getElementById('barra-vida-jugador').max = personajeJugador.VidaMaxima;
    document.getElementById('imagen-jugador').src = personajeJugador.imagen;
    mostrarInfoAtaques();
}
function mostrarInfoPersonajes() {
    const botonesPersonajes = document.querySelectorAll('.seleccion-personaje');
    console.log(equipo.length);
    botonesPersonajes.forEach((btn, index) => {
        console.log(index)
        if (index < equipo.length) {
            const personaje = equipo[index];
            btn.textContent = `${personaje.nombre}`;
            btn.style.backgroundColor = personaje.Tipo;
        } else {
            btn.style.display = 'none';
        }
    });
}


function mostrarInfoAtaques() {
    const botonesAtaques = document.querySelectorAll('#ataques button');
    botonesAtaques.forEach((btn, index) => {
        const ataque = personajeJugador.ataques[index];
        btn.textContent = `${ataque.nombre}`;
        btn.style.backgroundColor = ataque.Tipo;
    });
}

function mostrarInfoRival() {
    document.getElementById('nombre-rival').textContent = personajeMaquina.nombre;
    document.getElementById('tipo-rival').style.backgroundColor = personajeMaquina.Tipo;
    document.getElementById('salud-rival').textContent = `${personajeMaquina.VidaActual}/${personajeMaquina.VidaMaxima}`;
    document.getElementById('barra-vida-rival').value = personajeMaquina.VidaActual;
    document.getElementById('barra-vida-rival').max = personajeMaquina.VidaMaxima;
    document.getElementById('imagen-rival').src = personajeMaquina.imagen;
}

function mostrarOpcionesJugador() {
    document.getElementById('acciones').classList.remove('invisible');
    document.getElementById('mensajes-combate').classList.add('invisible');
    document.getElementById('ataques').classList.add('invisible');
    document.getElementById('cambio-personaje').classList.add('invisible');
}

function mostrarAtaques() {
    document.getElementById('acciones').classList.add('invisible');
    document.getElementById('mensajes-combate').classList.add('invisible');
    document.getElementById('ataques').classList.remove('invisible');
    document.getElementById('cambio-personaje').classList.add('invisible');
}

function mostrarCambioPersonaje() {
    document.getElementById('acciones').classList.add('invisible');
    document.getElementById('mensajes-combate').classList.add('invisible');
    document.getElementById('ataques').classList.add('invisible');
    document.getElementById('cambio-personaje').classList.remove('invisible');
}

function mostrarMensajesCombate() {
    document.getElementById('acciones').classList.add('invisible');
    document.getElementById('mensajes-combate').classList.remove('invisible');
    document.getElementById('ataques').classList.add('invisible');
    document.getElementById('cambio-personaje').classList.add('invisible');
}


function actualizarBarraVida() {
    const barraVidaJugador = document.getElementById('barra-vida-jugador');
    barraVidaJugador.value = personajeJugador.VidaActual;
    document.getElementById('salud-jugador').textContent = `${personajeJugador.VidaActual}/${personajeJugador.VidaMaxima}`;
    const barraVidaRival = document.getElementById('barra-vida-rival');
    barraVidaRival.value = personajeMaquina.VidaActual;
    document.getElementById('salud-rival').textContent = `${personajeMaquina.VidaActual}/${personajeMaquina.VidaMaxima}`;
}
function verificarFinDeJuego() {
    const equipoSinPersonajes = equipo.filter(personaje => personaje !== null).length === 0;
    const equipoRivalSinPersonajes = equipoRival.length === 0;

    if (equipoSinPersonajes && !equipoRivalSinPersonajes) {
        alert("¡Has perdido!");
        window.location.href = "index.html";
    } else if (!equipoSinPersonajes && equipoRivalSinPersonajes) {
        alert("¡Has ganado!");
        window.location.href = "index.html";
    }
}



window.addEventListener('DOMContentLoaded', initScript3);