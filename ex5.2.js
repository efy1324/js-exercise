function repeatStr(num, str) {
  let i = 0;
  let newstr = "";
  while (i < num) {
    i++;
    newstr += str;
  }
  return newstr;
}
console.log(repeatStr(5, "efy"));