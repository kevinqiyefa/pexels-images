import wordList from '../../words.json';

const words = new Set(wordList); //English word dictionary for lookup
const validWordList = []; //for suggestion feature

function autoCorrect(str) {
  let foundWordOneEditDistance;

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  let vowelsCountArr = str.match(/[aeiou]/g);

  //return string if the string have no vowel or if it's a valid English word
  if (!vowelsCountArr || words.has(str)) {
    return str;
  }

  foundWordOneEditDistance = checkOneEditDistance(str, vowels);

  if (foundWordOneEditDistance) {
    return foundWordOneEditDistance;
  } else {
    checkMultiEditDistance(str, vowels, 0);
    if (validWordList.length) return validWordList[0];
  }

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
        return;
      }

      checkMultiEditDistance(tempStr, vowels, start + 1);
    }
  } else {
    checkMultiEditDistance(str, vowels, start + 1);
  }
};

export default autoCorrect;
