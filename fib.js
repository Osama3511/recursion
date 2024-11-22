function fibsRecursive(num) {
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const arr = fibsRecursive(num - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

module.exports = { fibsRecursive };
