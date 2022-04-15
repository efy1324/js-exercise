let str = 'Efraim levi and progreming';

function everySecondLetter(str) {
  return str.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
}

console.log(everySecondLetter(str));
