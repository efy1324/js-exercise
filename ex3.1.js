// recentPopulation + recentPopulation * percentOfGrowth / 100 + immigrants = 1 yearincrease
// do this in for loop until you will get to >= numToGetPopulation
// return i times the loop will run
function numOfYearTill(recentPopulation, percentOfGrowth, immigrants, numToGetPopulation) {
  let numofyear = 0;
  while (true) {
    if (recentPopulation >= numToGetPopulation) { return numofyear; }
    recentPopulation = recentPopulation + recentPopulation * percentOfGrowth / 100 + immigrants; numofyear++;
  }
}
console.log(numOfYearTill(1500,5,100,5000));
