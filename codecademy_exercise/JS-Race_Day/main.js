let raceNumber = Math.floor(Math.random() * 1000);
let runnerTimeEarly = true;
let runnerAge = 25;
if (runnerTimeEarly && runnerAge > 18) {
  raceNumber += 1000;
}
if (runnerTimeEarly && runnerAge > 18) {
  console.log(raceNumber + ' ' + 'race at 9:30')
} else if (!runnerTimeEarly && runnerAge > 18) {
  console.log(raceNumber + ' ' + 'race at 11:00')
} else if (runnerAge < 18) {
  console.log(raceNumber + ' ' + 'race at 12:30')
} else {
  console.log('See the registration desk')
};