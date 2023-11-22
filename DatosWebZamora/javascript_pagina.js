document.addEventListener("DOMContentLoaded", function () {
    const partidos = [
        {
            "id": 1,
            "fecha": "2023-11-01",
            "hora": "17:30",

            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Racing de Santander"
            },

            "estadio": "Ruta de la Plata",

            "resultado": {
                "local": 2,
                "visitante": 2
            },

            "goles": {
                "local": [
                    { "jugador": "Luismi Luengo" },
                    { "jugador": "Carlos Ramos" }
                ],
                "visitante": [
                    { "jugador": "Andrés Martín" },
                    { "jugador": "Peque" }
                ]
            },

            "asistencias": {
                "local": [{ "jugador": "Carlos Ramos" }],
                "visitante": []
            },

            "notas": [
                "Primera ronda de la Copa del Rey 2023-2024",
                "El Zamora C.F ganó en los penaltis 4 a 3"
            ]
        },

        {
            "id": 2,
            "fecha": "2023-11-22",
            "hora": "21:00",

            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Villarreal C.F"
            },

            "estadio": "Ruta de la Plata",

            "resultado": {
                "local": 0,
                "visitante": 0
            },

            "goles": {
                "local": [],
                "visitante": []
            },

            "asistencias": {
                "local": [],
                "visitante": []
            },

            "notas": [
                "Segunda ronda de la Copa del Rey 2023-2024"
            ]
        }
    ];

    const jsonContainer = document.getElementById("jsonContainer");

    function mostrarPartido(partido) {
        const div = document.createElement("div");

        div.innerHTML = `
            <h2>Partido ${partido.id}</h2>
            <p><strong>Fecha: </strong>${partido.fecha}</p>
            <p><strong>Hora:</strong> ${partido.hora}</p>
            <p><strong>Equipos:</strong> ${partido.equipos.local} vs ${partido.equipos.visitante}</p>
            <p><strong>Estadio:</strong> ${partido.estadio}</p>
            <p><strong>Resultado:</strong> ${partido.resultado.local} - ${partido.resultado.visitante}</p>
            <p><strong>Goleadores Local:</strong> ${mostrarGoleadores(partido.goles.local)}</p>
            <p><strong>Goleadores Visitante:</strong> ${mostrarGoleadores(partido.goles.visitante)}</p>
            <p><strong>Asistencias Local:</strong> ${mostrarAsistencias(partido.asistencias.local)}</p>
            <p><strong>Asistencias Visitante:</strong> ${mostrarAsistencias(partido.asistencias.visitante)}</p>
            <!-- Personaliza la visualización de otros datos aquí -->

            <hr>
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

    function mostrarPartidos() {
        partidos.forEach((partido) => {
            const div = mostrarPartido(partido);
            jsonContainer.appendChild(div);
        });
    }

    mostrarPartidos();
});
