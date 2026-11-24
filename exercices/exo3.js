// Exercice 3

function fizzBuzz(n) {
  const tableau = [];

  for (let i = 1; i <= n; i++) {
    tableau.push(i);
    if (i % 15 === 0) {
      tableau.pop(i);
      tableau.push("FizzBuzz");
    } else if (i % 3 === 0) {
      tableau.pop(i);
      tableau.push("Fizz");
    } else if (i % 5 === 0) {
      tableau.pop(i);
      tableau.push("Buzz");
    }
  }

  return tableau;
}

console.log(fizzBuzz(100));

console.log(fizzBuzz2(100));

function fizzBuzz2(n) {
  const tableau = [];

  let i = 0;
  while (i <= n) {
    i++;
    tableau.push(i);
    if (i % 15 === 0) {
      tableau.pop(i);
      tableau.push("FizzBuzz");
    } else if (i % 3 === 0) {
      tableau.pop(i);
      tableau.push("Fizz");
    } else if (i % 5 === 0) {
      tableau.pop(i);
      tableau.push("Buzz");
    }
  }

  return tableau;
}

console.log(fizzBuzz2(100));

// 1. Il récupère le reste de la division de i par le nombre choisi. Ici il récupère le reste de la division de i par 15, si ça fait 0 alors la fonction enlève ce i dans le tableau pour le mettre FizzBuzz.
// Même chose avec 3 et 5. La raison est que lorsqu'on divise un nombre par un de ses multiples alors le reste de cette division est égale à 0.

// 2. Puisqu'un multiple de 15 est aussi un multiple de 3, si je teste "multiple de 3" avant "multiple de 15", lorsque la fonction tombe sur un multiple de 15 elle va s'arrêter au cas du multiple de 3 au lieu de tester le multiple de 15.
// Donc j'aurai Buzz dans le tableau au lieu de FizzBuzz.
