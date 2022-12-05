const fs = require('fs');
const readLine = require('readline');

let elfTotal = 0;
let elves = [];

async function processLineByLine() {
  const filestream = fs.createReadStream('input.txt');

  const rl = readLine.createInterface({
    input: filestream,
    crlfDelay: Infinity,
  });

  for await (const ln of rl) {
    if (ln != ''){
      elfTotal += parseInt(ln);
    } else if (ln === '') {
      elves.push(elfTotal);
      elfTotal = 0;
    }
  }
  console.log(`Total elves is: ${elves.length}`);
  console.log(`Biggest calorie load of an elf is : ${Math.max.apply(0, elves)}`);

  const topThree = elves.sort((a,b) => b-a).slice(0,3); 
  console.log(topThree);
  const totalValue = topThree.reduce((a,b)=>a+b); // horrible, why doesn't JS have an array.sum function?
  console.log(`Sum of top three amounts is: ${totalValue}`);
}

processLineByLine();