//variables
var shoots=0;
var Sea_flat=[0,0,0,0,0,0,0,0,0,0,0];
var Ship_flat=[0,0,0,0,0,0,0,0,0,0,0];
var size;
var aux_size;

//Ship size
function Set_ship_size(){
    size=Math.round((Math.random())*10);
    while(size>6||size==0){
    size=Math.round((Math.random())*10);    
    }
    aux_size=size-1;
    console.log("the ship size is:"+size);
}
//Ship position
function Set_ship_position(){
    var position;
    var aux_position;
    var i;
    position=Math.round((Math.random())*10);
    while(size>(10-position)){
    position=Math.round((Math.random())*10);
    }
    aux_position=position;
    for(i=1;i<=size;i++){
        Ship_flat[aux_position]=1;
        aux_position++;
    }
    console.log("the position of the ship is:"+position);
    console.log("ship_flat:"+Ship_flat);
}

//variables
Set_ship_size();
Set_ship_position();
function Start_game(){
var shoot_position;

//first shot entry    
function Enter_shoot(){    
    console.log("the game is running");
    shoot_position=prompt("Welcome to NAVALWARS: Enter the shooting coordinates (0-10)"+"shoots="+shoots);    
    //shoot_position verification:
    while(shoot_position>10||shoot_position<0||shoot_position==''){
    shoot_position=prompt("the shooting coordinates is not correct, please enter the available shooting position (0-10)");
       }
    while(Sea_flat[shoot_position]==1){
      shoot_position=prompt("the shooting coordinates has been used, please enter the available shooting position (0-10)");
      }    
    console.log("shoot_position="+shoot_position);
    console.log("Sea_flat="+Sea_flat);       
}

//check shoot    
function Check_shoot(){   
while(shoot_position>10||shoot_position<0||shoot_position==''){
    shoot_position=prompt("the shooting coordinates is not correct, please enter the available shooting position (0-10)");
       }
while(Sea_flat[shoot_position]==1){
      shoot_position=prompt("the shooting coordinates has been used, please enter the available shooting position (0-10)");
      }    
    Sea_flat[shoot_position]=1;
    
if(Ship_flat[shoot_position]==1){
    shoots++;
    shoot_position=prompt("HIT! Plase enter the new shooting cordinates (0-10)"+"shoots="+shoots);
    aux_size--;
    console.log("size="+aux_size);
}else{
    shoots++;
    shoot_position=prompt("FAIL! Plase enter the new shooting cordinates (0-10)"+"shoots="+shoots);
}
if(aux_size==0){
    shoots++;
    alert("YOU WIN!! Shots fired="+shoots);
}    
}

    
    
    //first shot
    Enter_shoot();
    //circle of game
    while(aux_size!=0){
        
        Check_shoot();    
    }
    
    
    };




    