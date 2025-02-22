/**
 * FUNCIÓN PRINCIPAL: actualizarReloj
 * Actualiza los elementos HTML con la hora y fecha actualizadas, aplicando formato específico.
 * @param {Date} fecha - Objeto Date con la fecha y hora actuales.
 * @param {string} [timeZone] - Zona horaria (por defecto: la del navegador).
 */
function actualizarReloj(fecha, timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone) {
    
    // ================================================
    // CONFIGURACIÓN DE OPCIONES DE FORMATEO
    // ================================================
    
    // Opciones para formatear la hora (ej: "14:05:23")
    const opcionesHora = {
        hour: '2-digit',      // Hora en 2 dígitos (09, 12, 23)
        minute: '2-digit',    // Minutos en 2 dígitos
        second: '2-digit',    // Segundos en 2 dígitos
        timeZone: timeZone    // Zona horaria (ej: "Europe/Madrid")
    };

    // Opciones para formatear la fecha (ej: "sábado, 22 de febrero de 2025")
    const opcionesFecha = {
        weekday: 'long',     // Día de la semana completo (lunes, martes...)
        day: 'numeric',      // Día del mes en número (1, 15, 31)
        month: 'long',       // Mes en texto completo (febrero, marzo...)
        year: 'numeric',     // Año en número (2024, 2025...)
        timeZone: timeZone   // Zona horaria
    };

    // ================================================
    // FORMATEO DE HORA Y FECHA
    // ================================================
    
    // Generar hora localizada (ej: "17:33:23")
    const hora = fecha.toLocaleTimeString('es-ES', opcionesHora); 
    
    // Generar fecha localizada (ej: "sábado, 22 de febrero de 2025")
    const fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha); 
    
    // ================================================
    // POST-PROCESAMIENTO DE LA FECHA
    // ================================================
    
    // Procesar la fecha para corregir formato y capitalización
    const fechaFinal = fechaFormateada.split(',') // Dividir en partes: ["sábado", " 22 de febrero de 2025"]
        .map((parte, index) => {
            // Parte 1: Día de la semana (ej: "sábado")
            if (index === 0) {
                return parte.trim().charAt(0).toUpperCase() + parte.trim().slice(1); // "Sábado"
            
            // Parte 2: Fecha completa (ej: "22 de febrero de 2025")
            } else {
                return parte.trim()
                    .split(' ') // Dividir en segmentos: ["22", "de", "febrero", "de", "2025"]
                    .filter(segmento => segmento.toLowerCase() !== 'de') // Eliminar "de": ["22", "febrero", "2025"]
                    .map((segmento, i) => {
                        // Capitalizar el mes (posición 1 después de filtrar)
                        if (i === 1) return segmento.charAt(0).toUpperCase() + segmento.slice(1); // "Febrero"
                        return segmento; // Mantener día y año sin cambios
                    })
                    .join(' '); // Unir: "22 Febrero 2025"
            }
        })
        .join(', '); // Unir todo: "Sábado, 22 Febrero 2025"

    // ================================================
    // ACTUALIZACIÓN DEL DOM
    // ================================================
    
    // Mostrar la hora en el elemento con id "reloj"
    document.getElementById('reloj').textContent = hora; 
    
    // Mostrar la fecha en el elemento con id "fecha1"
    document.getElementById('fecha1').textContent = fechaFinal; 
}

// ================================================
// INICIALIZACIÓN Y EJECUCIÓN CONTINUA
// ================================================

// Ejecutar al cargar la página (sin esperar 1 segundo)
actualizarReloj(new Date()); 

// Actualizar cada segundo (1000ms)
setInterval(() => actualizarReloj(new Date()), 1000);