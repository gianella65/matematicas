var coeficienteAfin = 0;
var coeficienteLineal = 0;
var inclinacionLineal = "constante";

function generar() {
  coeficienteLineal = Math.floor(Math.random() * 21) - 10;
  coeficienteAfin = Math.floor(Math.random() * 21) - 10;
  inclinacionLineal = "constante";

  if (coeficienteLineal > 0) {
    inclinacionLineal = "creciente";
  } else if (coeficienteLineal < 0) {
    inclinacionLineal = "decreciente";
  }

  document.getElementById("valorB").textContent = coeficienteLineal;
  document.getElementById("funcionLineal").textContent = "f(x) = " + coeficienteLineal + "x";
  document.getElementById("pendienteLineal").textContent = "Es " + inclinacionLineal + ".";

  document.getElementById("cajaLineal").hidden = false;
  document.getElementById("cajaAfin").hidden = true;
  document.getElementById("afinNoNecesaria").hidden = coeficienteAfin !== 0;
  document.getElementById("solicitarAfin").hidden = coeficienteAfin === 0;
}

function mostrarAfin() {
  var c = coeficienteAfin;
  var signo = " + " + c;
  if (c < 0) {
    signo = " - " + (c * -1);
  }

  document.getElementById("valorC").textContent = c;
  document.getElementById("funcionAfin").textContent = "f(x) = " + coeficienteLineal + "x" + signo;
  document.getElementById("corteY").textContent = "Corta el eje Y en (0, " + c + ").";
  document.getElementById("inclinacionAfin").textContent = "Es " + inclinacionLineal + ".";
  document.getElementById("cajaAfin").hidden = false;
}

document.getElementById("generar").addEventListener("click", generar);
document.getElementById("solicitarAfin").addEventListener("click", mostrarAfin);
