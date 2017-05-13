//Contiene las posiciones q ocupa el barco en el mapa
var bote =[];

//Crea mapa y setea la posicion del barco en el mapa
(function iniciar(){
  mapa();
  posicionarBarco();
})();

//crea un barco de longitud 4 en algun lugar del mapa, puede ser horizontal o vertical
function posicionarBarco (){
  var largoBarco=4;
  var  horPos=Math.floor((Math.random() * 10));
  var  verPos=Math.floor((Math.random() * 10));
  var pos=Math.floor((Math.random() * 10));
  var hor=false;
  if(pos>4){
    hor=true;
  }
  if (hor) {
    if ((verPos+largoBarco)>9) {
      for (var i = 0; i < largoBarco; i++) {
        bote[i]=((horPos*10)+verPos);
        verPos--;
      }
    }else {
      for (var i = 0; i < largoBarco; i++) {
        bote[i]=((horPos*10)+verPos);
        verPos++;
      }
    }
  }else {
    if(horPos+largoBarco>9){
      for (var i = 0; i < largoBarco; i++) {
        bote[i]=(horPos*10)+verPos;
        horPos--;
      }
    }else {
      for (var i = 0; i < largoBarco; i++) {
        bote[i]=(horPos*10)+verPos;
        horPos++;
      }
    }
  }
  console.log(bote);
  return bote;
}

//crea la grilla con los botones del mapa
function mapa(){
  for (var i = 0; i < 100; i++) {
    document.getElementById('contenedor').innerHTML +=
    "<input type='button' class='button' value='"+i+"' id='"+i+"' name='"+i
    +"'  onClick='disparo(this.id);'>";
  }
    return true;
}

//toma el id del boton clickeado y compara contra el vecrtor bote para establecer
//si acerto o fallo, tambien lleva el contador para saber cuando termina el juego
function disparo(identificador){
  var id= identificador;
  var boat= bote;
  var miss=0, shot=0;
  for (var i = 0; i < boat.length ; i++) {
    if (id==boat[i]) {
      var acerto = document.getElementById(id);
      acerto.style.backgroundColor = "green";
      shot = contadorAciertos();
      document.getElementById('aciertos').innerHTML=("ACIERTOS: "+shot);
      break;
    } else {
      var fallo = document.getElementById(id);
      fallo.style.backgroundColor = "red";
    }
  }
  miss = contadorIntentos();
  document.getElementById(id).disabled=true;
  document.getElementById('intentos').innerHTML=("INTENTOS: "+miss);
  if (boat.length==(shot)) {
    terminarJuego(miss);
  }
}

//desabilita el mapa y  muestra un mensaje al hundir el barco
function terminarJuego(disparos){
  desabilitarMapa();
  alert("Juego Finalizado\nUtilizaste "+disparos+" disparos para hundir el barco");
}

function desabilitarMapa(){
  for (var i = 0; i < 100; i++) {
    document.getElementById(i).disabled=true;
  }
  return true;
}

var contadorIntentos = (function () {
  var counter = 0;
  return function () {return counter += 1;}
})();

var contadorAciertos = (function () {
  var counter = 0;
  return function () {return counter += 1;}
})();
