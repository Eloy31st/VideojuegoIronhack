function initScript2() {
    let btn_combatir = document.getElementById('start');
    let btn_personajes = document.getElementById('select_team');

    btn_personajes.addEventListener('click', function() {
        window.location.href = 'personajes.html';
    });

    const equipoAlmacenado = sessionStorage.getItem('equipo');
    if (equipoAlmacenado) {
        equipo = JSON.parse(equipoAlmacenado);
    } else {
        equipo = [null, null, null, null];
    }
    console.log('Equipo:', equipo);

    btn_combatir.addEventListener('click', function() {
        if (equipo.includes(null)) {
            alert('El equipo está incompleto.');
        } else {
            window.location.href = 'combate.html';
        }
    });
}

window.addEventListener('DOMContentLoaded', initScript2);

