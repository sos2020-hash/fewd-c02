const input = 'a whale of a deal!';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];
for (let i = 0 ; i < input.length; i++) {
  // console.log(i);
  // console.log(input[i]);
  for (let x = 0; x < vowels.length; x++) {
    // console.log('x is '+ x);
    // console.log(vowels[x]);
    if (input[i] === vowels[x]) {
      resultArray.push(vowels[x]);
      if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i]);
    } 
    } 
  }
}

console.log(resultArray.join('').toUpperCase()); 
