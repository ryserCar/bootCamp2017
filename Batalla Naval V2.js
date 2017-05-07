var intentos = 0;
var aciertos = 0;
var inputHTML = 0; //Viene del input text del HTML
//Representa el mapa del juego
var tablero = [false,false,false,false,false,false,false,false,false,false];
var barco;

//Constructor de objeto ship. No recibe ningun parametro sino que de manera aleatoria asigna un tamaño y posicion inicial al barco
function ship()
{
	this.shipSize = Math.floor((Math.random() * 5) + 1);
	
	switch(this.shipSize)
	{
		case 1:
			this.inicio = Math.floor((Math.random() * 10) + 1);
			break;
		case 2:
			this.inicio = Math.floor((Math.random() * 9) + 1);
			break;
		case 3:
			this.inicio = Math.floor((Math.random() * 8) + 1);
			break;
		case 4:
			this.inicio = Math.floor((Math.random() * 7) + 1);
			break;
		default:
			this.inicio = Math.floor((Math.random() * 6) + 1);
	}
}

function empezarJuego()
{
	document.getElementById("empezar").style.display='none';
	document.getElementById("reglas").style.display='none';
	document.getElementById("divBatalla").style.display='block';
	barco = new ship();
	alert("Size: " + barco.shipSize);
	alert("Inicio: " + barco.inicio);
}

//Metodo para validar la entrada de dato
function validarCoordenada(input)
{
	var msg = "";
	var ok = true; 
	if (input.length == 0)
	{
		msg = "El campo coordenada no debe esta vacio";
		ok = false;
	}
	else
	{
		if (isNaN(input) || input < 1 || input > 10) //La funcion NaN(var) valida si es un numero el valor pasado por parametro
		{
			msg = "El campo coordenada debe ser un numero entre 1-10";
			ok = false;
		}
	}

	if(!ok)
	{
		alert(msg);
	}
	return ok;
}

/*
	Esta funcion es la mas importante. Usa las funciones y variables declaradas arriba y permite al usuario jugar
	La idea es simple: si los datos son correctos entonces hay que fijarse si es una coordenada en la que el barco esta definido.
	El barco posee como atributos un tamaño(shipSize) y una posicion inicial(inicio), a partir de estos 2 datos puedo saber cuales son las coordenadas
	del barco: el intervalo [inicio,inicio+shipSize). 
	El tablero me permite saber que partes del barco en que coordeandas fueron derribadas.
*/

function disparar()
{
	if(aciertos < barco.shipSize)
	{
		inputHTML = document.getElementById("inputCoordenada").value;

		if(validarCoordenada(inputHTML))
		{
			var msg = "Has fallado un disparo en la coordenada (" + inputHTML + ")";
			var acertado = false;
			
			var comienzo = barco.inicio;
			var finalBarco = comienzo + barco.shipSize;

			if(inputHTML >= comienzo && inputHTML < finalBarco)
			{
				//Le resto 1 por que el dato ingresado esta basado en numeros del 1-10 y el Array esta basado como primer indice el 0
				var estado = tablero[inputHTML-1];
				if(!estado)
				{
					tablero[inputHTML-1] = true;
					acertado = true;
					msg = "Has acertado un disparo en la coordenada (" + inputHTML + ")";
				}
				else
				{
					msg = "Ya has derribado esta parte del barco en la coordeanada (" + inputHTML + ")";
					acertado = false;
				}
			}
			else
			{
				acertado = false;
			}

			if(acertado)
			{
				intentos++;
				aciertos++;
				document.getElementById("intentos").innerHTML = intentos;
				document.getElementById("aciertos").innerHTML = aciertos;
				alert(msg);
			}
			else
			{
				intentos++;
				document.getElementById("intentos").innerHTML = intentos;
				alert(msg);
			}
			document.getElementById("inputCoordenada").value = "";
		}

		if(aciertos == barco.shipSize)
		{
			alert("Enhorabuena has derribado el barco!");
			return location.reload(true);
		}
	}
}

	
function mostrarCoordenadas()
{
	var coord = "";
	for (var i = barco.inicio-1; i < ((barco.inicio-1) + barco.shipSize); i++) 
	{
		//Dado que el Array es un indice basado en 0 le debo sumar +1 a i para que tenga mas sentido para el usuario la informacion mostrada
		coord += "\n \t(" + (i+1) + ")";
	}
	alert("Tamaño del barco: " + barco.shipSize + "\nCoordenadas del barco:" + coord);
}