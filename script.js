// Coeficientes de la función y conexión con GeoGebra
let b = 0;
let c = 0;
let geo = null;

// Crea el applet de GeoGebra
let applet = new GGBApplet({
appName: "graphing", // Abre la vista de graficación
width: 800, // Ancho de la gráfica
height: 450, // Alto de la gráfica
showToolBar: false, // Oculta la barra de herramientas
showMenuBar: false, // Oculta el menú
appletOnLoad: function(g) {
geo = g; // Guarda el applet cuando termina de cargar
}
}, true);

// Inserta GeoGebra al cargar la página
window.addEventListener("load", function() {
applet.inject("ggb-element");
});

// Ejecuta estas acciones al pulsar el botón
document.getElementById("generar").onclick = function() {

// Elige valores aleatorios entre -3 y 3
b = Math.floor(Math.random() * 7) - 3;
c = Math.floor(Math.random() * 7) - 3;

// Muestra los coeficientes elegidos
document.getElementById("valorB").innerText = "b = " + b;
document.getElementById("valorC").innerText = "c = " + c;

// Oculta los resultados anteriores
let cajas = document.querySelectorAll(".caja");
for (let i = 0; i < cajas.length; i++) {
cajas[i].style.display = "none";
}

// Construye la fórmula con el signo correcto
let formula = "f(x) = " + b + "x";
if (c > 0) formula += " + " + c;
if (c < 0) formula += " - " + Math.abs(c);

// Prepara el texto que se mostrará en el resultado
let texto = "Fórmula: " + formula;

// Si ambos coeficientes son cero, muestra el mensaje correspondiente
if (b == 0 && c == 0) {
document.getElementById("noHay").style.display = "block";
document.getElementById("resultadoNoHay").innerText = "No hay función.";
}

// Si b es cero, la función es constante
else if (b == 0) {
document.getElementById("constante").style.display = "block";
texto += "\nEs una línea horizontal.";
texto += "\nCorta el eje Y en (0, " + c + ").";
texto += "\nEs constante.";
document.getElementById("resultadoConstante").innerText = texto;
}

// Si c es cero, la función es lineal
else if (c == 0) {
document.getElementById("lineal").style.display = "block";
texto += "\nPasa por el origen (0, 0).";
texto += b > 0 ? "\nEs creciente." : "\nEs decreciente.";
document.getElementById("resultadoLineal").innerText = texto;
}

// En los demás casos, la función es afín
else {
document.getElementById("afin").style.display = "block";
texto += "\nNo pasa por el origen.";
texto += "\nCorta el eje Y en (0, " + c + ").";
texto += b > 0 ? "\nEs creciente." : "\nEs decreciente.";
document.getElementById("resultadoAfin").innerText = texto;
}

// Dibuja la función en GeoGebra cuando ya está cargado
if (geo != null) {
geo.evalCommand("f(x)=" + b + "*x+" + c);
}
};
