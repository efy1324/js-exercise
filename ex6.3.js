function orgenizeString(str1, str2) {
  // to add to a new string, and cut all the duplicate letters 
  //and than to convert to an array sort and to string back
  let newstr = (str1 + str2).toLowerCase();
  let noDuplicate = countingDuplicates(newstr);

    return noDuplicate.split("").sort().join("")
}
console.log(orgenizeString("efrerwEFWIOefe", "ansdfjase"));

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
// console.log(countingDuplicates("EeFReaAIi22i44koowwmriM"))