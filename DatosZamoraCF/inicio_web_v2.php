<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name = "viewport" content = "width=device-width, initial-scale=1.0">

    <title>Inicio - Datos Zamora C.F</title>

    <!-- Tailwind CSS -->

    <script src = "https://cdn.tailwindcss.com"></script>

    <!-- Alpine JS -->
    
    <script defer src = "https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
    
    <!-- CSS -->

    <link rel = "stylesheet" type = "text/css" href = "css_pagina.css">

    <!-- Font Awesome -->

    <link rel = "stylesheet" href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity = "sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" crossorigin = "anonymous" referrerpolicy = "no-referrer" />

    <!-- Google Fonts -->

    <!-- Bebas Neue -->
    <link rel = "preconnect" href = "https://fonts.googleapis.com">
    <link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin>
    <link href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel = "stylesheet">

    <!-- Carrois Gothic -->
    <link rel = "preconnect" href = "https://fonts.googleapis.com">
    <link rel = "preconnect" href = "https://fonts.gstatic.com" crossorigin>
    <link href = "https://fonts.googleapis.com/css2?family=Carrois+Gothic&display=swap" rel = "stylesheet">

    <!-- CDN Fonts -->

    <link href = "https://fonts.cdnfonts.com/css/geneva01" rel = "stylesheet">

</head>

<body>

     <div class = "parallaxBg">

            <h1 class = "p-4 leading-relaxed text-[#F0E0C0] text-[45px] pt-[21dvh] text-center" style = "font-family: 'Geneva01', sans-serif;" translate = "no">
                
                Centro de datos del Zamora Club de Fútbol
                
            </h1>
        
    </div>

    <div class = "flex flex-col items-center min-h-screen bg-gray-50 border-x-8 border-red-500 shadow-2xl shadow-red-300/50 p-4">

         <nav class = "flex flex-col md:flex-row items-center justify-start p-6 absolute top-0 left-0">

            <div class = "mr-6">
                <a class = "text-black text-lg tracking-wider text-gray-400 font-bold font-[Bebas Neue] hover:text-gray-600" href = "#" translate = "no">
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
                                    <a href = "playoff_ascenso_23_24.php" class = "block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200/50">PlayOff Ascenso 23/24</a>
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

<div style = "padding-top: 15px ;"></div>

<!-- Reloj y Fecha -->

<div class = "text-left w-full pl-1 mt-2 text-xl italic font-semibold text-yellow-950">

<?php

    echo '<h3 id = "reloj"></h3>';
    echo '<h3 id = "fecha1"></h3>';
    
?>

</div>

<figure>

    <img id = "myImage" class = "imagen_centro animate-fade-up w-[200px] flex justify-center pt-3" style = "filter: drop-shadow(7px 7px 15px rgba(0,0,0,0.7));" src = "logo_zamora_200.png" alt = "Zamora Club de Fútbol">

</figure>

    <section>

    <?php

    echo '<p class = "p-4 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left" translate = "no">Bienvenido al Centro de Datos del <strong>Zamora Club de Fútbol</strong>. Este es el espacio dedicado a todos los seguidores del <strong>Zamora</strong>. Agradecemos tu visita y esperamos que disfrutes explorando nuestra historia.</p>';
    echo '<p class = "p-4 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left" translate = "no">Aquí encontrarás toda la información organizada por temporadas en un solo lugar: nuestras victorias, los momentos compartidos, las celebraciones inolvidables y, lo más importante, las historias detrás de cada partido.</p>';
    echo '<p class = "p-4 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left" translate = "no">En este sitio también podrás descubrir datos interesantes sobre jugadores icónicos, estadísticas detalladas, clasificaciones actualizadas y las anécdotas que hay detrás de cada jornada.</p>';
    echo '<p class = "p-4 sm:text-sm md:text-base lg:text-lg xl:text-xl text-yellow-950 text-left" translate = "no">Nos mantenemos al día, desde la temporada 2023-2024 hasta los registros más recientes del club, porque creemos en el fútbol y en el poder de la historia que nos une.</p>';
    
    ?>

    </section>

</div>
    
    <!-- Javascript propio -->
    
    <script src = "reloj_datos_zamora.js"></script>

</body>
</html>