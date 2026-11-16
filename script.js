function generar() {
  var b = Math.round(Math.random() * 20) - 10;
  var c = Math.round(Math.random() * 20) - 10;
  var inclinacion = "constante";

  if (c == 0) {
    c = 1;
  }

  if (b > 0) {
    inclinacion = "creciente";
  } else if (b < 0) {
    inclinacion = "decreciente";
  }

  document.getElementById("valorB").innerHTML = b;
  document.getElementById("valorC").innerHTML = c;

  document.getElementById("funcionLineal").innerHTML = "f(x) = " + b + "x";
  document.getElementById("pendienteLineal").innerHTML = "Es " + inclinacion + ".";

  var signo = " + " + c;
  if (c < 0) {
    signo = " - " + (c * -1);
  }

  document.getElementById("funcionAfin").innerHTML = "f(x) = " + b + "x" + signo;
  document.getElementById("corteY").innerHTML = "Corta el eje Y en (0, " + c + ").";
  document.getElementById("inclinacionAfin").innerHTML = "Es " + inclinacion + ".";
}
generar();
