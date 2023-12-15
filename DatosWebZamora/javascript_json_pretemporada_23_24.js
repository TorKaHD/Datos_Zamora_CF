document.addEventListener("DOMContentLoaded", function () {
    const partidos = [

        {
            "id": 1,
            "fecha": "2023-08-05",
            "hora": "20:00",
          
            "equipos": {
              "local": "Zamora C.F",
              "visitante": "Unionistas de Salamanca C.F"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
              "local": 0,
              "visitante": 5
            },
          
            "goles": {
              "local": [],
              "visitante": [
                  {"jugador": "Carlos Gimenez"},
                  {"jugador": "Manu Ramirez"},
                  {"jugador": "Álvaro Gómez"},
                  {"jugador": "Marco Slavy"},
                  {"jugador": "Alfred Planas"}]
            },
          
            "asistencias": {
              "local": [],
              "visitante": []
            },
          
            "notas": []
          },
          
          {
            "id": 2,
            "fecha": "2023-08-12",
            "hora": "20:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "S.D Ponferradina"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
                    { "jugador": "Alejandro Morales" }
                ],
                "visitante": [
          
                    { "jugador": "Nil Jimenez" }
      
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": []
          },
      
          {
              "id": 3,
              "fecha": "2023-08-16",
              "hora": "19:00",
            
              "equipos": {
                  "local": "C.D Guijuelo",
                  "visitante": "Zamora C.F"
              },
            
              "estadio": "Estadio Municipal Luis Ramos",
            
              "resultado": {
                  "local": 1,
                  "visitante": 1
              },
            
              "goles": {
                  "local": [
                      { "jugador": "Toti Garcia" }
                  ],
                  "visitante": [
            
                      { "jugador": "Markel Goñi" }
        
                  ]
              },
            
              "asistencias": {
                  "local": [],
                  "visitante": []
              },
            
              "notas": ["Memorial Agustin Villar"]
            },
      
            {
              "id": 4,
              "fecha": "2023-08-19",
              "hora": "20:00",
            
              "equipos": {
                  "local": "Zamora C.F",
                  "visitante": "Salamanca UDS C.F"
              },
            
              "estadio": "Ruta de la Plata",
            
              "resultado": {
                  "local": 5,
                  "visitante": 0
              },
            
              "goles": {
                  "local": [
      
                      {"jugador": "Kun Temenuzkhov"},
                      {"jugador": "Luis Rivas"},
                      {"jugador": "Adrián Bolo"},
                      {"jugador": "Óscar Cruz"},
                      {"jugador": "Markel Goñi"}
      
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
              "id": 5,
              "fecha": "2023-08-23",
              "hora": "20:00",
            
              "equipos": {
                  "local": "Zamora C.F",
                  "visitante": "Real Ávila C.F"
              },
            
              "estadio": "Ruta de la Plata",
            
              "resultado": {
                  "local": 2,
                  "visitante": 0
              },
            
              "goles": {
                  "local": [
      
                      {"jugador": "Alejandro Morales"},
                      {"jugador": "Julen Castañeda"}
      
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
              "id": 6,
              "fecha": "2023-08-24",
              "hora": "19:30",
            
              "equipos": {
                  "local": "Gimnástica Segoviana C.F",
                  "visitante": "Zamora C.F"
              },
            
              "estadio": "La Albuera",
            
              "resultado": {
                  "local": 0,
                  "visitante": 2
              },
            
              "goles": {
                  "local": [],
                  "visitante": [
      
                      {"jugador": "Kun Temenuzkhov"},
                      {"jugador": "Kun Temenuzkhov"}
      
              ]
              },
            
              "asistencias": {
                  "local": [],
                  "visitante": []
              },
            
              "notas": []
            },
      
            {
                "id": 7,
                "fecha": "2023-10-04",
                "hora": "12:00",
              
                "equipos": {
                    "local": "Zamora C.F",
                    "visitante": "CyD Leonesa"
                },
              
                "estadio": "Ruta de la Plata",
              
                "resultado": {
                    "local": 0,
                    "visitante": 1
                },
              
                "goles": {
                    "local": [],
                    "visitante": [
                        
                        {"jugador": "Carlos Calderón"}
                    
                    ]
                },
              
                "asistencias": {
                    "local": [],
                    "visitante": []
                },
                "notas": []
            },
            {
                "id": 8,
                "fecha": "2023-12-20",
                "hora": "20:00",
              
                "equipos": {
                    "local": "C.D Benavente",
                    "visitante": "Zamora C.F"
                },
              
                "estadio": "Luciano Rubio",
              
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
              
                "notas": ["75 Aniversario Club Deportivo Benvante"]
            }

    ];

    const jsonContainer = document.getElementById("jsonContainer");

    function mostrarPartido(partido) {
        const div = document.createElement("div");

        div.innerHTML = `
            <header><h2><u>Partido ${partido.id}</u></h2></header>
            <section>
            <p class = "text-md-start p-1"><strong>Fecha: </strong>${partido.fecha}</p>
            <p class = "text-md-start p-1"><strong>Hora:</strong> ${partido.hora}</p>
            <p class = "text-md-start p-1"><strong>Equipos:</strong> ${partido.equipos.local} vs ${partido.equipos.visitante}</p>
            <p class = "text-md-start p-1"><strong>Estadio:</strong> ${partido.estadio}</p>
            <p class = "text-md-start p-1"><strong>Resultado:</strong> ${partido.resultado.local} - ${partido.resultado.visitante}</p>
            <p class = "text-md-start p-1"><strong>Goleadores Local:</strong> ${mostrarGoleadores(partido.goles.local)}</p>
            <p class = "text-md-start p-1"><strong>Goleadores Visitante:</strong> ${mostrarGoleadores(partido.goles.visitante)}</p>
            <p class = "text-md-start p-1"><strong>Asistencias Local:</strong> ${mostrarAsistencias(partido.asistencias.local)}</p>
            <p class = "text-md-start p-1"><strong>Asistencias Visitante:</strong> ${mostrarAsistencias(partido.asistencias.visitante)}</p>
            ${mostrarNotas(partido.notas)}
            <p class = "text-md-start p-1"><strong>----------</strong></p>
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
            const notasHTML = notas.map(nota => `<p class = "text-md-start p-1">${nota}</p>`).join("");
            return `<section><p class = "text-md-start p-1"><strong>Notas Adicionales:</strong></p>${notasHTML}</section>`;
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
