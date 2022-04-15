function hidePassword(word) {
  let HiddenPart = word.substring(0, word.length - 4)
  let lastFour = word.substring(word.length - 4)
  let HiddenWord = HiddenPart.replace(/[A-Z 0-9]/ig, '#') + lastFour;
  return HiddenWord
}
console.log(hidePassword("efraim02"));