// variable initialization
let date = ('Monday 2019-03-18');
let time = ('10:05:34 AM');
let astronautCount = parseFloat(7);
let astronautStatus = ('ready');
let averageAstronautMassKg = parseFloat(80.7);
let crewMassKg = parseFloat(astronautCount * averageAstronautMassKg);
let fuelMassKg = parseFloat(760000);
let shuttleMassKg = parseFloat(74842.31);  // shuttle mass in Kg
let totalMassKg = parseFloat(crewMassKg + fuelMassKg + shuttleMassKg); // total mass in Kg
let maximumMassLimit = parseFloat(850000); // maximum mass limit in Kg
let fuelTempCelsius = Number(-225);
let maximumFuelTemp = Number(-150);
let fuelLevel = ('100%');
let weatherStatus = ('clear');
let preparedForLiftOff = true; // boolean indicating 'go' or 'no-go'


// conditional logic to verify astronautCount for shuttle does not exceed 7
if (astronautCount<= 7); {
}

/* 
Conditional (ternary operator)
(astronautCount<= 7) ? <expressionIfTrue> : <expressionIfFalse> ;
*/

// conditional logic to verify astronautStatus is 'ready'
if (astronautStatus === 'ready');{
}

/* 
Conditional (ternary operator)
(astronautStatus === 'ready') ? <expressionIfTrue> : <expressionIfFalse> ;
*/

// conditional logic to verify fuel temperature is in the required range i.e. between -150 and -300
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150); {
}

/* 
Conditional (ternary operator)
(fuelTempCelsius >= -300 && fuelTempCelsius <= -150) ? <expressionIfTrue> : <expressionIfFalse> ;
*/

// conditional logic to verify fuelLevel is at 100%
if (fuelLevel === '100%');{
}

/* 
Conditional (ternary operator)
(fuelLevel === '100%') ? <expressionIfTrue> : <expressionIfFalse> ;
*/

// conditional logic to verify weatherStatus is 'clear'
if (weatherStatus === 'clear');{
}

/* 
Conditional (ternary operator)
(weatherStatus === 'clear') ? <expressionIfTrue> : <expressionIfFalse> ;
*/

// Confirm shuttle launch may safely proceed per above conditions

if (astronautCount <= 7) {  // Verify astronautCount does not exceed 7
    if (astronautStatus === 'ready') {  // verify astronautStatus is 'ready'
        console.log(`date: ${date}`);
        console.log(`time: ${time}`);
        console.log(`astronaut Count: ${astronautCount}`);
        console.log(`Crew Mass: ${crewMassKg} kg`);
        if (fuelLevel === '100%') {  // Verify fuelLevel is at 100%
            console.log(`Fuel Mass: ${fuelMassKg} kg`);
            console.log(`Shuttle Mass: ${shuttleMassKg} kg`);
            console.log(`Total Mass: ${totalMassKg}`);
            if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {  // Verify fuel temperature in the required range
                // use escape sequence \u  symbol/character's unicode code point in hexadecimal degree celsius
                console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`);
                if (weatherStatus === 'clear') {  // Verify weatherStatus is 'clear'
                    console.log(`Weather Status: ${weatherStatus}`);
                    console.log(`\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`);
                    preparedForLiftOff = true;
                }
            }
        }
    }
} else {
    // note date and time of aborted mission / clock stop
    console.log(`date: ${date}`);
    console.log(`time: ${time}`);
    console.log('Terminate count down.  \nConditions for safe mission have not been achieved!');
    preparedForLiftOff = false;
}



// Verify shuttle may proceed with launch 
if (astronautCount <= 7) {  // Verify astronautCount does not exceed 7
    if (astronautStatus === 'ready') {  // Verify astronautStatus is 'ready'
        if (fuelLevel === '100%') {  // Verify fuelLevel is at 100%
            if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {  // Verify fuel temperature in the required range
                if (weatherStatus === 'clear') {  // Verify weatherStatus is 'clear'
                    preparedForLiftOff = true;
                }
            }
        }
    }
} else {
    // note date and time of aborted mission / clock stop
    preparedForLiftOff = false;
}

if (preparedForLiftOff === true) {
    console.log('----------------------------------------------------------------');
    console.log("All systems green. Initiating shuttle launch sequence.");
    console.log('----------------------------------------------------------------');
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Crew Count: ${astronautCount}`);
    console.log(`Crew Mass: ${crewMassKg}`);
    console.log(`Fuel Mass: ${fuelMassKg}`);
    console.log(`Shuttle Mass: ${shuttleMassKg}`);
    console.log(`Total Mass: ${totalMassKg}`);
    console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`);
    console.log(`Weather Status: ${weatherStatus}`);
    console.log(`\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`);
} else {
    console.log('----------------------------------------------------------------');
    console.log("Systems check failure.  Condition Red.");
    console.log('----------------------------------------------------------------');
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log('Terminate count down.  \nConditions for safe mission have not been achieved!');
}


// Verify shuttle may proceed with launch 
if (astronautCount <= 7) {  // Verify astronautCount does not exceed 7
    if (astronautStatus === 'ready') {  // Verify astronautStatus is 'ready'
        if (fuelLevel === '100%') {  // Verify fuelLevel is at 100%
            if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {  // Verify fuel temperature in the required range
                if (weatherStatus === 'clear') {  // Verify weatherStatus is 'clear'
                    preparedForLiftOff = true;
                }
            }
        }
    }
} else {
    // note date and time of aborted mission / clock stop
    preparedForLiftOff = false;
}

// Ternary operator used
preparedForLiftOff = (
    astronautCount <= 7 && 
    astronautStatus === 'ready' &&
    fuelLevel === '100%' &&
    fuelTempCelsius >= -300 &&
    fuelTempCelsius <= -150 &&
    weatherStatus === 'clear') 
    ? true : false;

(preparedForLiftOff === true) ? 
(
console.log('----------------------------------------------------------------'),
console.log("All systems green. Initiating shuttle launch sequence."),
console.log('----------------------------------------------------------------'),
console.log(`Date: ${date}`),
console.log(`Time: ${time}`),
console.log(`Crew Count: ${astronautCount}`),
console.log(`Crew Mass: ${crewMassKg}`),
console.log(`Fuel Mass: ${fuelMassKg}`),
console.log(`Shuttle Mass: ${shuttleMassKg}`),
console.log(`Total Mass: ${totalMassKg}`),
console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`),
console.log(`Weather Status: ${weatherStatus}`),
console.log(`\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`)
)
: (console.log('----------------------------------------------------------------'),
console.log("Systems check failure.  Condition Red."),
console.log('----------------------------------------------------------------'),
console.log(`Date: ${date}`),
console.log(`Time: ${time}`),
console.log('Terminate count down.  \nConditions for safe mission have not been achieved!')
)




/*
JavaScript template literals, add 'unicode characters' like degree symbol-
use escape sequence \u  symbol/character's unicode code point in hexadecimal.
https://stackoverflow.com/questions/10104634/how-to-convert-00b0-degree-sign-unicode-character
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
https://stackoverflow.com/questions/66958602/how-to-write-special-characters-in-template-literals
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape

*/


/*
if (astronautCount <= 7) {  // verify astronautCount does not exceed 7
    if (astronautStatus === 'ready') {  // verify astronautStatus is 'ready'
        console.log(`date: ${date}`);
        console.log(`time: ${time}`);
        console.log(`astronaut Count: ${astronautCount}`);
        console.log(`Crew Mass: ${crewMassKg} kg`);
    }
    if (fuelLevel === '100%') {  // verify fuelLevel is at 100%
        console.log(`Fuel Mass: ${fuelMassKg} kg`);
        console.log(`Shuttle Mass: ${shuttleMassKg} kg`);
        console.log(`Total Mass: ${totalMassKg}`);
        if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {  // verify fuel temperature in the required range
            console.log(`Fuel Temperature: ${fuelTempCelsius} \u00B0C`);  // use escape sequence \u  symbol/character's unicode code point in hexadecimal
        }
        if (weatherStatus === 'clear') {  // verify weatherStatus is 'clear'
            console.log(`Weather Status: ${weatherStatus}`);
            console.log(`\nEveryone here at Mission Control sends the ${astronautCount} of you best wishes for a safe and successful mission`);
        }
    }
} else {
    // note date and time of aborted mission / clock stop
    console.log(`date: ${date}`);
    console.log(`time: ${time}`);
    console.log('Terminate count down.  \nConditions for safe mission have not been achieved!');
}
 */