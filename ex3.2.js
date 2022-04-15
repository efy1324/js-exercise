const busStations = [
  [50, 0],
  [5, 10],
  [2, 5],
  [2, 7],
  [2, 8],
  [0, 9],
]
const busStations1 = [
  [40, 0],
  [5, 10],
  [2, 5],
  [0, 7],
]
const busStations2 = [
  [21, 0],
  [1, 10],
  [2, 5],
  [1, 7],
  [0, 4]
]
// busStations for loop in any array[0]+=   array[1]-= 
function numOfPeopleInTheBus(busStationsArr) {
  let numInbus = 0;
  for (let num of busStationsArr) {
    numInbus += num[0]
    numInbus -= num[1]
  }
  return numInbus;
}
console.log(numOfPeopleInTheBus(busStations));
console.log(numOfPeopleInTheBus(busStations1));
console.log(numOfPeopleInTheBus(busStations2));





