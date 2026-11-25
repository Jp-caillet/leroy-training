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

// Regarder ce que fait un switch case et le mettre en place pour la fonction mention

// 1. "10" == 10 est true parce JS convertit les types avant de les comparer alors que "10" === 10 est false parce que JS compare le type et la valeur cette fois ci

// 2. L'ordre des conditions est important pour que la fonction sache si elle doit/peut s'éxécuter.

const mention2 = (note) => {
  if (typeof note === "number") {
    switch (true) {
      case note < 0:
        return "Note invalide";
      case note >= 0 && note < 10:
        return "insuffisant";
      case note < 12:
        return "passable";
      case note < 14:
        return "assez bien";
      case note < 16:
        return "bien";
      case note <= 20:
        return "très bien";
      default:
        return "Note invalide";
    }
  } else return "Note invalide";
};

console.log(mention2(NaN));
