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

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.ceil(arr.length / 2);
  const left = mergeSort(arr.splice(0, mid));
  const right = mergeSort(arr.splice(-mid));
  const newArr = [];

  while (left.length > 0 && right.length > 0) {
    let first;
    if (left[0] < right[0]) {
      first = left.shift();
    } else {
      first = right.shift();
    }
    newArr.push(first);
  }

  if (left.length == 0) {
    newArr.push.apply(newArr, right);
  } else if (right.length == 0) {
    newArr.push.apply(newArr, left);
  }

  return newArr;
};

console.log(fibs(8));
console.log(fibsRec(8));

const arr = [8, 4, 5, 6, 7, 3, 1, 2];
const arr2 = [8, 4, 5, 6, 7, 3, 1, 2, 9];
const arr3 = [5, 4, 5, 6, 7, 3, 1, 2];

console.log(arr);
console.log(mergeSort(arr));
// console.log(arr2);
// console.log(mergeSort(arr2));
// console.log(arr3);
// console.log(mergeSort(arr3));
