//Defino la cantidad de horas de los tubos con los que incia el año el salón de clase
const totalTubos = [
  [200, 150, 141, 170],
  [150, 180, 160, 120],
  [100, 101, 130, 150],
  [160, 102, 100, 200],
];

//Variables Globales
let menor = Infinity;
let segundoMenor = Infinity;
let cantidadDeTubosReemplazados = 0;
let horasPorAño = 2700;
let horasConsumidas = 0;
let costoPorAño = 0;

//Encontrar el numero menor y el segundo menor que esten en la misma unidad para saber cuales son los tubos que primero van a morir
const encontrarTubos = () => {
  //reseteo del valor o sino cuando haya dos tuvos muertos (0) ya no entrará en mi condicion y no guardara el nuevo
  menor = Infinity;
  segundoMenor = Infinity;
  //let unidad = 0; usé esta variable para las pruebas donde consoleaba la unidad para saber si estaba correcto los datos que arrojaba
  for (let i = 0; i < totalTubos.length; i++) {
    totalTubos[i].sort();
    //recorrer numero por numero para hallar el menor
    for (let j = 0; j < totalTubos[i].length - 2; j++) {
      if (totalTubos[i][j] < menor && totalTubos[i][j + 1] < segundoMenor) {
        menor = totalTubos[i][j];
        segundoMenor = totalTubos[i][j + 1]; //esto no me cierra aun porque si no se llega a ordenar correctamente con .sort() todo va a estar mal
        //unidad = i;
      }
    }
  }
  //console.log(`El menor es: ${menor} y el segundo menor es: ${segundoMenor} y estan en la unidad ${unidad + 1}`); Esto usaba en las simulaciones para saber si estaba encontrando correctamente los numeros menores
};

//Consumir las horas menores y si la hora menor es 0 se usará el segundo menor
const consumirHoras = (horaMasBaja, segundaHoraMasBaja) => {
  for (let i = 0; i < totalTubos.length; i++) {
    //recorro numero por numero
    for (let j = 0; j < totalTubos[i].length; j++) {
      //Y pregunto si el numero menos la hora a consumir es mayor o igual a 0 porque no tiene sentido numeros negativos y si la hora es diferente que 0
      if (totalTubos[i][j] - horaMasBaja >= 0 && horaMasBaja !== 0) {
        //si pasa quere decir que el numero mas bajo no es 0 y entonces resto por el numero menor
        totalTubos[i][j] = totalTubos[i][j] - horaMasBaja;
        //cuando este en la ultima vuelta recien voy a guardar la hora consumida, es lo que se me ocurrio creo que se puede buscar una alternativa mejor
        if (i === totalTubos.length - 1 && j === totalTubos[i].length - 1) {
          horasConsumidas += horaMasBaja;
        }
        //En el caso que el numero mas bajo sea 0 vamos usar el segundo menor que sería el segundo tubo a quemarse para cambiar toda la unidad
      } else if (
        totalTubos[i][j] - segundaHoraMasBaja >= 0 &&
        segundaHoraMasBaja !== 0
      ) {
        totalTubos[i][j] = totalTubos[i][j] - segundaHoraMasBaja;
        if (i === totalTubos.length - 1 && j === totalTubos[i].length - 1) {
          horasConsumidas += segundaHoraMasBaja;
        }
      }
      //Cuando hay dos 0 dentro de la unidad voy a reemplazar todos los valores de la fila con la funcion rand()
      else if (totalTubos[i][j] === 0 && totalTubos[i][j + 1] === 0) {
        totalTubos[i] = totalTubos[i].map(() => rand());
        //aqui guardo la canitdad de tubos para el calculo final
        cantidadDeTubosReemplazados += 4;
      }
    }
  }
  //console.log(`horas consumidas: ${horasConsumidas}`);
};

//funcion que genera la horas de vida de los tubos
const rand = () => {
  return Math.floor(Math.random() * 101) + 100;
};

//Realiza la simulacion hasta llegar a las 2700, pasa de 2700 aún tengo que ver que hacer para que sea 2700 clavado
while (horasConsumidas <= horasPorAño) {
  encontrarTubos();
  consumirHoras(menor, segundoMenor);
}

console.log(`Cantidad de Tubos reemplazados: ${cantidadDeTubosReemplazados}`);
costoPorAño = cantidadDeTubosReemplazados * 7;
console.log(`Costo por año: ${costoPorAño} usd`);
