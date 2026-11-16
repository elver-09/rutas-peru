const formulario = document.getElementById("formularioRegistro");
const campoNombre = document.getElementById("nombre");
const mensajeNombre = document.getElementById("mensajeNombre");
const mensajeDestinos = document.getElementById("mensajeDestinos");
const opcionesDestino = document.querySelectorAll('input[name="destinos"]');

campoNombre.addEventListener("input", function() {
    const nombre = campoNombre.value.trim();

    if (nombre === "") {
        mensajeNombre.textContent = "";
    } else {
        mensajeNombre.textContent = "¡Hola, " + nombre + "! Bienvenido a Rutas del Perú.";
    }
});

function obtenerDestinos() {
    let destinos = "";

    opcionesDestino.forEach(function(opcion) {
        if (opcion.checked) {
            if (destinos !== "") {
                destinos = destinos + ", ";
            }
            destinos = destinos + opcion.parentElement.textContent.trim();
        }
    });

    return destinos;
}

opcionesDestino.forEach(function(opcion) {
    opcion.addEventListener("change", function() {
        const destinos = obtenerDestinos();

        if (destinos === "") {
            mensajeDestinos.textContent = "";
        } else {
            mensajeDestinos.textContent = "Destinos elegidos: " + destinos;
        }
    });
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = campoNombre.value.trim();
    const email = document.getElementById("email").value.trim();
    const pais = document.getElementById("pais");
    const viajeros = document.getElementById("viajeros").value;
    const opinion = document.getElementById("opinion").value.trim();
    const destinos = obtenerDestinos();

    if (nombre === "" || opinion === "") {
        alert("Por favor, completa los campos obligatorios.");
        return;
    }

    const continuar = confirm("¿Confirmas los datos de tu solicitud, " + nombre + "?");

    if (continuar) {
        document.getElementById("resNombre").textContent = nombre;
        document.getElementById("resEmail").textContent = email;
        document.getElementById("resPais").textContent = pais.options[pais.selectedIndex].text;
        document.getElementById("resViajeros").textContent = viajeros;
        document.getElementById("resDestinos").textContent = destinos || "Sin destinos seleccionados";
        document.getElementById("resOpinion").textContent = opinion;

        formulario.reset();
        document.getElementById("resultadoRegistro").style.display = "block";
    }
});

formulario.addEventListener("reset", function() {
    mensajeNombre.textContent = "";
    mensajeDestinos.textContent = "";
    document.getElementById("resultadoRegistro").style.display = "none";
});

const botonEdad = document.getElementById("btnEvaluarEdad");
const resultadoEdad = document.getElementById("resultadoEdad");

botonEdad.addEventListener("click", function() {
    const nombre = document.getElementById("nombrePersona").value.trim();
    const campoEdad = document.getElementById("edadPersona");
    const edad = Number(campoEdad.value);

    if (nombre === "") {
        resultadoEdad.textContent = "Por favor, ingresa tu nombre.";
        resultadoEdad.style.color = "red";
        return;
    }

    if (campoEdad.value === "" || !campoEdad.checkValidity()) {
        resultadoEdad.textContent = "Por favor, ingresa una edad válida.";
        resultadoEdad.style.color = "red";
        return;
    }

    if (edad >= 18) {
        resultadoEdad.textContent = nombre + ", eres mayor de edad.";
        resultadoEdad.style.color = "green";
    } else {
        resultadoEdad.textContent = nombre + ", eres menor de edad.";
        resultadoEdad.style.color = "#875007";
    }
});
