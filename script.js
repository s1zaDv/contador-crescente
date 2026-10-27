let num = parseInt(prompt(`Digite seu número:`));
let contador = 0;

while (contador <= num) {
  if (contador != num) {
    alert(`${contador}...`);
  } else {
    alert(`${contador}`);
  }

  contador++;
}

alert(`Contagem Finalizada!`);
