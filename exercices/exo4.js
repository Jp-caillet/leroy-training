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

const saluer = (prenom = "inconnu") => {
  const errorMsg = "Vous avez oublié de rentrer votre prénom";
  console.assert(prenom !== "inconnu", { errorMsg });
  if (prenom !== "inconnu") {
    return `Bonjour ${prenom} !`;
  }
  return `Bonjour ${prenom} !`;
};

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
