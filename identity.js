//const ne varie jamais
//let varie
// const prenom = "Xavier";
// let age = 9;

// const ville = "Creusot";
// let plurals = "s";
// if (age == 0) {
//   plurals = "";
// }
// console.log(`bonjour je m'appelle ${prenom} j'ai ${age}an${plurals} et j'habite au ${ville}`);

// Exercice 1

// function presenter(prenom, age, ville) {
//   return `Je m'appelle ${prenom}, j'ai ${age}, j'habite à ${ville} et je suis né(e) vers ${new Date(age).getFullYear}`;
// }

// console.log(presenter("Xavier", 32, "Paris"));

const dateNaissance = new Date("November 13, 94");

const personne1 = {
  prenom: "Xavier",
  age: 32,
  ville: "Paris",
  naissance: dateNaissance,
};

function presenter(personne) {
  return `Je m'appelle ${personne.prenom}, j'ai ${personne.age}, j'habite à ${personne.ville} et je suis né(e) vers ${personne1.naissance.getFullYear()}`;
}

console.log(presenter(personne1));
console.log(typeof presenter);

// Questions :

// 1. J'aurais dit vers 2001 parce que j'aurais dû réussir à utiliser getFullYear directement depuis l'age donc le pc ne sait pas si j'ai eu 32 ans mais après le 20/11/26 donc que je vais bientôt avoir 33 ou si j'ai eu 32 cette année, donc il va surement prendre l'année la + probable (94) mais ça peut être faux (93).

// 2. Const tu ne peux pas modifier la variable, let oui.

// 3.

// 4. Elle renvoie undefined

// 5. La fonction prend les paramètres qu'on lui donne entre parenthèses et les utilise dans cette même fonction

// Exercice 2

function mention(note) {
  if (typeof note === "number") {
    if (note >= 0 && note < 10) {
      return "insuffisant";
    } else if (note >= 10 && note < 12) {
      return "passable";
    } else if (note >= 12 && note < 14) {
      return "assez bien";
    } else if (note >= 14 && note < 16) {
      return "bien";
    } else if (note >= 16 && note <= 20) {
      return "très bien";
    } else return "Note invalide";
  } else return "Note invalide";
}

console.log(mention(17));

// 1. "10" == 10 est true parce JS convertit les types avant de les comparer alors que "10" === 10 est false parce que JS compare le type et la valeur cette fois ci

// 2. L'ordre des conditions est important pour que la fonction sache si elle doit/peut s'éxécuter.

// Exercice 3

// function fizzBuzz(n) {
//   const tableau = [];

//   for (let i = 1; i <= n; i++) {
//     tableau.push(i);
//     if (i % 15 === 0) {
//       tableau.pop(i);
//       tableau.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       tableau.pop(i);
//       tableau.push("Fizz");
//     } else if (i % 5 === 0) {
//       tableau.pop(i);
//       tableau.push("Buzz");
//     }
//   }

//   return tableau;
// }

// console.log(fizzBuzz(100));

// function fizzBuzz(n) {
//   const tableau = [];

//   let i = 0;
//   while (i <= n) {
//     i++;
//     tableau.push(i);
//     if (i % 15 === 0) {
//       tableau.pop(i);
//       tableau.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       tableau.pop(i);
//       tableau.push("Fizz");
//     } else if (i % 5 === 0) {
//       tableau.pop(i);
//       tableau.push("Buzz");
//     }
//   }

//   return tableau;
// }

// console.log(fizzBuzz(100));

// 1. Il récupère le reste de la division de i par le nombre choisi. Ici il récupère le reste de la division de i par 15, si ça fait 0 alors la fonction enlève ce i dans le tableau pour le mettre FizzBuzz.
// Même chose avec 3 et 5. La raison est que lorsqu'on divise un nombre par un de ses multiples alors le reste de cette division est égale à 0.

// 2. Puisqu'un multiple de 15 est aussi un multiple de 3, si je teste "multiple de 3" avant "multiple de 15", lorsque la fonction tombe sur un multiple de 15 elle va s'arrêter au cas du multiple de 3 au lieu de tester le multiple de 15.
// Donc j'aurai Buzz dans le tableau au lieu de FizzBuzz.

// Exercice 4

function estPair(n) {
  const errorMsg = "the # is not even";
  console.assert(n % 2 === 0, { n, errorMsg });
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// const errorMsg = "the # is not even";
// const estPair = (n) => console.assert(n % 2 === 0, { n, errorMsg }); n % 2 === 0;

console.log(estPair(3));

function max3(a, b, c) {
  let max = a;
  const errorMsg = "b is not superior than max";
  const errorMsg2 = "c is not superior than max";
  console.assert(b > max, { errorMsg });
  if (b > max) {
    max = b;
  }
  console.assert(c > max, { errorMsg2 });
  if (c > max) {
    max = c;
  }
  return max;
}

// const max3 = (a, b, c) => (a > b && a > c ? a : b > c ? b : c);

console.log(max3(3, 2, 9));
console.log(max3(-1, -5, -3));

// function celsiusVersFahrenheit(C) {
//  return C * 1.8 + 32;
// }

const celsiusVersFahrenheit = (C) => C * 1.8 + 32;

console.log(celsiusVersFahrenheit(-40));

function saluer(prenom = "inconnu") {
  const errorMsg = "Vous avez oublié de rentrer votre prénom";
  console.assert(prenom !== "inconnu", { errorMsg });
  if (prenom !== "inconnu") {
    return `Bonjour ${prenom} !`;
  }
  return `Bonjour ${prenom} !`;
}

console.log(saluer("Xav"));

// const errorMsg = "the # is not even";
// for (let number = 2; number <= 5; number++) {
//   console.log(`the # is ${number}`);
//   console.assert(number % 2 === 0, "%o", { number, errorMsg });
// }

function decrireTemperature(unité, n) {
  const errorMsg = "Vous avez oublié de rentrer l'unité de mesure";
  console.assert(unité === "celsius", { errorMsg });
  if (unité === "celsius") {
    return `${n} °C = ${celsiusVersFahrenheit(n)} °F`;
  }
  return "Erreur : unité de mesure manquante";
}

// const decrireTemperature = (unité, n) =>
//   unité === "celsius"
//     ? `${n} °C = ${celsiusVersFahrenheit(n)} °F`
//     : "Erreur : unité de mesure manquante";

console.log(decrireTemperature(20));

// Question 1 : Quelle est la différence entre function f() {} et const f = () => {} ?
// Aucune différence fonctionnelle. Le but d'utiliser les fonctions fléchées est justement de ne pas utiliser les accolades parce que le return est implicite et donc la valeur de l'expression est renvoyée. Avec les accolades il faut écrire le return vu qu'il est explicite.

// Question 2 : À quoi sert un paramètre par défaut ?
// A ce que la fonctionne puisse s'éxécuter même si l'utilisateur ne rentre pas de paramètre. Ce qui peut-être utilise en phase de test, au lieu de rentrer des paramètres à chaque fois qu'on veut la tester.

// Question 3 : Que fait console.assert quand le test réussit ? Et quand il échoue ?
// Quand on utilise console.assert on lui demande si telle assertion est vraie, si oui alors il n'y a pas d'erreur donc pas besoin d'indiquer qu'il n'y en a pas. C'est pour ça que lorsqu'il réussit il n'affiche rien.
// En revanche, lorsqu'il échoue il nous indique que l'assertion est fausse, généralement en affichant un message d'erreur.
