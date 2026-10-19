function analizarCampus() {

    const energia = parseFloat(
        document.getElementById("energia").textContent
    );

    const recomendacion =
        document.getElementById("recomendacion");

    if (energia >= 5) {

        recomendacion.innerHTML =
            "⚠️ CONSUMO ALTO<br>" +
            "NEXUS recomienda reducir la iluminación " +
            "en las áreas con poca actividad.";

    } else if (energia >= 4) {

        recomendacion.innerHTML =
            "🟡 CONSUMO MODERADO<br>" +
            "El sistema recomienda mantener vigilancia " +
            "sobre el consumo energético.";

    } else {

        recomendacion.innerHTML =
            "🟢 CONSUMO EFICIENTE<br>" +
            "El campus está utilizando la energía " +
            "de manera eficiente.";

    }
}

setInterval(analizarCampus, 2000);

analizarCampus();