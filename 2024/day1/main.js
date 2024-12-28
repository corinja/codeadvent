const fs = require('fs');

const getList = () => {
  const data = fs.readFileSync('./input.txt', 'utf8');

  const leftList = data.split('\n').map((item) => (parseInt(item.split('   ')[0]))).sort();
  const rightList = data.split('\n').map((item) => (parseInt(item.split('   ')[1]))).sort();

  let totalDifference = 0;
  for (let index = 0; index < leftList.length; index++) {
    totalDifference += Math.abs(leftList[index] - rightList[index]);
  }
  return totalDifference;
};

console.log(getList());
