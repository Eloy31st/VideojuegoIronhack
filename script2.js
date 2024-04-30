let btn_volver = document.getElementById('botonPersonajes');
let equipo = [null, null, null, null];
function guardarEquipoEnSessionStorage() {
    sessionStorage.setItem('equipo', JSON.stringify(equipo));
}
const personajes = [
    {
        nombre: "DonQuijote",
        Tipo: "Red",
        VidaMaxima: 300,
        VidaActual: 300,
        imagen: "images/personajes/DonQuijote.png",
        ataques: [
            {
                nombre: "Lanzamiento de lanza",
                Ataque: 50,
                Curacion: 0,
                Tipo: "Red",
                Descripcion: "Ataca al enemigo con una lanza afilada, infligiendo 50 de daño."
            },
            {
                nombre: "Embestida",
                Ataque: 70,
                Curacion: 0,
                Tipo: "Red",
                Descripcion: "Embiste al enemigo con gran fuerza, infligiendo 70 de daño."
            },
            {
                nombre: "Golpe de Escudo",
                Ataque: 0,
                Curacion: 40,
                Tipo: "Red",
                Descripcion: "Se defiende del ataque enemigo con su escudo y recupera 90 de salud."
            },
            {
                nombre: "Ataque a gigante",
                Ataque: 70,
                Curacion: 40,
                Tipo: "Purple",
                Descripcion: "Carga contra un enemigo, infligiendo 30 de daño y recuperando 20 de salud."
            }
        ]
    },
    {
        nombre: "El Nano",
        Tipo: "Green",
        VidaMaxima: 350,
        VidaActual: 350,
        imagen: "images/personajes/ElNano.png",
        ataques: [
            {
                nombre: "La 33",
                Ataque: 50,
                Curacion: 50,
                Tipo: "Green",
                Descripcion: "Gana la 33, infligiendo 50 de daño y recuperando 50 de salud."
            },
            {
                nombre: "Turbo Boost",
                Ataque: 80,
                Curacion: 0,
                Tipo: "Yellow",
                Descripcion: "Activación del turbo para aumentar la velocidad y embestir al enemigo, infligiendo 80 de daño."
            },
            {
                nombre: "Derrape a 200",
                Ataque: 0,
                Curacion: 130,
                Tipo: "Green",
                Descripcion: "Derrapa a 200 km/h, recuperando 130 de salud."
            },
            {
                nombre: "Vuelta rápida",
                Ataque: 30,
                Curacion: 90,
                Tipo: "Green",
                Descripcion: "Da una vuelta rápida, dejando al rival desorientado, infligiendo 30 de daño y recuperando 90 de salud."
            }]
    },
    {
        nombre: "Espartero",
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
        nombre: "Pedro Sánchez",
        Tipo: "Lightgrey",
        VidaMaxima: 370,
        VidaActual: 370,
        imagen: "images/personajes/PedroSanchez.png",
        ataques: [
            {
                nombre: "Dimisión",
                Ataque: 0,
                Curacion: 0,
                Tipo: "Lightgrey",
                Descripcion: "Que pringado, ni de coña Pedro Sanchez va a dimitir."
            },
            {
                nombre: "Promesa Electoral",
                Ataque: 60,
                Curacion: 40,
                Tipo: "Lightgrey",
                Descripcion: "Pedro Sánchez realiza una promesa electoral que le permite recuperar 40 de salud y aumentar su fuerza para inflingir 60 de daño."
            },
            {
                nombre: "Subida de Impuestos",
                Ataque: 90,
                Curacion: 0,
                Tipo: "Lightgrey",
                Descripcion: "Pedro Sánchez implementa una subida de impuestos que debilita a sus enemigos, infligiendo 90 de daño."
            },
            {
                nombre: "Movimiento Político",
                Ataque: 40,
                Curacion: 60,
                Tipo: "Blue",
                Descripcion: "Pedro Sánchez realiza un movimiento político que le permite recuperar 60 de salud y aumentar su fuerza para inflingir 40 de daño."
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
    },
    {
        nombre: "Rajoy",
        Tipo: "Purple",
        VidaMaxima: 250,
        VidaActual: 250,
        imagen: "images/personajes/Rajoy.png",
        ataques: [
            {
                nombre: "El Alcalde son los vecinos",
                Ataque: 120,
                Curacion: 0,
                Tipo: "Purple",
                Descripcion: "Rajoy se escuda en los vecinos, infligiendo 120 de daño."
            },
            {
                nombre: "Españoles muy españoles",
                Ataque: 60,
                Curacion: 40,
                Tipo: "Purple",
                Descripcion: "Rajoy se enorgullece de ser español, infligiendo 60 de daño y recuperando 40 de salud."
            },
            {
                nombre: "Viva el vino",
                Ataque: 0,
                Curacion: 130,
                Tipo: "Purple",
                Descripcion: "Rajoy se toma un vino para relajarse, recuperando 130 de salud."
            },
            {
                nombre: "It's very difficult todo esto",
                Ataque: 40,
                Curacion: 60,
                Tipo: "Purple",
                Descripcion: "Rajoy se enreda en su propio discurso, infligiendo 40 de daño y recuperando 60 de salud."
            }]
    }
];

function mostrarPersonajes() {
    let numPersonajes = 6;
    for (let i = 1; i <= numPersonajes; i++) {
        let nombrePersonaje = document.querySelector('#personaje' +i+ ' h2');
        let imagenPersonaje = document.querySelector('#personaje' +i+ ' img');
        let tipoPersonaje = document.querySelector('#personaje' +i+ ' .tipo');

        nombrePersonaje.textContent = personajes[i-1].nombre;
        imagenPersonaje.src = personajes[i-1].imagen;
        tipoPersonaje.style.backgroundColor = personajes[i-1].Tipo;

        let ataques = document.querySelectorAll('#personaje' + i + ' > div[class^="ataque"]');
        personajes[i-1].ataques.forEach((ataque, index) => {
            ataques[index].innerHTML = `<span class="circle" style="background-color: ${ataque.Tipo};"></span>` + ataque.nombre;
            ataques[index].title = ataque.Descripcion || "Descripción no disponible";
            ataques[index].classList.add('ataque');
        });
    }
}

function seleccionarPersonaje() {
    let numPersonajes = 6;
    for (let i = 1; i <= numPersonajes; i++) {
        let personaje = document.querySelector('#personaje' + i);
        personaje.addEventListener('click', function () {
            let personajeSeleccionado = personajes[i - 1];
            let nombrePersonaje = personajeSeleccionado.nombre;
            let indice = equipo.findIndex(e => e && e.nombre === nombrePersonaje);
            if (indice === -1) {
                if (equipo.includes(null)) {
                    equipo[equipo.indexOf(null)] = personajeSeleccionado;
                    alert(`El personaje ${nombrePersonaje} ha sido añadido al equipo.`);
                } else {
                    alert('El equipo está lleno.');
                }
            } else {
                equipo.splice(indice, 1, null);
                alert(`El personaje ${nombrePersonaje} ha sido eliminado del equipo.`);
            }
            guardarEquipoEnSessionStorage();
            console.log('Equipo:', equipo);
        });
    }
}


btn_volver.addEventListener('click', function() {
    window.location.href = 'index.html';
});

window.addEventListener('DOMContentLoaded', function() {
    const equipoAlmacenado = sessionStorage.getItem('equipo');
    if (equipoAlmacenado) {
        equipo = JSON.parse(equipoAlmacenado);
    } else {
        equipo = [null, null, null, null];
    }
});

document.addEventListener('DOMContentLoaded', mostrarPersonajes);
document.addEventListener('DOMContentLoaded', seleccionarPersonaje);
