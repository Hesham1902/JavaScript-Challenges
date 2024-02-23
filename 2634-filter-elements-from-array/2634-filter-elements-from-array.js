/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const filteredArr = [];
    for (let i of arr) {
        if (fn(i, arr.indexOf(i))) {
            filteredArr.push(i)
        }
    }
    return filteredArr
};