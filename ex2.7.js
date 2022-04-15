// Ex2.7 - Basic Math 

// Your task is to create a function that does four basic . 
// The function should take three arguments - operation(string/char), value1(number), 
// value2(number). 
// The function should return result of numbers after applying the chosen operation. 
// Examples 
// basicOp('+', 4, 7)         // Output: 11 

// basicOp('-', 15, 18)       // Output: -3 
// basicOp('*', 5, 5)         // Output: 25 
// basicOp('/', 49, 7)        // Output: 7 
function basicMath(str, num1, num2) {
  // take the num1 and than convert the str to operator, and than take num 2
 // without eval I will do ternery if str ==="-" do num1 -num2
//  if str ==="\" do num1 \ num2
//  if str ==="+" do num1 + num2
  return eval(num1 + str + num2) ;
}
console.log(basicMath("*", 2, 3));
// let str = "+";
// let str1= eval(str);
// console.log(str1);