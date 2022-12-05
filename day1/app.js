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
}

processLineByLine();