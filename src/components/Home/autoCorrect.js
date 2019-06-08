import wordList from '../../words.json';

const words = new Set(wordList); //English word dictionary for lookup
const validWordList = []; //for keyword suggestion feature

function autoCorrect(str) {
  let foundWordOneEditDistance;

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  let vowelsCountArr = str.match(/[aeiou]/g);

  //return string if the string have no vowel or if it's a valid English word
  if (!vowelsCountArr || words.has(str)) {
    return str;
  }

  //check if user makes one char typo
  foundWordOneEditDistance = checkOneEditDistance(str, vowels);

  if (foundWordOneEditDistance) {
    return foundWordOneEditDistance;
  } else {
    checkMultiEditDistance(str, vowels, 0);
    // return the first word in the validWordList
    if (validWordList.length) return validWordList[0];
  }

  // return the original string if it cannot autocorrect.
  return str;
}

const checkOneEditDistance = (str, vowels) => {
  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i])) {
      const strArr = str.split('');
      for (let v of 'aeiou') {
        strArr[i] = v;

        const tempStr = strArr.join('');

        if (tempStr !== str && words.has(tempStr)) {
          return tempStr;
        }
      }
    }
  }
};

// check all the vowels combination, and return a list of similar valid words
const checkMultiEditDistance = (str, vowels, start) => {
  const strArr = str.split('');

  if (start === strArr.length) {
    return;
  }

  if (vowels.has(strArr[start])) {
    for (let i of 'aeiou') {
      strArr[start] = i;

      const tempStr = strArr.join('');
      if (words.has(tempStr)) {
        validWordList.push(tempStr);
      }

      checkMultiEditDistance(tempStr, vowels, start + 1);
    }
  } else {
    checkMultiEditDistance(str, vowels, start + 1);
  }
};

export default autoCorrect;
