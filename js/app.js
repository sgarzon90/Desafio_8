document.addEventListener("DOMContentLoaded", function () {
    const styles = ["./css/estilos.css", "./css/estilos-retro.css", "./css/estilos-futuro.css"];
    let indiceActual = 0;

    const styleButton = document.getElementById("estilo-boton");
    const stylesheet = document.getElementById("estilos");

    styleButton.addEventListener("click", function () {

        indiceActual = (indiceActual + 2) % styles.length;

        stylesheet.href = styles[indiceActual];

    });
});


