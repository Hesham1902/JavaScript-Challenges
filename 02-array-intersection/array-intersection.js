function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const interSectionArr = [];
  for (let num of arr2) {
    console.log(num);
    if (set1.has(num)) {
      interSectionArr.push(num);
    }
  }
  return interSectionArr;
}

module.exports = arrayIntersection;
