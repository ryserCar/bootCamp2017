 var map=[];
 var shipSize=Math.floor((Math.random()*4)+1); //La idea sería 3 elementos: tamaño, posición inicial, eje... en la versión 1 lo dejamos sólo con tamaño.
 var initPosition= Math.floor(Math.random()*(10-shipSize));
 var contJugada=0;
 var playerAttack; //variable que toma el valor que ingresó el usuario al atacar
 var hundido= false;

//function mapInit() // Seteo el mapa con la posición de B=Barco
//{
	for (var i=0; i<10;i++)
	{
		if (initPosition<=i && (initPosition+shipSize)>i) //la posición i es mayor a donde el barco está y menor a donde termina
		{
			map[i]='B'; //le asigno un valor para que sea distinto a undefined
		}
				
	}
//}

//function battleTime() // Perdí la hoja dónde anoté la lógica. La idea es, si donde golpea hay barco, se cambia a hit. Si los hits
//{						   // sobrepasan el tamaño del barco, se considera hundido... alcanza para una batalla unidimensional...
	while (shipSize>0)
	{
		playerAttack=prompt("Ingrese un valor entre 0 y 9 para atacar: ");//podría restarle uno y no pedir 0
		if(!!map[playerAttack]==true)
		{
			map[playerAttack]='H';
			shipSize--;
			alert("golpeado");
			if(shipSize==0)
			{
				hundido=true; //En realidad de momento creo que no la necesito, porque controlo el estado con el tamaño del barco (sólo puede ser 0 luego de ser golpeado)
				alert('fin del juego. Tardaste '+contJugada+' movimientos'); //dudo que funcione como quiero, pero así recuerdo que quiero un msj con esto
			}
		}
		else
		{
			alert("fallaste");
		}
		contJugada++;
	}
	
//}

