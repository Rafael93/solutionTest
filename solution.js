const totalFocos = [
  [200, 150, 141, 170], //561
  [150, 180, 160, 120], //610
  [100, 101, 130, 150], //491
  [160, 102, 100, 200], //632
];

let menor = Infinity;
let segundoMenor = Infinity;
let cantidadFocosReemplazados = 0;
let horasPorAño = 2700;
const encontrarMenores = () => {
  for (let i = 0; i < totalFocos.length; i++) {
    totalFocos[i].sort();
    for (let j = 0; j < totalFocos[i].length - 2; j++) {
      if (totalFocos[i][j] < menor && totalFocos[i][j + 1] < segundoMenor) {
        menor = totalFocos[i][j];
        segundoMenor = totalFocos[i][j + 1];
        console.log(
          `El menor es: ${menor} y el segundo menor es: ${segundoMenor} y estan en la unidad ${
            i + 1
          }`
        );
      }
    }
  }
};

const consumirHoras = (horaMasBaja, segundaHoraMasBaja) => {
  for (let i = 0; i < totalFocos.length; i++) {
    for (let j = 0; j < totalFocos[i].length; j++) {
      if (totalFocos[i][j] - horaMasBaja >= 0 && horaMasBaja !== 0) {
        totalFocos[i][j] = totalFocos[i][j] - horaMasBaja;
      } else if (
        totalFocos[i][j] - segundaHoraMasBaja >= 0 &&
        segundaHoraMasBaja !== 0
      ) {
        totalFocos[i][j] = totalFocos[i][j] - segundaHoraMasBaja;
      } else {
        return;
      }
    }
  }
  console.log(totalFocos);
};

const rand = () => {
  return Math.floor(Math.random() * 101) + 100;
};

const reemplazarTubos = () => {
  let contador = 0;
  for (let i = 0; i < totalFocos.length; i++) {
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
};

encontrarMenores();
consumirHoras(menor, segundoMenor);
