function play()
{
    var ocean = [0,0,0,0,0,0,0,0,0,0];
    var numberOfAttempts = 0;
    createShip();
    startBattle();

    function createShip() // Creates the ship: Its Start, Length and End; randomly.
    {
        var shipStart , shipEnd , length;
        shipStart = parseInt(Math.random() * 10);
        length = parseInt(Math.random() * (10 - shipStart));
        if (length == 0)
            length = 1;
        shipEnd = shipStart + length -1;
   
        for(var i = shipStart;i<=shipEnd;i++)
        {
            if (i >= shipStart)
                ocean[i] = 1;
        }

        console.log(ocean);
        console.log(shipStart);
        console.log(length);
        console.log(shipEnd)

    
    }

    function shipIsSunk() // Checks if the Ship is Sunk already or not.
    {
        for(var i=0 ; i < 10 ; i++)
            {
                if(ocean[i] == 1)
                    return false;                
            }
        return true;
    }

    function startBattle()
    {
    while (shipIsSunk() == false)
        {
            var attempt = prompt("Choose the place you want to shoot (A Number from 1 to 10)")
            if (attempt == null)
                return;
            if (attempt > 0 && attempt <=10)
            {   
                if(ocean[attempt - 1] == 2)  
                    alert("You've already shot to that place! Try Again."); 
                else
                {   
                    numberOfAttempts ++;
                    if(ocean[attempt - 1] == 1)
                        alert("Congrats! You Hit the Ship!!");
                    else
                        alert("Sorry, you missed. Try Again.");
                    ocean[attempt - 1] = 2; // Place "2" in the position already fired.
                }
            }
            else
                window.alert("INVALID CHOICE - Try a number from 1 to 10.");
            console.log(attempt);
        }
    alert("YOU WON!! The Ship has been sunk! It took you "+ numberOfAttempts +" shots.");
    }    
}

    
