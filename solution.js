const totalFocos = [
  [200, 150, 141, 170], //561
  [150, 180, 160, 120], //610
  [100, 101, 130, 150], //491
  [160, 102, 100, 200], //632
];

const encontrarMenores = () => {
  let indicesMenor = [];
  for (let i = 0; i < totalFocos.length; i++) {
    totalFocos[i].sort();
  }

  console.log(totalFocos);
};

encontrarMenores();

/* for (let j = 0; j < totalFocos[i].length; j++) {
	if (totalFocos[i][j] < menor) {
		menor = totalFocos[i][j];
		indicesMenor.push([i, j]);
	} else if (totalFocos[i][j] === menor) {
		indicesMenor.push([i, j]); // Agregar los índices de los valores iguales al menor
	}
} */
