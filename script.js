let b = 0;
let c = 0;
let geo = null;

let applet = new GGBApplet({
appName: "graphing",
width: 800,
height: 450,
showToolBar: false,
showMenuBar: false,
appletOnLoad: function(g) {
geo = g;
}
}, true);

window.addEventListener("load", function() {
applet.inject("ggb-element");
});

document.getElementById("generar").onclick = function() {

b = Math.floor(Math.random() * 7) - 3;
c = Math.floor(Math.random() * 7) - 3;

document.getElementById("valorB").innerText = "b = " + b;
document.getElementById("valorC").innerText = "c = " + c;

let cajas = document.querySelectorAll(".caja");

for (let i = 0; i < cajas.length; i++) {
cajas[i].style.display = "none";
}

let formula = "f(x) = " + b + "x";
if (c > 0) formula += " + " + c;
if (c < 0) formula += " - " + Math.abs(c);

let texto = "Fórmula: " + formula;

if (b == 0 && c == 0) {
document.getElementById("noHay").style.display = "block";
document.getElementById("resultadoNoHay").innerText = "No hay función.";
}

else if (b == 0) {
document.getElementById("constante").style.display = "block";
texto += "\nEs una línea horizontal.";
texto += "\nCorta el eje Y en (0, " + c + ").";
texto += "\nEs constante.";
document.getElementById("resultadoConstante").innerText = texto;
}

else if (c == 0) {
document.getElementById("lineal").style.display = "block";
texto += "\nPasa por el origen (0, 0).";
texto += b > 0 ? "\nEs creciente." : "\nEs decreciente.";
document.getElementById("resultadoLineal").innerText = texto;
}

else {
document.getElementById("afin").style.display = "block";
texto += "\nNo pasa por el origen.";
texto += "\nCorta el eje Y en (0, " + c + ").";
texto += b > 0 ? "\nEs creciente." : "\nEs decreciente.";
document.getElementById("resultadoAfin").innerText = texto;
}

if (geo != null) {
geo.evalCommand("f(x)=" + b + "*x+" + c);
}
};
