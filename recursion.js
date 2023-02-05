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
  if (n == 1) return [0];
  if (n == 2) return [0, 1];
  return [...fibsRec(n - 1), fibsRec(n - 1)[n - 2] + fibsRec(n - 1)[n - 3]];
};

console.log(fibs(8));
console.log(fibsRec(8));
