const d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);




function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var l = 0;
  var yi, xi;
  var colorcito = "#ECECEC"
  var espacio = ancho/lineas;


  for (var l = 0; l < lineas; l = l + 1)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 500);
  }

  for (var l = 0; l < lineas; l = l + 1)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, yi, 0, 500, xf);

  }
  dibujarLinea(colorcito, 0, 0, 0, 500);
  dibujarLinea(colorcito, 0, 500, 500, 500);
  dibujarLinea(colorcito, 500, 0, 0, 0);
  dibujarLinea(colorcito, 500, 500, 500, 0);

}
