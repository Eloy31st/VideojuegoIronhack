let btn_volver = document.getElementById('botonPersonajes');
let gestionPersonaje = document.getElementById('gestionPersonaje');
const personajes = [
    {
        nombre: "Mario",
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
        nombre: "Mario",
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
        nombre: "Luigi",
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
btn_volver.addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', mostrarPersonajes);
