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
                "local": 1,
                "visitante": 2
            },

            "goles": {
                "local": [
                    { "jugador": "Asier Etxaburu" }
                ],
                "visitante": [
                    { "jugador": "José Luis Morales" },
                    { "jugador": "José Luis Morales" }
                ]
            },

            "asistencias": {
                "local": [
                    { "jugador": "Roger Marcé" }
                ],
                "visitante": [
                    { "jugador": "Étienne Capoue" }
                ]
            },

            "notas": [
                "Segunda ronda de la Copa del Rey 2023-2024",
                "El Zamora C.F quedó eliminado"
            ]
        }
    ];

    const jsonContainer = document.getElementById("jsonContainer");

    function mostrarPartido(partido) {
        const div = document.createElement("div");

        div.innerHTML = `
            <header><h2><u>Partido ${partido.id}</u></h2></header>
            <section>
            <p class = "text-md-start p-1 border"><strong>Fecha: </strong>${partido.fecha}</p>
            <p class = "text-md-start p-1 border"><strong>Hora:</strong> ${partido.hora}</p>
            <p class = "text-md-start p-1 border"><strong>Equipos:</strong> ${partido.equipos.local} vs ${partido.equipos.visitante}</p>
            <p class = "text-md-start p-1 border"><strong>Estadio:</strong> ${partido.estadio}</p>
            <p class = "text-md-start p-1 border"><strong>Resultado:</strong> ${partido.resultado.local} - ${partido.resultado.visitante}</p>
            <p class = "text-md-start p-1 border"><strong>Goleadores Local:</strong> ${mostrarGoleadores(partido.goles.local)}</p>
            <p class = "text-md-start p-1 border"><strong>Goleadores Visitante:</strong> ${mostrarGoleadores(partido.goles.visitante)}</p>
            <p class = "text-md-start p-1 border"><strong>Asistencias Local:</strong> ${mostrarAsistencias(partido.asistencias.local)}</p>
            <p class = "text-md-start p-1 border"><strong>Asistencias Visitante:</strong> ${mostrarAsistencias(partido.asistencias.visitante)}</p>
            ${mostrarNotas(partido.notas)}
            <p class = "text-md-start p-1 border"><strong>----------</strong></p>
            </section>
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

    function mostrarNotas(notas) {
        if (notas && notas.length > 0) {
            const notasHTML = notas.map(nota => `<p class = "text-md-start p-1 border">${nota}</p>`).join("");
            return `<section><p class = "text-md-start p-1 border"><strong>Notas Adicionales:</strong></p>${notasHTML}</section>`;
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
