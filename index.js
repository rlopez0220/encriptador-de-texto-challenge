function encriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muneco = document.getElementById("muneco");
    const mensaje = document.getElementById("mensaje");
    const btnCopiar = document.getElementById("btn-copiar");

    const textoCifrado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    if (texto.trim()) {
        mensaje.value = textoCifrado;
        mensaje.style.display = 'block';
        btnCopiar.style.display = 'block';
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muneco.style.display = 'none';
    } else {
        resetUI();
        swal("¡ATENCIÓN!", "Debes ingresar algún texto", "warning");
    }
}

function desencriptar() {
    const texto = document.getElementById("texto").value;
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muneco = document.getElementById("muneco");
    const mensaje = document.getElementById("mensaje");
    const btnCopiar = document.getElementById("btn-copiar");

    const textoCifrado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    if (texto.trim()) {
        mensaje.value = textoCifrado;
        mensaje.style.display = 'block';
        btnCopiar.style.display = 'block';
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muneco.style.display = 'none';
    } else {
        resetUI();
        swal("¡ATENCIÓN!", "Debes ingresar algún texto", "warning");
    }
}

function copiarTexto() {
    const mensaje = document.getElementById("mensaje");
    mensaje.select();
    document.execCommand("copy");
    swal("¡Copiado!", "El texto ha sido copiado al portapapeles", "success");
}

function filtrarTexto() {
    const texto = document.getElementById("texto");
    texto.value = texto.value
        .toLowerCase()
        .replace(/[áàâãäå]/g, "a")
        .replace(/[éèêë]/g, "e")
        .replace(/[íìîï]/g, "i")
        .replace(/[óòôõö]/g, "o")
        .replace(/[úùûü]/g, "u")
        .replace(/ç/g, "c")
        .replace(/[^a-z\s]/g, ""); // Filtrar todo lo que no sea letras minúsculas y espacios
}

function resetUI() {
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const parrafo = document.getElementById("parrafo");
    const muneco = document.getElementById("muneco");
    const mensaje = document.getElementById("mensaje");
    const btnCopiar = document.getElementById("btn-copiar");

    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    mensaje.style.display = 'none';
    btnCopiar.style.display = 'none';
    muneco.style.display = 'block';
}

window.onload = function() {
    document.getElementById("texto").value = ""; // Asegura que el textarea esté vacío al cargar la página
};