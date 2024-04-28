function initScript3() {
    const equipoAlmacenado = sessionStorage.getItem('equipo');
    if (equipoAlmacenado) {
        equipo = JSON.parse(equipoAlmacenado);
    } else {
        equipo = [null, null, null, null];
    }
    console.log('Equipo:', equipo);
}
window.addEventListener('DOMContentLoaded', initScript3);