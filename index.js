/**
 *
 */
function permutation(chaine) {
  // here you code
  if (chaine === null || chaine.length === 1) {
    return chaine;
  }

  let arrayChaine = [...chaine];
  //   console.log(arrayChaine);
  let longueur = arrayChaine.length;

  //   for (i = 0; i < longueur; i++) {
  //     [arrayChaine[i], arrayChaine[longueur - i]] = [
  //       arrayChaine[longueur - i],
  //       arrayChaine[i]
  //     ];
  //     console.log(arrayChaine[i], arrayChaine[longueur - i]);
  //  }
}

permutation("Javo");

function allAnagrams(word) {
  if (word.length < 2) {
    return [word];
  } else {
    let allAnswers = [];
    for (let i = 0; i < word.length; i++) {
      let letter = word[i];
      let shorterWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      let shortwordArray = allAnagrams(shorterWord);
      for (let j = 0; j < shortwordArray.length; j++) {
        allAnswers.push(letter + shortwordArray[j]);
      }
    }
    return allAnswers;
  }
}

allAnagrams("Javo");
