'use strict';

const message = document.getElementById("message"),
		button = document.getElementsByClassName("button-table"),
		statistics = document.getElementById("statistics");

var shots = 0,
	sumBoatSize = 0,
	sunken = false,
	destroyed = 0,
	board = new Array(8),
	tagId = 0;



//creo mi array
(() => {
	for (var i = 0; i < board.length; i++) { 

		//solo un barco por fila
		let boatSize = Math.floor((Math.random() * 6) + 2),
			initialPosition = Math.floor((Math.random() * boatSize) + 0);

		board[i] = new Array(8);
		sumBoatSize = sumBoatSize + boatSize;
		//creo mi tablero
		for (var j = 0; j < board[i].length; j++){ 
			//posiciono el barco en un lugar aleatorio
	      	if(j >= initialPosition && j < initialPosition + boatSize )
				board[i][j] = 'piece';
			else
				board[i][j] = 'blank'; 
	   	} 
	}

	statistics.innerHTML = "Cantidad de piezas que se deben destruir n°:" + sumBoatSize.toString() + "<br>" + "Cantidad de barcos: 8";
})();

//capturo el evento de clic de cualquier boton
function elemento(e){
	if (e.srcElement)
		tagId = e.srcElement.id;
	else if (e.target)
		tagId = e.target.id;


	console.log("El elemento selecionado ha sido " + tagId);
}

function updateEventButton(event){
	let i = button.length;

	while(i--) {
		if (event === "")
			button.disable = true;

        button[i].onclick = event;
    }
}

function clickShots(){
	let position = [],
		row = 0,
		cell = 0;

	position = tagId.split(" ");
	row = position[0];
	cell = position[1];
	shots++;

	switch(board[row][cell]) {
		case 'blank':
			message.innerHTML = "Le erraste rufian, intento n°:" + shots.toString();
			message.style.color="red"
			board[row][cell] = 'shoot';
			break;
		case 'piece':
			destroyed++;
			message.innerHTML = "Le diste a una pieza de mi barco rescatate gato, intento n°:" + shots.toString() + " Piezas destruidas: " + destroyed;
			message.style.color="green"
			board[row][cell] = 'destroyed';
			break;
		case 'shoot':
			message.innerHTML = "Ya disparaste en este sector y te dije que no le pegaste no lo vuelvas a intentar";
			message.style.color="red"
			break;
		case 'destroyed':
			message.innerHTML = "Ya disparaste en este sector y acertaste que sigas disparando aqui no significa que vayas a ganar";
			message.style.color="red"
			break;
	}

	if(destroyed === sumBoatSize){
		message.innerHTML = "FELICITACIONES, haz ganado, intento n°:" + shots.toString() + " Piezas destruidas: " + destroyed;
		message.style.color="green"
		updateEventButton("");
	}

	console.log(board);
}

console.log(board);

window.onload = function() {
	//asigno el evento clic a todos los botones
	updateEventButton(clickShots);
}



