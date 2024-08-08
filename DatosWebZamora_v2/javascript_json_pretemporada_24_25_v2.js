document.addEventListener("DOMContentLoaded", function () {
    const partidos = [

        {
            "id": 1,
            "fecha": "2024-07-27",
            "hora": "18:00 - 19:15",
          
            "equipos": {
              "local": "Íberos Club de Fútbol",
              "visitante": "Zamora Club de Fútbol"
            },
          
            "estadio": "Campo Municipal Francisco Mateos",
          
            "resultado": {
              "local": 1,
              "visitante": 0
            },
          
            "goles": {
              "local": [
                {"jugador": "Luis Rivas"},
            ],
              "visitante": []
            },
          
            "asistencias": {

              "local": [],
              "visitante": []
          
            },
          
            "notas": ["Amistoso Triangular. Los segundos 45 minutos, contra el Ciudad Rodrigo, quedaron empate a cero."]
          },
          
          {
            "id": 2,
            "fecha": "2024-07-31",
            "hora": "20:00",
          
            "equipos": {
                "local": "Unionistas de Salamanca C.F",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Estadio Municipal Reina Sofia",
          
            "resultado": {
                "local": 2,
                "visitante": 0
            },
          
            "goles": {
                "local": [

                    { "jugador": "Iván Moreno" },
                    { "jugador": "Stefan" }

                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": []
          },
      
          {
            "id": 3,
            "fecha": "2024-08-03",
            "hora": "19:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "A.D Union Adarve"
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
          
            "notas": []
          },
      
          {
            "id": 4,
            "fecha": "2024-08-07",
            "hora": "19:00",
          
            "equipos": {
                "local": "C.D Guijuelo",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Estadio Municipal Luis Ramos",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
                  {"jugador": "Pepe Carmona"}
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": ["Memorial Agustin Villar"]
          },

          {
            "id": 5,
            "fecha": "2024-08-11",
            "hora": "11:00",
          
            "equipos": {
                "local": "Atlético de Madrid B",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Miniestadio Cerro del Espino",
          
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
          
            "notas": []
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
