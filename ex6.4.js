//longest way
function isOgram(str){
  if(countingDuplicates(str)==str){
    console.log("noDuplicate");
    return true;
  }else{
    console.log("sorryyy");
    return false;
  }
}
// console.log(isOgram("aeim"));
//shorter one with ternery
function isOgram1(str){
 return (countingDuplicates(str)==str ?'true no duplicate':"sorry give me string without duplicates");
}
// console.log(isOgram("aeim"));
// shorter one
function isOgram2(str){
 return (countingDuplicates(str)==str);
}
// console.log(isOgram("aeim"));
// one line arow function
const isOgram3 = (str) => (countingDuplicates(str)===str);
console.log(isOgram3("aeio"));


function countingDuplicates(str) {
  let newstr = str.toLowerCase();
  let newstr1 = "";
  let macthLetter = "";
  let counterMacthLetter = 0;
  for (let i = 0; i < newstr.length; i++) {
    let letter = newstr[i];
    if (!newstr1.includes(letter)) {
      newstr1 += letter;
    }
    else if (!macthLetter.includes(letter)) {
      macthLetter += letter
      counterMacthLetter++
    }
  }
  let timesOfReapetAndLetters = macthLetter.length + " " + macthLetter;
  return newstr1;
}