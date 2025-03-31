<?php include "conexion_bbdd.php" ?>

<!DOCTYPE html>

<html lang = "en">

<head>

    <meta charset = "UTF-8">
    <meta http-equiv = "X-UA-Compatible" content = "IE=edge">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">
    <title>PlayOff Ascenso 23/24 - Datos Zamora Club de Fútbol</title>

    <!-- CSS -->

    <link rel = "stylesheet" type = "text/css" href = "css_pagina.css">

    <!-- Font Awesome -->

    <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity = "sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" crossorigin = "anonymous" referrerpolicy = "no-referrer" />

   <!-- Tailwind CSS -->

   <script src = "https://cdn.tailwindcss.com"></script>

   <!-- Alpine JS -->
    
   <script defer src = "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

    <!-- Google Fonts -->

    <!-- Bebas Neue -->
    <link rel = "preconnect" href = "https://fonts.googleapis.com">
    <link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin>
    <link href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel = "stylesheet">

    <!-- CDN Fonts -->

    <link href = "https://fonts.cdnfonts.com/css/geneva01" rel = "stylesheet">
    <link href = "https://fonts.cdnfonts.com/css/bastardussans" rel = "stylesheet">

</head>

<body>

  <nav class = "flex flex-col md:flex-row items-center justify-start p-6 absolute top-0 left-0">

    <div class = "mr-6">

        <a class = "text-black text-lg tracking-wider text-gray-400 font-bold font-[Bebas Neue] hover:text-gray-600" href = "inicio_web_v2.php" translate = "no">
            
            <i class = "fa-solid fa-house fa-xl text-gray-400"></i>

            Inicio

        </a>
        
    </div>

    <div x-data = "{ open: false, submenuOpen: null }" class = "relative inline-block text-left">
        
        <!-- Botón metálico -->
        <button 
            @click = "open = !open; submenuOpen = null" 
            class = "relative bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 
                   border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg
                   shadow-lg shadow-gray-400/50 hover:from-gray-500 hover:via-gray-300 hover:to-gray-500
                   hover:shadow-gray-500/60 active:scale-95 transition-all duration-200 inline-flex items-center"
        >
            <span>Datos Zamora C.F</span>

            <svg class = "w-4 h-4 ml-2" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">
                <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d="M19 9l-7 7-7-7"/>
            </svg>

        </button>
        
        <!-- Dropdown metálico -->
        <div 
            x-show = "open"
            @click.outside = "open = false; submenuOpen = null"
            class = "absolute left-0 mt-2 w-56 bg-gradient-to-b from-gray-100 to-gray-300 
                   border border-gray-300 rounded-md shadow-xl shadow-gray-400/50 z-10"
            style = "display: none"
        >

            <div class = "py-1">
                <!-- Primer submenú -->
                <div class = "relative" x-data = "{ submenuHover: false }">

                    <a 
                        @click = "submenuOpen = submenuOpen === 1 ? null : 1"
                        class="flex justify-between items-center px-4 py-2 text-sm text-gray-800 
                               hover:bg-gray-200/50 transition-colors cursor-pointer"
                    >

                        <span>Temporada 23/24 →</span>

                        <svg class = "w-4 h-4" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">
                            <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width="2" d = "M9 5l7 7-7 7"/>
                        </svg>

                    </a>
                    
                    <!-- Submenú metálico -->
                    <div 
                        x-show = "submenuOpen === 1"
                        class = "absolute left-full top-0 ml-1 w-56 bg-gradient-to-b from-gray-100 to-gray-300 
                               border border-gray-300 rounded-md shadow-xl shadow-gray-400/50 z-20"
                        style = "display: none"
                    >

                        <div class = "py-1">
                            <a href = "pretemporada_23_24_zamora_v2.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">Pretemporada 23/24</a>
                            <a href = "copa_rey_23_24_zamora_v2.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">Copa del Rey 23/24</a>
                            <a href = "temporada_23_24_zamora_v2.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">Temporada 23/24</a>
                            <a href = "#" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">PlayOff Ascenso 23/24</a>
                        </div>

                    </div>

                </div>
                
                <!-- Segundo submenú -->
                <div class = "relative" x-data = "{ submenuHover: false }">

                    <a 
                        @click = "submenuOpen = submenuOpen === 2 ? null : 2"
                        class = "flex justify-between items-center px-4 py-2 text-sm text-gray-800 
                               hover:bg-gray-200/50 transition-colors cursor-pointer"
                    >

                        <span>Temporada 24/25 →</span>

                        <svg class = "w-4 h-4" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24">
                            <path stroke-linecap = "round" stroke-linejoin = "round" stroke-width = "2" d = "M9 5l7 7-7 7"/>
                        </svg>

                    </a>
                    
                    <!-- Submenú metálico -->
                    <div 
                        x-show = "submenuOpen === 2"
                        class = "absolute left-full top-0 ml-1 w-56 bg-gradient-to-b from-gray-100 to-gray-300 
                               border border-gray-300 rounded-md shadow-xl shadow-gray-400/50 z-20"
                        style = "display: none"
                    >

                        <div class = "py-1">

                            <a href = "pretemporada_24_25_zamora_v2.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">Pretemporada 24/25</a>
                            <a href = "copa_rey_24_25_zamora_v2.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">Copa del Rey 24/25</a>
                            <a href = "temporada_24_25_zamora_v2.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">Temporada 24/25</a>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</nav>

<div class = "parallaxBg2" style = "background-image: url('estadio_zamora.webp');">

    <h1 class = "p-4 leading-relaxed text-[#F0E0C0] text-[45px] pt-[21dvh] text-center" style = "font-family: 'Geneva01', sans-serif;" translate = "no">
        Resultados de Partidos de PlayOff Ascenso 23/24
    </h1>

</div>

<div class = "contenedor-izquierda flex flex-col items-center min-h-screen bg-gray-50 border-x-8 border-red-500 shadow-2xl shadow-red-300/50 p-4" style = "font-family: 'BastardusSans', sans-serif;">

    <div style = "padding-top: 0.1px ;"></div>

    <!-- Llamada base de datos -->

    <?php 
    
    $sql = "SELECT * FROM datos_zamoracf WHERE tipo_partido = 'PlayOff de ascenso' AND temporada = '2023 - 2024' ORDER BY fecha_partido ASC"; 
    $result = mysqli_query($conexion,$sql);


    if (!$sql) {
        die("Error: " . mysqli_error($conexion));
    }
    else {

        while ($match = mysqli_fetch_assoc($result)) {
            // Formatear fecha y hora
            $fecha = date("d/m/Y", strtotime($match['fecha_partido']));
            $hora = date("H:i", strtotime($match['hora_partido']));

            echo "<div class = 'mb-8 p-4 w-full texto-izquierda'>";
            echo "<strong>Partido:</strong> " . $match['numero_jornada'] . "<br>";
            echo "<strong>Fecha:</strong> " . $fecha . "<br>";
            echo "<strong>Hora:</strong> " . $hora . "<br>";
            echo "<strong>Estadio:</strong> " . $match['estadio'] . "<br>";
            echo "<strong>Equipo local:</strong> " . $match['equipo_local'] . "<br>";
            echo "<strong>Equipo visitante:</strong> " . $match['equipo_visitante'] . "<br>";
            echo "<strong>Goleadores equipo local:</strong> " . $match['goleador_local'] . "<br>";
            echo "<strong>Goleadores equipo visitante:</strong> " . $match['goleador_visitante'] . "<br>";
            echo "<strong>Resultado final:</strong> " . $match['resultado_partido'] . "<br>";
            echo "<strong>Notas del partido:</strong> " . $match['notas_partido'] . "<br>";
            echo "</div>";
            echo "<hr class = 'w-full border-red-500 mb-8 ml-0'>"; // Línea divisoria
        }
        
        }

    ?>
    
    <!-- Tailwind Config -->
    <script src = "tailwind.config.js"></script>

</div>

</body>
</html>