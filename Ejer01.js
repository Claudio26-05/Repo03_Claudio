const carro01 = document.getElementById("carro01");
const carro02 = document.getElementById("carro02");
const reinicio = document.getElementById("Reinicio");

const transiciones = ["ease", "ease-in", "ease-out", "ease-in-out", "linear"];
const meta = 1000; 
let ganadorMostrado = false;

function InicioCarrera(event) {
    event.preventDefault();

    ganadorMostrado = false;

    const transicionCarro01 = transiciones[Math.floor(Math.random() * transiciones.length)];
    const transicionCarro02 = transiciones[Math.floor(Math.random() * transiciones.length)];

    const duracionCarro01 = Math.random() * 2 + 1; 
    const duracionCarro02 = Math.random() * 2 + 1;

    carro01.style.transition = `transform ${duracionCarro01}s ${transicionCarro01}`;
    carro02.style.transition = `transform ${duracionCarro02}s ${transicionCarro02}`;

    // Activamos la carrera
    carro01.style.transform = `translate(${meta}px, 0)`;
    carro02.style.transform = `translate(${meta}px, 0)`;

    // Verificar quién gana con delay igual a la duración
    setTimeout(() => {
        if (duracionCarro01 < duracionCarro02) {
            alert("🚗 ¡Carro 1 ganó!");
        } else if (duracionCarro02 < duracionCarro01) {
            alert("🚙 ¡Carro 2 ganó!");
        } else {
            alert("🤝 ¡Empate!");
        }
        ganadorMostrado = true;
    }, Math.max(duracionCarro01, duracionCarro02) * 1000);

    reinicio.style.display = "block";
}

function Reiniciar(event) {
    carro01.style.transform = "translate(0px, 0)";
    carro02.style.transform = "translate(0px, 0)";
    carro01.style.transition = "transform 1s ease";
    carro02.style.transition = "transform 1s ease";
    ganadorMostrado = false;
    reinicio.style.display = "none";
}
