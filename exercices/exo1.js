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

// 3. Un paramètre est le nom déclaré dans la définition de la fonction. L'argument lui est la valeur réelle passée au moment où on appelle la fonction.

// 4. Elle renvoie undefined

// 5. La fonction prend les arguments qu'on lui donne entre parenthèses et les utilise dans cette même fonction
