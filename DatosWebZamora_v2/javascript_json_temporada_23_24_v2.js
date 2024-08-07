document.addEventListener("DOMContentLoaded", function () {
    const partidos = [
      {
        "id": 1,
        "fecha": "2023-09-03",
        "hora": "20:00",
      
        "equipos": {
          "local": "Zamora C.F",
          "visitante": "C.D Cayón"
        },
      
        "estadio": "Ruta de la Plata",
      
        "resultado": {
          "local": 1,
          "visitante": 0
        },
      
        "goles": {
          "local": [{"jugador": "Alejandro Morales"}],
          "visitante": []
      },
      
        "asistencias": {
          "local": [{"jugador": "Víctor López"}],
          "visitante": []
        },
      
        "notas": ["Primera victoria de la temporada"]
      },
  
      {
          "id": 2,
          "fecha": "2023-09-10",
          "hora": "18:00",
        
          "equipos": {
            "local": "C.D Covadonga",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Juan Antonio Álvarez Rabanal",
        
          "resultado": {
            "local": 0,
            "visitante": 2
          },
        
          "goles": {
            "local": [],
            "visitante": [
  
              {"jugador": "Adrián Mancebo"},
              {"jugador": "Joel Priego"}
  
          ]
        },
        
          "asistencias": {
            "local": [{"jugador": "Carlos Ramos"}],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 3,
          "fecha": "2023-09-17",
          "hora": "19:00",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "C.D Guijuelo"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 0
          },
        
          "goles": {
            "local": [{"jugador": "Adrián Pérez Bolo"}],
            "visitante": []
        },
        
          "asistencias": {
            "local": [{"jugador": "Markel Goñi"}],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 4,
          "fecha": "2023-09-24",
          "hora": "16:00",
        
          "equipos": {
            "local": "S.D Compostela",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Verónica Boquete de San Lázaro",
        
          "resultado": {
            "local": 0,
            "visitante": 1
          },
        
          "goles": {
            "local": [],
            "visitante": [{"jugador": "Víctor López"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 5,
          "fecha": "2023-10-01",
          "hora": "18:00",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Coruxo F.C"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 2,
            "visitante": 0
          },
        
          "goles": {
            "local": [
  
              {"jugador": "Pito Camacho"},
              {"jugador": "Pito Camacho"}
  
          ],
            "visitante": []
        },
        
          "asistencias": {
            "local": [
  
              {"jugador": "Joel Priego"},
              {"jugador": "Joel Priego"}
  
          ],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 6,
          "fecha": "2023-10-07",
          "hora": "17:00",
        
          "equipos": {
            "local": "Ourense C.F",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Campos de Oira",
        
          "resultado": {
            "local": 0,
            "visitante": 3
          },
        
          "goles": {
            "local": [],
            "visitante": [
              
              {"jugador": "Asier Etxaburu"},
              {"jugador": "Luis Rivas"}, 
              {"jugador": "Joel Priego"}
          
          ]
        },
        
          "asistencias": {
            "local": [],
            "visitante": [{"jugador": "Julen Castañeda"}]
          },
        
          "notas": []
        },
  
        {
          "id": 7,
          "fecha": "2023-10-15",
          "hora": "18:00",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Pontevedra C.F"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 0,
            "visitante": 4
          },
        
          "goles": {
            "local": [],
            "visitante": [
              
              {"jugador": "Yelko Pino"},
              {"jugador": "Dalisson"},
              {"jugador": "Rufo"},
              {"jugador": "Álex González"}
          
          ]
        },
        
          "asistencias": {
            "local": [],
            "visitante": [
              
              {"jugador": "Ángel Bastos"},
              {"jugador": "Álex González"}, 
              {"jugador": "Chiqui"}
          
          ]
          },
        
          "notas": ["Primera derrota de la temporada"]
        },
  
        {
          "id": 8,
          "fecha": "2023-10-22",
          "hora": "17:00",
        
          "equipos": {
            "local": "R.C Deportivo Fabril",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Ciudad Deportiva de Abegondo",
        
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
        
          "notas": ["Primer empate de la temporada"]
        },
  
        {
          "id": 9,
          "fecha": "2023-10-28",
          "hora": "19:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Real Oviedo Vetusta"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 3,
            "visitante": 0
          },
        
          "goles": {
            "local": [
              
              {"jugador": "Kun Temenuzkhov"},
              {"jugador": "Asier Etxaburu"},
              {"jugador": "Asier Etxaburu"}
          
          ],
            "visitante": []
        },
        
          "asistencias": {
            "local": [
              
              {"jugador": "Carlos Ramos"},
              {"jugador": "Julen Castañeda"},
              {"jugador": "Julen Castañeda"}
          
          ],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 10,
          "fecha": "2023-11-04",
          "hora": "16:00",
        
          "equipos": {
            "local": "R.C Villalbés",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "A Magdalena",
        
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
          "id": 11,
          "fecha": "2023-11-12",
          "hora": "19:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Real Avilés Industrial"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 0
          },
        
          "goles": {
            "local": [{"jugador": "Asier Etxaburu"}],
            "visitante": []
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 12,
          "fecha": "2023-11-19",
          "hora": "17:00",
        
          "equipos": {
            "local": "R.S Gimnástica de Torrelavega",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "El Malecón",
        
          "resultado": {
            "local": 2,
            "visitante": 1
          },
        
          "goles": {
            "local": [
              
              {"jugador": "Carlos Tobar"},
              {"jugador": "Álex Basurto"}
          
          ],
            "visitante": [{"jugador": "Luismi Luengo"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": []
        },
  
        {
          "id": 13,
          "fecha": "2023-11-26",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Rayo Cantabria"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 0
          },
        
          "goles": {
            "local": [{"jugador": "Sergi Baldrich"}],
            "visitante": []
        },
        
          "asistencias": {
            "local": [{"jugador": "Carlos Ramos"}],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 14,
          "fecha": "2023-12-02",
          "hora": "16:30",
        
          "equipos": {
            "local": "Real Valladolid C.F Promesas",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Anexos José Zorrilla",
        
          "resultado": {
            "local": 2,
            "visitante": 1
          },
        
          "goles": {
            "local": [
              
              {"jugador": "Raúl Chasco"},
              {"jugador": "Isra Salazar"}
          ],
            "visitante": [{"jugador": "Sergi Baldrich"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": [{"jugador": "Carlos Ramos"}]
          },
        
          "notas": []
        },

        {
          "id": 15,
          "fecha": "2023-12-10",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Club Marino de Luanco"
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
          "id": 16,
          "fecha": "2023-12-16",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "U.P Langreo"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 1
          },
        
          "goles": {
            "local": [{"jugador": "Sergi Baldrich"}],
            "visitante": [{"jugador": "Nané"}]
        },
        
          "asistencias": {
            "local": [{"jugador": "Dani Hernández"}],
            "visitante": []
          },
        
          "notas": ["Último partido del año."]
        },

        {
          "id": 17,
          "fecha": "2024-01-10",
          "hora": "20:00",
        
          "equipos": {
            "local": "Arandina C.F",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Complejo Deportivo Juan Carlos Higuero (El Montecillo)",
        
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
        
          "notas": ["Primer partido del año. Final de la primera vuelta de Liga."]
        },

        {
          "id": 18,
          "fecha": "2024-01-14",
          "hora": "12:00",
        
          "equipos": {
            "local": "C.D Cayón",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Fernando Astobiza",
        
          "resultado": {
            "local": 0,
            "visitante": 1
          },
        
          "goles": {
            "local": [],
            "visitante": [{"jugador": "Sergi Baldrich"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": ["Inicio de la segunda vuelta en Liga."]
        },

        {
          "id": 19,
          "fecha": "2024-01-21",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "C.D Covadonga"
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
          "id": 19,
          "fecha": "2024-01-21",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "C.D Covadonga"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 2,
            "visitante": 0
          },
        
          "goles": {
            "local": [
            {"jugador": "Julen Castañeda"},
            {"jugador": "Joel Priego"}],
            "visitante": []
        },
        
          "asistencias": {
            "local": [{"jugador": "Carlos Ramos"}],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 20,
          "fecha": "2024-01-27",
          "hora": "17:00",
        
          "equipos": {
            "local": "C.D Guijuelo",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Estadio Municipal Luis Ramos",
        
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
          "id": 21,
          "fecha": "2024-02-04",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "S.D Compostela"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 2,
            "visitante": 1
          },
        
          "goles": {
            "local": [
              {"jugador": "Julen Castañeda"},
              {"jugador": "Alejandro Cañizo"}],
            "visitante": [{"jugador": "Juan Manuel Parapar"}]
        },
        
          "asistencias": {
            "local": [{"jugador": "Asier Etxaburu"}],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 22,
          "fecha": "2024-02-11",
          "hora": "16:15",
        
          "equipos": {
            "local": "Coruxo F.C",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "O Vao",
        
          "resultado": {
            "local": 1,
            "visitante": 2
          },
        
          "goles": {
            "local": [{"jugador": "Davo"}],
            "visitante": [
              {"jugador": "Alejandro Cañizo"},
              {"jugador": "Sergi Baldrich"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": [{"jugador": "Carlos Parra"}]
          },
        
          "notas": []
        },

        {
          "id": 23,
          "fecha": "2024-02-18",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Ourense C.F"
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
          "id": 24,
          "fecha": "2024-02-25",
          "hora": "17:30",
        
          "equipos": {
            "local": "Pontevedra C.F",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Pasarón",
        
          "resultado": {
            "local": 1,
            "visitante": 2
          },
        
          "goles": {
            "local": [{"jugador": "Carlos López"}],
            "visitante": [
              {"jugador": "Alejandro Cañizo"},
              {"jugador": "Adrián Mancebo"},
              {"jugador": "Víctor López"}]
        },
        
          "asistencias": {
            "local": [{"jugador": "Alejandro Cañizo"}],
            "visitante": [{"jugador": "Carlos Ramos"},
            {"jugador": "Joel Priego"}]
          },
        
          "notas": ["Partido retrasado media hora por la lluvia. Empezó a las 17:30 en vez de a las 17:00"]
        },

        {
          "id": 25,
          "fecha": "2024-03-03",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "R.C Deportivo Fabril"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 2
          },
        
          "goles": {
            "local": [{"jugador": "Adrián Mancebo"}],
            "visitante": [
              {"jugador": "Mati Castillo"},
              {"jugador": "David Vilán"}]
        },
        
          "asistencias": {
            "local": [{"jugador": "Alejandro Cañizo"}],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 26,
          "fecha": "2024-03-10",
          "hora": "16:15",
        
          "equipos": {
            "local": "Real Oviedo Vetusta",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Ciudad Deportiva El Requexón",
        
          "resultado": {
            "local": 1,
            "visitante": 1
          },
        
          "goles": {
            "local": [{"jugador": "Nacho Estrada"}],
            "visitante": [{"jugador": "Joel Priego"}]
        },
        
          "asistencias": {
            "local": [{"jugador": "Santi Miguélez"}],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 27,
          "fecha": "2024-03-17",
          "hora": "17:30",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "R.C Villalbés"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 1
          },
        
          "goles": {
            "local": [{"jugador": "Adrián Pérez Bolo"}],
            "visitante": [{"jugador": "Adrián Mancebo"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": ["Adrián Pérez Bolo se marcó en propia puerta."]
        },

        {
          "id": 28,
          "fecha": "2024-03-24",
          "hora": "18:00",
        
          "equipos": {
            "local": "Real Avilés Industrial",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Román Suárez Puerta",
        
          "resultado": {
            "local": 0,
            "visitante": 1
          },
        
          "goles": {
            "local": [],
            "visitante": [{"jugador": "Julen Castañeda"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": [{"jugador": "Luismi Luengo"}]
          },
        
          "notas": []
        },

        {
          "id": 29,
          "fecha": "2024-03-31",
          "hora": "18:00",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "R.S Gimnástica de Torrelavega"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 4,
            "visitante": 0
          },
        
          "goles": {
            "local": [
              {"jugador": "Luis Rivas"},
              {"jugador": "Alejandro Morales"},
              {"jugador": "Pito Camacho"},
              {"jugador": "Pito Camacho"}
            ],
            "visitante": []
        },
        
          "asistencias": {
            "local": [
              {"jugador": "Adrián Mancebo"},
              {"jugador": "Roger Marcé"},
              {"jugador": "Roger Marcé"},
              {"jugador": "Roger Marcé"}
            ],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 30,
          "fecha": "2024-04-07",
          "hora": "16:30",
        
          "equipos": {
            "local": "Rayo Cantabria",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Nando Yosu",
        
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
          "id": 31,
          "fecha": "2024-04-14",
          "hora": "18:00",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Real Valladolid C.F Promesas"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 1,
            "visitante": 1
          },
        
          "goles": {
            "local": [{"jugador": "Joel Priego"}],
            "visitante": [{"jugador": "Manu Pozo"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": [{"jugador": "Fran Ortuño"}]
          },
        
          "notas": []
        }, 

        {
          "id": 32,
          "fecha": "2024-04-21",
          "hora": "18:00",
        
          "equipos": {
            "local": "Club Marino de Luanco",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Miramar",
        
          "resultado": {
            "local": 2,
            "visitante": 0
          },
        
          "goles": {
            "local": [
              {"jugador": "Miguel Cuesta"},
              {"jugador": "Aitor Lorea"}],
            "visitante": []
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 33,
          "fecha": "2024-04-28",
          "hora": "12:00",
        
          "equipos": {
            "local": "U.P Langreo",
            "visitante": "Zamora C.F"
          },
        
          "estadio": "Nuevo Ganzábal",
        
          "resultado": {
            "local": 1,
            "visitante": 1
          },
        
          "goles": {
            "local": [{"jugador": "Nané"}],
            "visitante": [{"jugador": "Adrián Mancebo"}]
        },
        
          "asistencias": {
            "local": [],
            "visitante": []
          },
        
          "notas": []
        },

        {
          "id": 34,
          "fecha": "2024-05-05",
          "hora": "18:00",
        
          "equipos": {
            "local": "Zamora C.F",
            "visitante": "Arandina C.F"
          },
        
          "estadio": "Ruta de la Plata",
        
          "resultado": {
            "local": 4,
            "visitante": 1
          },
        
          "goles": {
            "local": [
              {"jugador": "Sergi Baldrich"},
              {"jugador": "Luismi Luengo"},
              {"jugador": "Adrián Mancebo"},
              {"jugador": "Alejandro Cañizo"}
            ],
            "visitante": [{"jugador": "Gonzalo"}]
        },
        
          "asistencias": {
            "local": [
              {"jugador": "Adrián Pérez Bolo"},
              {"jugador": "Sergi Baldrich"},
              {"jugador": "Pito Camacho"}
            ],
            "visitante": []
          },
        
          "notas": ["Final de la temporada regular."]
        }
  
  ]

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