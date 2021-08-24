let randomNumbers = [];
for (let i = 0; i < 5; i++) {
  randomNumbers.push(Math.round(100+Math.random() * 899));
}

console.log(randomNumbers);

function getMaxMin(numbers) { 
  let max = numbers[0];
  let min = numbers[0];

  for (let i = 0; i < numbers.length - 1; i++) { 
      if (numbers[i] > max){
          max = numbers[i]
      }
      
      if (numbers[i]< min) {
          min = numbers[i]
      }
  }
  return { max, min };
}

console.log(getMaxMin(randomNumbers));