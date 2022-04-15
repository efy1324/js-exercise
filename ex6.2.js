function countingDuplicates(str) {
  let newstr = str.toLowerCase();
  let newstr1= "";
  let macthLetter = "";
  let counterMacthLetter = 0;
  for(let i = 0;i<newstr.length;i++ ){
    let letter= newstr[i];
      if(!newstr1.includes(letter)){
        newstr1 +=letter;
      }
      else if(!macthLetter.includes(letter)){
        macthLetter += letter
        counterMacthLetter++
      }
  }
  let timesOfReapetAndLetters= macthLetter.length + " " + macthLetter;
  return timesOfReapetAndLetters ;
}
console.log(countingDuplicates("EeFReaAIi22i44mriM"));