const personajes = [
    {
        nombre: "Mario",
        imagen: "images/mario.png",
        ataques: ["Salto", "Lanzar fuego", "Correr rápido", "Usar martillo"]
    },
    {
        nombre: "Luigi",
        imagen: "images/luigi.png",
        ataques: ["Salto alto", "Lanzar hielo", "Correr velozmente", "Usar Poltergust"]
    },
    {
        nombre: "Mario",
        imagen: "images/mario.png",
        ataques: ["Salto", "Lanzar fuego", "Correr rápido", "Usar martillo"]
    },
    {
        nombre: "Luigi",
        imagen: "images/luigi.png",
        ataques: ["Salto alto", "Lanzar hielo", "Correr velozmente", "Usar Poltergust"]
    },
    {
        nombre: "Mario",
        imagen: "images/mario.png",
        ataques: ["Salto", "Lanzar fuego", "Correr rápido", "Usar martillo"]
    },
    {
        nombre: "Luigi",
        imagen: "images/luigi.png",
        ataques: ["Salto alto", "Lanzar hielo", "Correr velozmente", "Usar Poltergust"]
    }
];

function mostrarPersonajes() {
    const container = document.getElementById('container');

    personajes.forEach(personaje => {
        const divPersonaje = document.createElement('div');
        divPersonaje.classList.add('personaje');

        const img = document.createElement('img');
        img.src = personaje.imagen;
        img.alt = personaje.nombre;

        const nombre = document.createElement('h3');
        nombre.textContent = personaje.nombre;

        const ataques = document.createElement('ul');
        personaje.ataques.forEach(ataque => {
            const li = document.createElement('li');
            li.textContent = ataque;
            ataques.appendChild(li);
        });

        divPersonaje.appendChild(img);
        divPersonaje.appendChild(nombre);
        divPersonaje.appendChild(ataques);

        container.appendChild(divPersonaje);
    });
}

document.addEventListener('DOMContentLoaded', mostrarPersonajes);
