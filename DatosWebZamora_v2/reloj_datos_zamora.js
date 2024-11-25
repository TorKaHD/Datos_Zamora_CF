// Función que actualiza la hora, fecha y día de la semana
function actualizarReloj() {
    const ahora = new Date();  // Obtenemos el objeto Date con la fecha y hora actual

    // Obtenemos la hora, minutos y segundos con dos dígitos (añade un 0 delante si es necesario)
    const hora = ahora.getHours().toString().padStart(2, '0');     // Obtiene la hora actual
    const minutos = ahora.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos actuales
    const segundos = ahora.getSeconds().toString().padStart(2, '0'); // Obtiene los segundos actuales

    // Configuramos las opciones para obtener el día de la semana y la fecha (día, mes, año)
    const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' };
    
    // Obtenemos la fecha con el día de la semana, en el formato local de España ('es-ES')
    const fechaOriginal = ahora.toLocaleDateString('es-ES', opcionesFecha);
    
    // Función para capitalizar la primera letra
    const capitalizarPrimeraLetra = (texto) => {
        return texto.charAt(0).toUpperCase() + texto.slice(1);
    };

    // Modificamos la fecha para capitalizar el día de la semana
    const fecha = fechaOriginal.split(',').map((parte, index) => {
        return index === 0 ? capitalizarPrimeraLetra(parte.trim()) : parte.trim();
    }).join(', ');

    // Mostramos la hora actualizada dentro del elemento con id "reloj"
    document.getElementById('reloj').textContent = `${hora}:${minutos}:${segundos}`;

    // Mostramos la fecha y el día de la semana dentro del elemento con id "fecha"
    document.getElementById('fecha1').textContent = fecha;
}

// Llamamos a la función `actualizarReloj` cada 1000 milisegundos (1 segundo) para actualizar la hora en tiempo real
setInterval(actualizarReloj, 1000);

// Llamamos a la función inmediatamente cuando la página se carga para mostrar la hora y la fecha al instante
actualizarReloj();