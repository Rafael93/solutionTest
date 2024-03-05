const totalFocos = [
  [100, 150, 141, 170], //561
  [150, 180, 160, 120], //610
  [100, 101, 130, 150], //491
  [160, 102, 100, 200], //632
];

const encontrarMenores = () => {
  let menor = Infinity;
  let indicesMenor = [];
  for (let i = 0; i < totalFocos.length; i++) {
    for (let j = 0; j < totalFocos[i].length; j++) {
      if (totalFocos[i][j] < menor) {
        menor = totalFocos[i][j];
        indicesMenor.push([i, j]);
      } else if (totalFocos[i][j] === menor) {
        indicesMenor.push([i, j]); // Agregar los índices de los valores iguales al menor
      }
    }
  }
  console.log(
    `El menor es ${menor} y sus índices son ${JSON.stringify(indicesMenor)}`
  );
};

encontrarMenores();
