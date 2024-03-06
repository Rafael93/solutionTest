const totalFocos = [
  [200, 150, 141, 170], //561
  [150, 180, 160, 120], //610
  [100, 101, 130, 150], //491
  [160, 102, 100, 200], //632
];
//Variables Globales
let menor = Infinity;
let segundoMenor = Infinity;
let cantidadFocosReemplazados = 0;
let horasPorAño = 2700;

//Encontrar el numero menor y el segundo menor que esten en la misma unidad
const encontrarMenores = () => {
  menor = Infinity;
  segundoMenor = Infinity;
  let unidad = 0;
  for (let i = 0; i < totalFocos.length; i++) {
    totalFocos[i].sort();
    for (let j = 0; j < totalFocos[i].length - 2; j++) {
      if (totalFocos[i][j] < menor && totalFocos[i][j + 1] < segundoMenor) {
        menor = totalFocos[i][j];
        segundoMenor = totalFocos[i][j + 1];
        unidad = i;
      }
    }
  }
  console.log(
    `El menor es: ${menor} y el segundo menor es: ${segundoMenor} y estan en la unidad ${
      unidad + 1
    }`
  );
};

//Consumir las horas menores y si la hora menor es 0 se usará el segundo menor
let horasConsumidas = 0;
const consumirHoras = (horaMasBaja, segundaHoraMasBaja) => {
  for (let i = 0; i < totalFocos.length; i++) {
    //recorro numero por numero
    for (let j = 0; j < totalFocos[i].length; j++) {
      //Y pregunto si el numero - la hora a consumir es mayor o igual a 0 porque no tiene sentido numeros negativos y si la hora es diferente que 0
      if (totalFocos[i][j] - horaMasBaja >= 0 && horaMasBaja !== 0) {
        //si pasa quere decir que el numero mas bajo no es 0 y entonces resto por el numero menor
        totalFocos[i][j] = totalFocos[i][j] - horaMasBaja;
        if (i === totalFocos.length - 1 && j === totalFocos[i].length - 1) {
          horasConsumidas += horaMasBaja;
        }
        //En el caso que el numero mas bajo sea 0 vamos usar el segundo menor que sería el segundo tubo a quemarse para cambiar toda la unidad
      } else if (
        totalFocos[i][j] - segundaHoraMasBaja >= 0 &&
        segundaHoraMasBaja !== 0
      ) {
        totalFocos[i][j] = totalFocos[i][j] - segundaHoraMasBaja;
        if (i === totalFocos.length - 1 && j === totalFocos[i].length - 1) {
          horasConsumidas += segundaHoraMasBaja;
        }
      } else {
        console.log(`acabo de entrar en reemplazar tubos`);
        reemplazarTubos();
      }
    }
  }
  console.log(`horas consumidas: ${horasConsumidas}`);
  console.log(totalFocos);
};

//funcion que genera la hora de vida de los tubos
const rand = () => {
  return Math.floor(Math.random() * 101) + 100;
};

//Reemplazar tubos busca 2 tubos muertos con horas de vida 0 en la misma unidad para cambiarlos por 4 nuevos
const reemplazarTubos = () => {
  let contador = 0;
  /* for (let i = 0; i < totalFocos.length; i++) {
    totalFocos[i].sort();
    //evaluar fila
    for (let j = 0; j < totalFocos[i].length; j++) {
      if (totalFocos[i][j] === 0) {
        contador++;
      }
      if (contador === 2) {
        //detener el recorrido
        j = totalFocos[i].length;
        totalFocos[i] = totalFocos[i].map(() => rand());
        cantidadFocosReemplazados += 4;
      }
    }
    //termina la fila
    contador = 0;
  }
  console.log(totalFocos); */
};

console.log(totalFocos);
encontrarMenores();
consumirHoras(menor, segundoMenor);
encontrarMenores();
consumirHoras(menor, segundoMenor);
