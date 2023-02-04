const fibs = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      let temp1 = arr.pop();
      let temp2 = arr.pop();
      arr.push(temp2, temp1, temp1 + temp2);
    }
  }
  return arr;
};

const fibsRec = (n) => {
  const arr = [];
  let sum = 0;
  if (n <= 0) return arr;

  return arr.concat(sum).concat(fibsRec(n - 1));
};

console.log(fibs(8));
console.log(fibsRec(8));
