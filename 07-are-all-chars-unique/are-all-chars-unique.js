function areAllCharactersUnique(str) {
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      return false;
    }
    charCount[str[i]] = true;
  }
  return true;
}

module.exports = areAllCharactersUnique;
