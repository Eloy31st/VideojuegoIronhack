let btn_volver = document.getElementById('botonPersonajes');
let equipo = [null, null, null, null];
function guardarEquipoEnSessionStorage() {
    sessionStorage.setItem('equipo', JSON.stringify(equipo));
}
const personajes = [
    {
        nombre: "Mario",
        imagen: "images/personajes/mario.png",
        ataques: [
            {
                nombre: "Salto",
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Tipo: "Blue"
            }]
    },
    {
        nombre: "Luigi",
        imagen: "images/personajes/luigi.png",
        ataques: [
            {
                nombre: "Salto",
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Tipo: "Blue"
            }]
    },
    {
        nombre: "Fresa",
        imagen: "images/personajes/mario.png",
        ataques: [
            {
                nombre: "Salto",
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Tipo: "Blue"
            }]
    },
    {
        nombre: "Refresa",
        imagen: "images/personajes/luigi.png",
        ataques: [
            {
                nombre: "Salto",
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Tipo: "Blue"
            }]
    },
    {
        nombre: "Adios",
        imagen: "images/personajes/mario.png",
        ataques: [
            {
                nombre: "Salto",
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Tipo: "Blue"
            }]
    },
    {
        nombre: "Mañana",
        imagen: "images/personajes/luigi.png",
        ataques: [
            {
                nombre: "Salto",
                Tipo: "Purple"
            },
            {
                nombre: "Lanzar fuego",
                Tipo: "Red"
            },
            {
                nombre: "Correr rápido",
                Tipo: "Brown"
            },
            {
                nombre: "Usar martillo",
                Tipo: "Blue"
            }]
    }
];

function mostrarPersonajes() {
    let numPersonajes = 6;
    for (let i = 1; i <= numPersonajes; i++) {
        let nombrePersonaje = document.querySelector('#personaje' +i+ ' h2');
        let imagenPersonaje = document.querySelector('#personaje' +i+ ' img');

        nombrePersonaje.textContent = personajes[i-1].nombre;
        imagenPersonaje.src = personajes[i-1].imagen;

        let ataques = document.querySelectorAll('#personaje' + i + ' > div[class^="ataque"]');
        personajes[i-1].ataques.forEach((ataque, index) => {
            ataques[index].textContent = ataque.nombre;
            ataques[index].style.backgroundColor = ataque.Tipo;
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
