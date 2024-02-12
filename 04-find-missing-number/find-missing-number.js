function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = (n * (n + 1)) / 2;
  let wrongSum = 0;
  for (let i = 0; i < arr.length; i++) {
    wrongSum += arr[i];
  }
  return totalSum - wrongSum;
}

module.exports = findMissingNumber;
