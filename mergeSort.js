function merge(firstArr, secondArr) {
  let firstArrLength = firstArr.length;
  let secondArrLength = secondArr.length;

  const mergedArr = [];
  let i = (j = 0);
  while (i < firstArrLength && j < secondArrLength) {
    if (firstArr[i] < secondArr[j]) {
      mergedArr.push(firstArr[i++]);
    } else {
      mergedArr.push(secondArr[j++]);
    }
  }

  for (; i < firstArrLength; i++) {
    mergedArr.push(firstArr[i]);
  }

  for (; j < secondArrLength; j++) {
    mergedArr.push(secondArr[j]);
  }

  return mergedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  const sortedLeft = mergeSort(leftArr);
  const sortedRight = mergeSort(rightArr);

  return merge(sortedLeft, sortedRight);
}


module.exports = { mergeSort };