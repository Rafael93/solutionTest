"use strict";
const units = [];
const hoursUsedPerYear = 2700;
let hoursConsumed = 0;
let unitBroken = 0;
let tubesReplaced = 0;
let costPerYear = 0;
let tubesBroken = 0;

//rand funtcion returns a number betwenn 100 and 200
const rand = () => {
  return Math.floor(Math.random() * 101) + 100;
};

//insertTubes function inserts 4 tube's lifespan into a unit
const insertTubes = (unit) => {
  for (let i = 0; i < 4; i++) {
    const numRand = rand();
    if (unit[i] || unit[i] === 0) {
      //if it isn't empty we delete the number in that index and replace it with the random number
      unit.splice(i, 1);
      unit[i] = numRand;
    } else {
      //if it is empty with just push the random number into the array
      unit.push(numRand);
    }
  }
};

//initializeUnits function fullfill the units array with 4 arrays with 4 random numbers inside
const initializeUnits = () => {
  for (let x = 0; x < 4; x++) {
    units.push([]);
    insertTubes(units[x]);
  }
  tubesReplaced += 16; //Counting the 16 tubes in the total cost
};

//consumeHours function iterates every value from each unit inside the units array
const consumeHours = () => {
  unitBroken = 0;
  units.forEach((unit) =>
    unit.forEach((tube, i) => {
      if (unit[i] > 0) {
        //if the tube lifespan value is greater than 0 then the value is decreased by 1
        unit[i] = tube - 1;
      } else if (unit[i] === 0) {
        //if it is equal to 0 the units broken variable increase by 1 meaning we have a broken tube
        unitBroken++;
        if (unitBroken >= 2) {
          //And if the counter is equal to 2 or greater it means we have to verify if we have to broken tubes in a single unit
          verifyUnit(unit);
        }
      }
    })
  );
  hoursConsumed++; //Counting the hour consumed from all the tubes
};

//VerifyUnit function checks if there are 2 o more broken tuben in the same unit
const verifyUnit = (unit) => {
  let count = 0;
  unit.forEach((tube) => {
    if (tube === 0) {
      //if the unit have a tube lifespan iqual to 0 the counter variable increase
      count++;
      if (count >= 2) {
        //Right after increase the the counter we checked if there is 2 or more tubes broken
        replaceTubes(unit); //If it is true then we proceed to replace the 4 values in the unit.
      }
    }
  });
};

//The replaceTubes function iterates the values inside the unit to replace each one with new values
const replaceTubes = (unit) => {
  insertTubes(unit);
  tubesReplaced += 4; // counting the 4 tubes replaced for the total
  tubesBroken += 2;
};

//The runSimulator function is used to create the tube units and run the algorithm
const runSimulator = () => {
  initializeUnits();
  while (hoursConsumed < hoursUsedPerYear) {
    //while our hours consumed are lesser than the hours used per year in the classroom (2700hs) we executed the consumeHour function
    consumeHours();
  }
  costPerYear = tubesReplaced * 7; //Calculating the cost per year using the tube's price

  //Print the result in the console
  console.log(`La cantidad de tubos rotos son ${tubesBroken}`);
  console.log(`El costo por año es de ${costPerYear} USD`);
};

runSimulator();
