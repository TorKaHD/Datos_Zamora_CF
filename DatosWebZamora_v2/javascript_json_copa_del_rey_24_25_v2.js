document.addEventListener("DOMContentLoaded", function () {
    const partidos = [

{
    "id": 1,
    "fecha": "2024-10-30",
    "hora": "20:00",
  
    "equipos": {
        "local": "Juventud Torremolinos",
        "visitante": "Zamora C.F"
    },
  
    "estadio": "Estadio Municipal El Pozuelo",
  
    "resultado": {
        "local": 1,
        "visitante": 2
    },
  
    "goles": {
        "local": [

            { "jugador": "Diego Altube (Propia puerta)" }

        ],
        "visitante": [

            { "jugador": "Edu Campabadal" },
            { "jugador": "Rufo Lucero" }

        ]
    },
  
    "asistencias": {
        "local": [],
        "visitante": [

            { "jugador": "Julen Castañeda"}

        ]
    },
  
    "notas": ["Primera Ronda de la Copa del Rey"]
  }

];

const jsonContainer = document.getElementById("jsonContainer");

function mostrarPartido(partido) {
const div = document.createElement("div");

div.innerHTML = `
    <header><h2 class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><u>Partido ${partido.id}</u></h2></header>
    <section>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Fecha: </strong>${partido.fecha}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Hora:</strong> ${partido.hora}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Equipos:</strong> ${partido.equipos.local} vs ${partido.equipos.visitante}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Estadio:</strong> ${partido.estadio}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Resultado:</strong> ${partido.resultado.local} - ${partido.resultado.visitante}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Goleadores Local:</strong> ${mostrarGoleadores(partido.goles.local)}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Goleadores Visitante:</strong> ${mostrarGoleadores(partido.goles.visitante)}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Asistencias Local:</strong> ${mostrarAsistencias(partido.asistencias.local)}</p>
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>Asistencias Visitante:</strong> ${mostrarAsistencias(partido.asistencias.visitante)}</p>
    ${mostrarNotas(partido.notas)}
    <p class="p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left"><strong>----------</strong></p>
    </section>
    <!-- Personaliza la visualización de otros datos aquí -->

`;

return div;
}    

function mostrarGoleadores(goleadores) {
if (goleadores.length === 0) {
    return "Ninguno";
}

const nombresGoleadores = goleadores.map(gol => gol.jugador);
return nombresGoleadores.join(", ");
}

function mostrarAsistencias(asistencias) {
if (asistencias.length === 0) {
    return "Ninguna";
}

const nombresAsistentes = asistencias.map(asistencia => asistencia.jugador);
return nombresAsistentes.join(", ");
}

function mostrarNotas(notas) {
if (notas && notas.length > 0) {
    const notasHTML = notas.map(nota => `<p class = "p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-left" style = "color: #3b1419;">${nota}</p>`).join("");
    return `<section><p class = "p-1 sm:text-sm md:text-base lg:text-lg xl:text-xl text-left" style = "color: #3b1419;"><strong>Notas Adicionales:</strong></p>${notasHTML}</section>`;
} else {
    return "";
}
}

function mostrarPartidos() {
partidos.forEach((partido) => {
    const div = mostrarPartido(partido);
    jsonContainer.appendChild(div);
});
}

mostrarPartidos();
});