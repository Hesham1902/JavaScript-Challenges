/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function(n, trust) {
    // Initialize an array to track the trust count for each person
    const trustCount = new Array(n + 1).fill(0);
    
    // Iterate through the trust array to update trust count
    for (const [a, b] of trust) {
        trustCount[a]--; // Person 'a' trusts someone, so decrement their trust count
        trustCount[b]++; // Person 'b' is trusted by someone, so increment their trust count
    }
    
    // Iterate through the trust count array to find the person trusted by everyone
    for (let i = 1; i <= n; i++) {
        if (trustCount[i] === n - 1) { // If a person is trusted by everyone (except themselves)
            return i; // This person is the judge
        }
    }
    
    return -1; // No judge found
};