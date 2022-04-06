// https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
// adpatado

// No problema 2 existem duas possíveis interpretações,então foram criadas duas funções ,uma para cada interpretação.

// 1)PRIMEIRA POSSIBILIDADE

// Com parametro de entrada
// A função deve receber um número até 4 milhões, achar a sequência Fibonacci
// referente ao número de entrada e somar todos números pares dessa sequência.
// Essa interpretação leva a um erro uma vez que a memória do JavaScript não consegue armazenar
// a soma desses valores com os números de entrada acima de 1473 e retorna "Infinity".
// Podemos conferir isso na linha 31 comparando se retorno da função é maior que  Number.MAX_VALUE.

const fibonacciSumPair = (num) => {
  let a = 1;
  let b = 0;
  let temp;
  const result = [0];
  if (num == 0) return [];

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
    if (temp % 2 == 0) result.push(temp);
  }
  const total = result.reduce(
    (accumulator, currentItem) => accumulator + currentItem
  );
  if (total > Number.MAX_VALUE)
    return { message: `Total = ${total} Número muito grande,maior valor de entrada possível = 1473` };
  return total;
};

console.log(fibonacciSumPair(50));


/*---------------------------------------------------------------------------------------- */


// 2)SEGUNDA POSSIBILIDADE

// Sem parametro de entrada
// A função deve somar todos números dos pares da sequência Fibonacci até a soma ser igual ou menor que 4 milhões.

const QUATRO_MILHOES = 4000000;
const fibonacciSumPaiV2 = () => {
  let x = [0, 1];
  let soma = 0;
  let y;
  while (soma <= QUATRO_MILHOES) {
    y = x[x.length - 1] + x[x.length - 2];
    x.push(y);
    if (y % 2 == 0) {
      if (soma + y > QUATRO_MILHOES) break;
      soma += y;
    }
  }

  console.log("Array Fibonacci", x);
  console.log("Ultimo numero Par", y);
  console.log("Soma dos numeros pares", soma);
  console.log(`Podemos verificar somando o ultimo elemento par com o motando dos numeros pares ${y} + ${soma} = ${y+soma} \nO resultado é maior que ${QUATRO_MILHOES}`)
  console.log("----------------------------------");
  return soma;
};

//console.log(`Soma dos numeros pares abaixo de ${QUATRO_MILHOES} total = `,fibonacciSumPaiV2());
