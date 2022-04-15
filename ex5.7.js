function shortestWord(str) {
  let arrstr = str.split(" ")
  let shortWord = arrstr[0]
  for (let i = 1; i < arrstr.length; i++) {
    let word = arrstr[i];
    if (word.length < shortWord.length){
      shortWord = word;
    }// else it will continue the for loop
      }
  return shortWord.length;
}
console.log(shortestWord("Efraim love Anna and I levi famnfklfl")); 