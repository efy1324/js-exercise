// Ex2.4 - Unique 

// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers. 

function findUniq(arr) {
  let similar = arr[0];
  let special = arr[1];
  for (let i = 2; i <= arr.length; i++) {
    if (arr[i] === similar) {
      return special;
    }
    else if(arr[i]===special){
        return similar
    }
  }
return special;
}
console.log(findUniq([ 0, 1, 1])); 