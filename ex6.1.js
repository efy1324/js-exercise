function mumbling(str) {
  //to take the index + 1 of latter and multiplay
  let newstr = "";
  for (let i = 0; i < str.length; i += 1) {
    let letter = str[i];
    let upperletter = letter.toUpperCase();
    newstr += upperletter + repeatStr((i), letter) + "-";
  }
  let newstr1 = newstr.slice(0, -1);
  return newstr1;
}
console.log(mumbling("Efraim"));

function repeatStr(num, str) {
  let i = 0;
  let newstr = "";
  while (i < num) {
    i++;
    newstr += str;
  }
  return newstr;
}
// console.log(repeatStr(5, "efy"));