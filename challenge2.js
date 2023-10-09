const prompt = require('prompt-sync')();
function checkSpeed(speed){
    // enter vehicle speed
    let speed = prompt("Enter Speed: ");
    // below or equal to 70 = okay (safe)
    if (speed <= 70) {
        console.log("Okay")
    }else if (speed > 70){ //for every 5 surpassed = 1 demerit point
        console.log( `Total Demerit Points: ${(speed-70)/5}` )
    }else{
        console.log("Error! Try Entering Speed Again")
    }
}

checkSpeed()
