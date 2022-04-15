function Tribonacci(n) {
  arr = [1, 1, 1]
  for (let i = 3; i < n; i += 1) {
    let threeSum = arr[i - 1] + arr[i - 2] + arr[i - 3];
    arr.push(threeSum);
  }
  return arr;
}
console.log(Tribonacci(20));