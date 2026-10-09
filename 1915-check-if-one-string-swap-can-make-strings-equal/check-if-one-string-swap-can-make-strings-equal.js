/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;

    const differences = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            differences.push(i);
        }
        if (differences.length > 2) return false;
    }

    if (differences.length !== 2) return false;
    const i = differences[0];
    const j = differences[1];
    return s1[i] === s2[j] && s1[j] === s2[i];
};