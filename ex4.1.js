function fibonacci(n) {
  arr = [1, 1]
  for (let i = 2; i < n; i += 1){
    let twoSum = arr[i-1] + arr[i-2];
    arr.push(twoSum);
  }
  return arr;
}
console.log(fibonacci(10));