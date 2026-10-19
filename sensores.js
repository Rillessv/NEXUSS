function actualizarSensores() {

    // Generamos valores simulados
    const temperatura = (22 + Math.random() * 3).toFixed(1);
    const iluminacion = Math.floor(65 + Math.random() * 20);
    const personas = Math.floor(150 + Math.random() * 50);
    const energia = (3.5 + Math.random() * 2).toFixed(1);

    // Mostramos los datos en el dashboard
    document.getElementById("Temperatura").textContent =
        temperatura + "°C";

    document.getElementById("Iluminacion").textContent =
        iluminacion + "%";

    document.getElementById("Personas").textContent =
        personas;

    document.getElementById("Energia").textContent =
        energia + " kWh";
}


// Actualizar cada 5 segundos
setInterval(actualizarSensores, 2000);

// Ejecutar inmediatamente
actualizarSensores();