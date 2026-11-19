# Exercices JavaScript — Les bases
 
10 exercices progressifs pour apprendre les fondamentaux de JavaScript.
Les exercices 1 à 8 se lancent dans le terminal avec Node.js, les exercices 9 et 10 dans le navigateur.
 
---
 
## Avant de commencer
 
### Règles de travail
 
- **Un dépôt Git** pour tous les exercices, un dossier par exercice (`exercice-01/`, `exercice-02/`…).
- **Une branche et une Pull Request par exercice.** Ton tuteur relit la PR avant que tu la merges.
- **Pas d'IA pour écrire le code.** Tu peux utiliser la documentation [MDN](https://developer.mozilla.org/fr/) et [javascript.info](https://fr.javascript.info/).
- **ESLint** : ton tuteur te fournit la configuration au départ. À l'exercice 8, tu la refais toi-même.
### Lancer un script avec Node
 
1. Ouvre un terminal dans le dossier de l'exercice (dans VS Code : `Ctrl + ù` ou menu *Terminal > Nouveau terminal*) :
```bash
cd exercice-01
```
2. Lance le fichier :
```bash
node identite.js
```
3. Pour relancer automatiquement à chaque sauvegarde :
```bash
node --watch identite.js
```
   Arrête avec `Ctrl + C`.
 
**En cas de problème :**
 
| Message | Cause probable |
|---|---|
| `node: command not found` | Node n'est pas installé, ou le terminal n'a pas été rouvert après l'installation. Vérifie avec `node -v`. |
| `Cannot find module` | Tu n'es pas dans le bon dossier. Vérifie avec `ls` (ou `dir` sous Windows). |
 
### Quand un exercice est-il validé ?
 
- ✅ Tous les cas de test donnent le résultat attendu
- ✅ ESLint ne remonte aucune erreur
- ✅ Tu sais répondre aux questions de l'exercice **sans relire ton code**
---
 
## Exercice 1 — Fiche d'identité
 
**Notions :** variables, types, fonctions, template literals
 
Écris une fonction `presenter(prenom, age, ville)` qui **renvoie** une phrase de présentation.
 
**Exemple :**
```js
console.log(presenter("Léa", 25, "Lyon"));
```
```
Je m'appelle Léa, j'ai 25 ans, j'habite à Lyon et je suis né(e) vers 2001.
```
 
**Contraintes :**
- [ ] L'année de naissance est **calculée** avec `new Date().getFullYear()`, jamais écrite en dur
- [ ] La fonction utilise `return`, pas de `console.log` à l'intérieur
- [ ] Utilise `const` par défaut, `let` uniquement si la valeur change
- [ ] Utilise un template literal (`` `...${variable}...` ``), pas de concaténation avec `+`
- [ ] Appelle la fonction au moins deux fois avec des valeurs différentes
- [ ] Affiche le `typeof` de la fonction et du résultat
**Questions à préparer :**
- Pourquoi « vers » 2001 et pas « en » 2001 ?
- Quelle est la différence entre `let` et `const` ?
- Quelle est la différence entre un paramètre et un argument ?
- Que renvoie la fonction si tu supprimes le `return` ?
- Que se passe-t-il avec `presenter(25, "Léa", "Lyon")` ?
---
 
## Exercice 2 — Le bulletin
 
**Notions :** conditions, comparaisons
 
Écris une fonction `mention(note)` qui renvoie la mention correspondant à une note sur 20.
 
| Note | Mention |
|---|---|
| < 10 | insuffisant |
| 10 à < 12 | passable |
| 12 à < 14 | assez bien |
| 14 à < 16 | bien |
| ≥ 16 | très bien |
 
**Cas de test :**
 
| Appel | Résultat attendu |
|---|---|
| `mention(9.99)` | `"insuffisant"` |
| `mention(10)` | `"passable"` |
| `mention(16)` | `"très bien"` |
| `mention(20)` | `"très bien"` |
| `mention(-1)` | `"Note invalide"` |
| `mention(21)` | `"Note invalide"` |
| `mention("abc")` | `"Note invalide"` |
 
**Contraintes :**
- [ ] La fonction **renvoie** une chaîne, elle n'affiche rien
- [ ] La validité de la note est vérifiée **en premier** (`typeof` ou `Number.isFinite`)
- [ ] Utilise `===`, jamais `==`
**Questions à préparer :**
- Que donne `"10" == 10` ? Et `"10" === 10` ?
- Pourquoi l'ordre des conditions est-il important ?
---
 
## Exercice 3 — FizzBuzz
 
**Notions :** boucles, opérateur modulo
 
Affiche les nombres de 1 à 100, mais :
- « Fizz » à la place des multiples de 3
- « Buzz » à la place des multiples de 5
- « FizzBuzz » à la place des multiples de 3 **et** de 5
**Résultat attendu :**
```
1
2
Fizz
4
Buzz
Fizz
7
...
14
FizzBuzz
```
 
**Contraintes :**
- [ ] Une version avec une boucle `for`
- [ ] Une version avec une boucle `while`
- [ ] Bonus : une fonction `fizzBuzz(n)` qui **renvoie un tableau** au lieu d'afficher
**Questions à préparer :**
- Que fait l'opérateur `%` ?
- Que se passe-t-il si tu testes « multiple de 3 » avant « multiple de 15 » ?
---
 
## Exercice 4 — Boîte à outils
 
**Notions :** fonctions fléchées, paramètres par défaut, tests
 
Écris les fonctions suivantes :
 
| Appel | Résultat attendu |
|---|---|
| `estPair(4)` | `true` |
| `estPair(7)` | `false` |
| `estPair(0)` | `true` |
| `max3(3, 9, 2)` | `9` |
| `max3(-1, -5, -3)` | `-1` |
| `celsiusVersFahrenheit(0)` | `32` |
| `celsiusVersFahrenheit(100)` | `212` |
| `celsiusVersFahrenheit(-40)` | `-40` |
 
Puis :
- `saluer(prenom = "inconnu")` qui renvoie `"Bonjour inconnu !"` si on ne lui passe rien
- `decrireTemperature(celsius)` qui **utilise** `celsiusVersFahrenheit` et renvoie par exemple `"20 °C = 68 °F"`
**Contraintes :**
- [ ] `Math.max` est interdit : écris la logique toi-même
- [ ] Au moins deux fonctions écrites en **fonction fléchée** (`const f = (x) => ...`)
- [ ] Au moins 3 `console.assert(...)` par fonction pour la tester
- [ ] Aucun `console.log` à l'intérieur des fonctions
**Questions à préparer :**
- Quelle est la différence entre `function f() {}` et `const f = () => {}` ?
- À quoi sert un paramètre par défaut ?
- Que fait `console.assert` quand le test réussit ? Et quand il échoue ?
---
 
## Exercice 5 — Statistiques de notes
 
**Notions :** tableaux, `map` / `filter` / `reduce`
 
À partir du tableau `[12, 8, 15, 10, 17]`, calcule :
 
| Statistique | Résultat attendu |
|---|---|
| Moyenne | `12.4` |
| Minimum | `8` |
| Maximum | `17` |
| Notes strictement supérieures à 10 | `[12, 15, 17]` |
 
**Contraintes :**
- [ ] **Version 1** avec des boucles `for`
- [ ] **Version 2** avec `filter`, `reduce` (et `map` si utile)
- [ ] Les deux versions sont dans des fonctions séparées et donnent exactement le même résultat
- [ ] Un tableau vide ne fait pas planter le programme et ne renvoie pas `NaN`
- [ ] Le tableau d'origine n'est jamais modifié
**Questions à préparer :**
- Explique ce que fait `reduce`, étape par étape, sur l'exemple
- Pourquoi `filter` ne modifie-t-il pas le tableau d'origine ?
---
 
## Exercice 6 — Carnet de contacts
 
**Notions :** objets, tableaux d'objets, destructuring
 
Un contact a la forme `{ nom, email, tel }`. Écris quatre fonctions :
 
- `ajouter(contact)`
- `rechercher(nom)`
- `supprimer(email)`
- `lister()`
**Cas de test :**
- [ ] `rechercher("dupont")` trouve le contact « Dupont » (la casse est ignorée)
- [ ] Ajouter un contact avec un email déjà présent renvoie `false` (ou une erreur)
- [ ] Un email sans `@` est refusé
- [ ] Supprimer un email inexistant ne fait pas planter le programme
**Contraintes :**
- [ ] Les fonctions **renvoient** des valeurs, l'affichage se fait à l'extérieur
- [ ] Utilise le destructuring au moins une fois : `({ nom, email }) => ...`
**Questions à préparer :**
- Quelle est la différence entre `find` et `filter` ?
- Pourquoi utiliser l'email comme identifiant plutôt que le nom ?
---
 
## Exercice 7 — Jeux de mots
 
**Notions :** chaînes de caractères, algorithmique
 
| Appel | Résultat attendu |
|---|---|
| `estPalindrome("Kayak")` | `true` |
| `estPalindrome("Esope reste ici et se repose")` | `true` |
| `estPalindrome("Bonjour")` | `false` |
| `compterVoyelles("Bonjour")` | `3` |
| `compterVoyelles("")` | `0` |
| `majusculeChaqueMot("bonjour le monde")` | `"Bonjour Le Monde"` |
 
**Contraintes :**
- [ ] Les majuscules et les espaces sont ignorés pour les palindromes
- [ ] Au moins 3 `console.assert` par fonction
- [ ] Bonus : gérer les accents avec `normalize("NFD")` pour que `"Ésope reste ici et se repose"` fonctionne
**Questions à préparer :**
- Que fait `texte.split("").reverse().join("")` ?
- Que se passe-t-il avec deux espaces consécutifs dans `majusculeChaqueMot` ?
---
 
## Exercice 8 — Projet propre
 
**Notions :** modules, npm, ESLint, Git
 
Reprends le carnet de contacts de l'exercice 6 et transforme-le en vrai projet.
 
**Structure attendue :**
```
carnet/
├── src/
│   ├── contacts.js     ← les fonctions, exportées avec export
│   └── index.js        ← importe les fonctions et fait une démo
├── eslint.config.js
├── package.json        ← "type": "module" et un script "start"
└── .gitignore          ← contient node_modules
```
 
**Étapes :**
1. `npm init -y`
2. Ajoute `"type": "module"` et le script `"start": "node src/index.js"` dans `package.json`
3. Découpe le code avec `export` / `import`
4. Installe et configure ESLint toi-même : `npm init @eslint/config@latest`
**Contraintes :**
- [ ] `npm start` lance la démo
- [ ] `npx eslint .` ne remonte aucune erreur
- [ ] Le dossier `node_modules` n'est **pas** commité
- [ ] Les commits sont clairs et découpés (pas un seul commit « fini »)
**Questions à préparer :**
- À quoi servent `package.json` et `package-lock.json` ?
- Pourquoi ne faut-il pas commiter `node_modules` ?
---
 
## Exercice 9 — Todo list
 
**Notions :** DOM, événements, `localStorage`, première notion de sécurité
 
Crée une page `index.html` avec un fichier `script.js` qui permet de gérer une liste de tâches.
 
**Comportement attendu :**
- [ ] Ajouter une tâche avec un bouton **ou** avec la touche Entrée
- [ ] Une saisie vide ou composée uniquement d'espaces est refusée (`trim()`)
- [ ] Cliquer sur une tâche la coche / la décoche
- [ ] Un bouton ✕ supprime la tâche
- [ ] Les tâches sont toujours là après un rechargement de la page (F5)
**Contraintes :**
- [ ] Utilise `addEventListener`, pas d'attribut `onclick` dans le HTML
- [ ] Affiche le texte avec `textContent`, **jamais** avec `innerHTML`
- [ ] Les tâches sont stockées dans un tableau JS, synchronisé avec `localStorage` (`JSON.stringify` / `JSON.parse`)
- [ ] Bonus : un compteur « X tâches restantes »
**Test de sécurité :** ajoute la tâche suivante :
```
<img src=x onerror=alert(1)>
```
Elle doit s'afficher **comme du texte**, sans qu'aucune alerte n'apparaisse.
 
**Questions à préparer :**
- Pourquoi `innerHTML` est-il dangereux avec du texte saisi par l'utilisateur ?
- Pourquoi faut-il utiliser `JSON.stringify` pour enregistrer dans `localStorage` ?
---
 
## Exercice 10 — Météo
 
**Notions :** asynchrone, `fetch`, `async` / `await`, gestion d'erreurs
 
Crée une page où l'utilisateur saisit une ville et obtient la météo actuelle.
L'API [Open-Meteo](https://open-meteo.com/) est gratuite et ne demande pas de clé.
 
**Deux appels sont nécessaires :**
 
1. **Trouver les coordonnées de la ville :**
```
https://geocoding-api.open-meteo.com/v1/search?name=Paris&count=1
```
2. **Obtenir la météo à ces coordonnées :**
```
https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current=temperature_2m,wind_speed_10m
```
 
**Affichage attendu :**
```
Paris : 8,4 °C, vent 12 km/h
```
 
**Cas à gérer :**
- [ ] Pendant le chargement : afficher « Chargement… » et désactiver le bouton
- [ ] Ville inconnue (la réponse ne contient pas `results`) : afficher « Ville introuvable »
- [ ] Pas de réseau (à tester avec le mode *Hors ligne* des DevTools) : afficher un message d'erreur
- [ ] Vérifier `response.ok` — ⚠️ **`fetch` ne lève pas d'erreur en cas de 404 ou 500**
**Contraintes :**
- [ ] Utilise `async` / `await` et `try` / `catch`, pas de `.then()` imbriqués
- [ ] Une fonction par appel d'API
**Questions à préparer :**
- Qu'est-ce qu'une promesse ?
- Pourquoi le deuxième appel doit-il attendre le premier ?
- Pourquoi `fetch` ne lève-t-il pas d'erreur sur une 404 ?
---
 
## Ressources
 
- [MDN — Guide JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide)
- [javascript.info](https://fr.javascript.info/)
- [Documentation Node.js](https://nodejs.org/fr/learn)
- [Documentation ESLint](https://eslint.org/docs/latest/)