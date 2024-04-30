let personajeJugador;
let personajeMaquina;
let turnoJugador = true;
const equipoRival = [
    {
        nombre: "Pablo Motos",
        Tipo: "Purple",
        VidaMaxima: 300,
        VidaActual: 300,
        imagen: "images/personajes/PabloMotos.png",
        ataques: [
            {
                nombre: "Trancas y Barrancas",
                Ataque: 130,
                Curacion: 0,
                Tipo: "Purple",
                Descripcion: "Pablo Motos llama a Trancas y Barrancas para que hagan daño a sus enemigos, infligiendo 130 de daño."
            },
            {
                nombre: "Chiste Malo",
                Ataque: 80,
                Curacion: 30,
                Tipo: "Purple",
                Descripcion: "Pablo Motos cuenta un chiste malo, infligiendo 80 de daño y recuperando 30 de salud."
            },
            {
                nombre: "Modo Tikoker",
                Ataque: 70,
                Curacion: 40,
                Tipo: "Black",
                Descripcion: "Pablo Motos se convierte en un Tikoker, infligiendo 70 de daño y recuperando 40 de salud."
            },
            {
                nombre: "Yoga",
                Ataque: 20,
                Curacion: 110,
                Tipo: "Purple",
                Descripcion: "Pablo Motos hace yoga, infligiendo 20 de daño y recuperando 110 de salud."
            }
        ]
    },
    { nombre: "Ibai",
        Tipo: "Blue",
        VidaMaxima: 350,
        VidaActual: 350,
        imagen: "images/personajes/Ibai.png",
        ataques: [
            {
                nombre: "Se tu propio jefe",
                Ataque: 20,
                Curacion: 80,
                Tipo: "Blue",
                Descripcion: "Ibai se motiva a sí mismo, infligiendo 20 de daño y recuperando 140 de salud."
            },
            {
                nombre: "Ibai Hazlo",
                Ataque: 60,
                Curacion: 60,
                Tipo: "Blue",
                Descripcion: "Ibai grita 'Ibai hazlo' y se cura a sí mismo en 80 puntos de vida y hace 80 de daño a sus enemigos."
            },
            {
                nombre: "Risa de tetera",
                Ataque: 0,
                Curacion: 120,
                Tipo: "Blue",
                Descripcion: "Ibai se ríe como una tetera, recuperando 120 de salud."
            },
            {
                nombre: "Kings League",
                Ataque: 90,
                Curacion: 0,
                Tipo: "Blue",
                Descripcion: "Ibai funda la Kings League, infligiendo 100 de daño."
            }
        ]
    },
    { nombre: "Espartero",
    Tipo: "Red",
    VidaMaxima: 270,
    VidaActual: 270,
    imagen: "images/personajes/Espartero.png",
    ataques: [
    {
        nombre: "Embiste Heroico",
        Ataque: 80,
        Curacion: 0,
        Tipo: "Red",
        Descripcion: "Espartero carga contra el enemigo con fuerza heroica, infligiendo 80 de daño."
    },
    {
        nombre: "Bombardeo a Barcelona",
        Ataque: 180,
        Curacion: -80,
        Tipo: "Red",
        Descripcion: "Espartero bombardea al enemigo con una lluvia de bombas, infligiendo 180 de daño al enemigo y 80 a sí mismo."
    },
    {
        nombre: "Llama Ardiente",
        Ataque: 70,
        Curacion: 20,
        Tipo: "Red",
        Descripcion: "Espartero lanza una llama ardiente al enemigo, infligiendo 70 de daño y recuperando 20 de salud."
    },
    {
        nombre: "Exilio",
        Ataque: 0,
        Curacion: 80,
        Tipo: "Blue",
        Descripcion: "Espartero se exilia a sí mismo, recuperando 80 de salud."
    }]
    },
    {
        nombre: "Franco",
        Tipo: "Blue",
        VidaMaxima: 300,
        VidaActual: 300,
        imagen: "images/personajes/Franco.png",
        ataques: [
            {
                nombre: "Dictadura",
                Ataque: 120,
                Curacion: 0,
                Tipo: "Blue",
                Descripcion: "Franco impone su dictadura, infligiendo 120 de daño."
            },
            {
                nombre: "Represión",
                Ataque: 90,
                Curacion: 0,
                Tipo: "Green",
                Descripcion: "Franco reprime a sus enemigos, infligiendo 90 de daño."
            },
            {
                nombre: "Censura",
                Ataque: 80,
                Curacion: 40,
                Tipo: "Yellow",
                Descripcion: "Franco censura a sus enemigos, infligiendo 80 de daño y recuperando 40 de salud."
            },
            {
                nombre: "Nacionalismo",
                Ataque: 50,
                Curacion: 70,
                Tipo: "Red",
                Descripcion: "Franco utiliza el nacionalismo para aumentar su fuerza, inflingiendo 50 de daño y recuperando 70 de salud."
            }]
    }
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
                if (objetivo.Tipo === "Green") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Blue") {
                    daño /= 2;
                }
                break;
            case "Green":
                if (objetivo.Tipo === "Purple") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Red") {
                    daño /= 2;
                }
                break;
            case "Purple":
                if (objetivo.Tipo === "Black") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Green") {
                    daño /= 2;
                }
                break;
            case "Black":
                if (objetivo.Tipo === "Yellow") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Purple") {
                    daño /= 2;
                }
                break;
            case "Yellow":
                if (objetivo.Tipo === "Blue") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Black") {
                    daño /= 2;
                }
                break;
            case "Blue":
                if (objetivo.Tipo === "Red") {
                    daño *= 2;
                } else if (objetivo.Tipo === "Yellow") {
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

        btn.title = ataque.Descripcion || "Descripción no disponible";
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