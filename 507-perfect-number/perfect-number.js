/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num <= 1) return false;
    const divisors = [1];
    for (let i = 2; i <= num/2; i ++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    let divisorSum = 0;
    divisors.forEach(divisor => divisorSum += divisor);
    if (num === divisorSum) return true;
    return false;
};