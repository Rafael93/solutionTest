"use strict";
const units = [];
const hoursUsedPerYear = 2700;
let hoursConsumed = 0;
let unitsBroken = 0;
let tubesReplaced = 0;
let costPerYear = 0;

const rand = () => {
  return Math.floor(Math.random() * 101) + 100;
};

const initializeUnits = () => {
  for (let x = 0; x < 4; x++) {
    units.push([]);
    for (let z = 0; z < 4; z++) {
      const numRand = rand();
      units[x].push(numRand);
    }
  }
  tubesReplaced += 4;
  console.log(tubesReplaced);
};

const consumeHours = () => {
  units.forEach((unit) =>
    unit.forEach((tube, i) => {
      if (unit[i] > 0) {
        unit[i] = tube - 1;
        hoursConsumed++;
      } else if (unit[i] === 0) {
        unitsBroken++;
        if (unitsBroken >= 2) {
          verifieUnit(unit);
        }
      }
    })
  );
  console.log(units);
};

const replaceTubes = (unit) => {
  unit.forEach((tube, i) => {
    let numRand = rand();
    unit[i] = numRand;
  });
  tubesReplaced += 4;
  console.log(tubesReplaced);
};

const verifieUnit = (unit) => {
  let count = 0;
  unit.forEach((tube) => {
    if (tube === 0) {
      count++;
      if (count >= 2) {
        replaceTubes(unit);
      }
    }
  });
};

const runSimulator = () => {
  initializeUnits();
  while (hoursConsumed <= hoursUsedPerYear) {
    consumeHours();
  }
  costPerYear = tubesReplaced * 7;
  console.log(hoursConsumed);
  console.log(`La cantidad de tubos reemplazados son ${tubesReplaced}`);
  console.log(`El costo por año es de ${costPerYear} USD`);
};
runSimulator();
