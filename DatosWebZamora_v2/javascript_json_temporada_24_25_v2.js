document.addEventListener("DOMContentLoaded", function () {
    const partidos = [

        {
            "id": 1,
            "fecha": "2024-08.24",
            "hora": "21:00",
          
            "equipos": {
              "local": "Club Atlético Osasuna B",
              "visitante": "Zamora C.F"
            },
          
            "estadio": "Ciudad Deportiva de Tajonar",
          
            "resultado": {
              "local": 1,
              "visitante": 0
            },
          
            "goles": {
              "local": [
      
                  {"jugador": "Diego Espejo"}
      
              ],
              "visitante": []
            },
          
            "asistencias": {
              "local": [
      
                  {"jugador": "Toni Herrero"}
      
              ],
              "visitante": []
            },
          
            "notas": []
          },
    
          {
            "id": 2,
            "fecha": "2024-09-01",
            "hora": "20:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "S.D Tarazona"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 0,
                "visitante": 1
            },
          
            "goles": {
                "local": [],
                "visitante": [
          
                    { "jugador": "Lluis Llácer" }
      
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
            "fecha": "2024-09-07",
            "hora": "15:30",
          
            "equipos": {
                "local": "Bilbao Athletic",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Instalaciones de Lezama",
          
            "resultado": {
                "local": 3,
                "visitante": 3
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Endika Buján" },
                    { "jugador": "Xabier Irurita" },
                    { "jugador": "Ibai Sanz" }
        
                ],
                "visitante": [
          
                    { "jugador": "Roni" },
                    { "jugador": "Kike Márquez"},
                    { "jugador": "Pablo Clavería" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": []
          },
    
          {
            "id": 4,
            "fecha": "2024-09-15",
            "hora": "17:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Cultural Leonesa"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 0,
                "visitante": 1
            },
          
            "goles": {
                "local": [],
                "visitante": [
          
                    { "jugador": "Luis Chacón" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": [
                  { "jugador": "Antón Escobar" }
                ]
            },
          
            "notas": []
          },
    
          {
            "id": 5,
            "fecha": "2024-09-21",
            "hora": "19:30",
          
            "equipos": {
                "local": "F.C Barcelona Atlétic",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Estadio Johan Cruyff",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
                    { "jugador": "Óscar Ureña" }
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
                  { "jugador": "Rubén López"}
                ],
                "visitante": []
            },
          
            "notas": []
          },
            
          {
            "id": 6,
            "fecha": "2024-09-29",
            "hora": "12:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "S.D Amorebieta"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 5,
                "visitante": 0
            },
          
            "goles": {
                "local": [
                    { "jugador": "Pito Camacho" },
                    { "jugador": "Edu Campabadal" },
                    { "jugador": "Kike Márquez" },
                    { "jugador": "Pito Camacho" },
                    { "jugador": "Pito Camacho" }
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
                  { "jugador": "Kike Márquez"},
                  { "jugador": "Rafa Tresaco" },
                  { "jugador": "Luis Rivas" }
                ],
                "visitante": []
            },
          
            "notas": []
          },
            
          {
            "id": 7,
            "fecha": "2024-10-06",
            "hora": "15:30",
          
            "equipos": {
                "local": "Gimnástica Segoviana",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "La Albuera",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
                    { "jugador": "Miguel Berlanga" }
                ],
                "visitante": [
          
                    { "jugador": "Rafa Tresaco" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": [
                  { "jugador": "Pito Camacho" }
                ]
            },
          
            "notas": []
          },
            
          {
            "id": 8,
            "fecha": "2024-10-12",
            "hora": "15:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "F.C Andorra"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 2,
                "visitante": 0
            },
          
            "goles": {
                "local": [

                    { "jugador": "Kike Márquez" },
                    { "jugador": "Rufino Lucero" }
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [

                    { "jugador": "Rufino Lucero" },
                    { "jugador": "Edu Campabadal" }

                ],
                "visitante": []
            },
          
            "notas": []
          },
            
          {
            "id": 9,
            "fecha": "2024-10-18",
            "hora": "20:30",
          
            "equipos": {
                "local": "Barakaldo C.F",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Lasesarre",
          
            "resultado": {
                "local": 0,
                "visitante": 3
            },
          
            "goles": {
                "local": [],
                "visitante": [
          
                    { "jugador": "Kike Márquez (Penalti)" },
                    { "jugador": "Sergio Nieto" },
                    { "jugador": "Luis Rivas" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": [

                  { "jugador": "Julen Castañeda" }

                ]
            },
          
            "notas": []
          },
            
          {
            "id": 10,
            "fecha": "2024-10-18",
            "hora": "19:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Sestao River Club"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 2
            },
          
            "goles": {
                "local": [
                    { "jugador": "Pito Camacho" }
                ],
                "visitante": [
          
                    { "jugador": "Leandro Martínez" },
                    { "jugador": "Ion Etxaniz" }
        
                ]
            },
          
            "asistencias": {
                "local": [
                  { "jugador": "Rufino Lucero"}
                ],
                "visitante": [
                  { "jugador": "Marcos Bustillo" }
                ]
            },
          
            "notas": []
          },
            
          {
            "id": 11,
            "fecha": "2024-11-03",
            "hora": "17:30",
          
            "equipos": {
                "local": "S.D Ponferradina",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Toralín",
          
            "resultado": {
                "local": 2,
                "visitante": 2
            },
          
            "goles": {
                "local": [

                    { "jugador": "Álvaro Bustos" },
                    { "jugador": "Kevin Sibille" }

                ],
                "visitante": [

                    { "jugador": "Pablo Clavería" },
                    { "jugador": "Roni" }

                ]
            },
          
            "asistencias": {
                "local": [

                    { "jugador": "José Luis Cortés"},
                    { "jugador": "Yeray Cabanzón"}

                ],
                "visitante": []
            },
          
            "notas": []
          },
            
          {
            "id": 12,
            "fecha": "2024-11-10",
            "hora": "17:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Real Sociedad B"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [

                    { "jugador": "Manex Gibelalde (Propia Puerta)" }

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
            "id": 13,
            "fecha": "2024-11-16",
            "hora": "19:30",
          
            "equipos": {
                "local": "Unionistas de Salamanca",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Reina Sofía",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Jorge Rastrojo" }
        
                ],
                "visitante": [
        
                    { "jugador": "Kike Márquez (Penalti)" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 14,
            "fecha": "2024-11-22",
            "hora": "20:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "C.D Lugo"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 2,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Pablo Clavería" },
                    { "jugador": "Rufino Lucero" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Kike Márquez"},
                    { "jugador": "Guille Macho" }
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 15,
            "fecha": "2024-12-01",
            "hora": "17:30",
          
            "equipos": {
                "local": "Celta Fortuna",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Balaídos",
          
            "resultado": {
                "local": 2,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Óscar Marcos" },
                    { "jugador": "Emi Rodriguez" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Tincho"}
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 16,
            "fecha": "2024-12-07",
            "hora": "17:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Ourense C.F"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "José Carlos" }
        
                ],
                "visitante": [
        
                    { "jugador": "Iván del Olmo" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Sergio Nieto"}
        
                ],
                "visitante": [
        
                    { "jugador": "Fernando Andrada"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 17,
            "fecha": "2024-12-14",
            "hora": "17:30",
          
            "equipos": {
                "local": "Gimnástic de Tarragona",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Nou Estadi Costa Daurada",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Ander Gorostidi" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Jaume Jardí"}
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 18,
            "fecha": "2024-12-22",
            "hora": "19:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "C.D Arenteiro"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 3,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Carlos Gutiérrez" },
                    { "jugador": "Kike Márquez (Penalti)" },
                    { "jugador": "Joel Priego" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Roni"}
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 19,
            "fecha": "2025-1-12",
            "hora": "12:00",
          
            "equipos": {
                "local": "Real Unión Club",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Stadium Gal",
          
            "resultado": {
                "local": 1,
                "visitante": 2
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Quique Rivero (Penalti)" }
        
                ],
                "visitante": [
        
                    { "jugador": "Roni" },
                    { "jugador": "Kike Márquez" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": [
        
                    { "jugador": "Rafa Tresaco"},
                    { "jugador": "Luis Rivas" }
        
                ]
            },
          
            "notas": ["Último partido de la primera vuelta. Kike Marquez falló un penalti."]
          },

          {
            "id": 20,
            "fecha": "2025-1-19",
            "hora": "12:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "C.A Osasuna B"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Edu Campabadal" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": ["Primer partido de la segunda vuelta."]
          },

          {
            "id": 21,
            "fecha": "2025-1-26",
            "hora": "15:30",
          
            "equipos": {
                "local": "S.D Tarazona",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Municipal de Tarazona",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Adrián Fuentes" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Marc Trilles"}
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 22,
            "fecha": "2025-2-1",
            "hora": "20:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Bilbao Athletic"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 0,
                "visitante": 2
            },
          
            "goles": {
                "local": [],
                "visitante": [
        
                    { "jugador": "Xabi Irurita" },
                    { "jugador": "Endika Buján" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 23,
            "fecha": "2025-2-8",
            "hora": "20:00",
          
            "equipos": {
                "local": "Sestao River Club",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Campo de Fútbol Las Llanas",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Ion Etxaniz" }
        
                ],
                "visitante": [
        
                    { "jugador": "Kike Márquez" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Iago Herrerín"}
        
                ],
                "visitante": [
        
                    { "jugador": "Pito Camacho"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 24,
            "fecha": "2025-2-15",
            "hora": "17:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Barça Atlétic"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Kike Márquez" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "José Carlos"}
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 25,
            "fecha": "2025-2-23",
            "hora": "12:00",
          
            "equipos": {
                "local": "F.C Andorra",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Estadio Nacional de Andorra",
          
            "resultado": {
                "local": 2,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Manu Nieto" },
                    { "jugador": "Manu Nieto" }
        
                ],
                "visitante": [
        
                    { "jugador": "Pito Camacho" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Diego Alende"},
                    { "jugador": "Christos Almpanis" }
        
                ],
                "visitante": [
        
                    { "jugador": "Rufo Lucero"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 26,
            "fecha": "2025-3-2",
            "hora": "19:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Barakaldo C.F"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 2,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Rafa Tresaco" },
                    { "jugador": "Rafa Tresaco" }
        
                ],
                "visitante": [
        
                    { "jugador": "Alex Valiño" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Rufo Lucero"}
        
                ],
                "visitante": [
        
                    { "jugador": "Bittor Isuskiza"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 27,
            "fecha": "2025-3-9",
            "hora": "17:30",
          
            "equipos": {
                "local": "Cultural Leonesa",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Reino de León",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Rafa Tresaco" }
        
                ],
                "visitante": [
        
                    { "jugador": "Quique Fornos" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Carlos Calderón"}
        
                ],
                "visitante": [
        
                    { "jugador": "Kike Márquez"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 28,
            "fecha": "2025-3-15",
            "hora": "18:00",
          
            "equipos": {
                "local": "Real Sociedad B",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Instalaciones de Zubieta",
          
            "resultado": {
                "local": 0,
                "visitante": 1
            },
          
            "goles": {
                "local": [],
                "visitante": [
        
                    { "jugador": "Carlos Ramos" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": []
            },
          
            "notas": []
          },
          
          {
            "id": 29,
            "fecha": "2025-3-22",
            "hora": "19:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Gimnástic de Tarragona"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 1
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Pito Camacho" }
        
                ],
                "visitante": [
        
                    { "jugador": "Antoñín" }
        
                ]
            },
          
            "asistencias": {
                "local": [],
                "visitante": [
        
                    { "jugador": "Roberto Torres"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 30,
            "fecha": "2025-3-30",
            "hora": "17:30",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "Unionistas de Salamanca"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 1,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Rufo Lucero" }
        
                ],
                "visitante": []
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Kike Márquez"}
        
                ],
                "visitante": []
            },
          
            "notas": []
          },

          {
            "id": 31,
            "fecha": "2025-4-6",
            "hora": "18:00",
          
            "equipos": {
                "local": "Ourense C.F",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "O Couto",
          
            "resultado": {
                "local": 0,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Prueba_goleador5" }
        
                ],
                "visitante": [
        
                    { "jugador": "Prueba_goleador5" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Prueba_asistente5"}
        
                ],
                "visitante": [
        
                    { "jugador": "Prueba_asistente5"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 32,
            "fecha": "2025-4-12",
            "hora": "18:00",
          
            "equipos": {
                "local": "Zamora C.F",
                "visitante": "S.D Ponferradina"
            },
          
            "estadio": "Ruta de la Plata",
          
            "resultado": {
                "local": 0,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Prueba_goleador5" }
        
                ],
                "visitante": [
        
                    { "jugador": "Prueba_goleador5" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Prueba_asistente5"}
        
                ],
                "visitante": [
        
                    { "jugador": "Prueba_asistente5"}
        
                ]
            },
          
            "notas": []
          },

          {
            "id": 33,
            "fecha": "2025-4-20",
            "hora": "18:00",
          
            "equipos": {
                "local": "S.D Amorebieta",
                "visitante": "Zamora C.F"
            },
          
            "estadio": "Urritxe",
          
            "resultado": {
                "local": 0,
                "visitante": 0
            },
          
            "goles": {
                "local": [
        
                    { "jugador": "Prueba_goleador5" }
        
                ],
                "visitante": [
        
                    { "jugador": "Prueba_goleador5" }
        
                ]
            },
          
            "asistencias": {
                "local": [
        
                    { "jugador": "Prueba_asistente5"}
        
                ],
                "visitante": [
        
                    { "jugador": "Prueba_asistente5"}
        
                ]
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
