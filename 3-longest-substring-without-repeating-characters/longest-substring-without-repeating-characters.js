/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstringCount = 0;
    for (let i = 0; i < s.length; i++) {
        const seen = new Set(); // O(1) lookup time for repeating characters
        let currentLength = 0;
        for (let j = i; j < s.length; j++) {
            if (seen.has(s[j])) {
                break;
            } else {
                seen.add(s[j]);
                currentLength++;
            }
        }
        if (currentLength > longestSubstringCount) {
            longestSubstringCount = currentLength;
        }
    }
    return longestSubstringCount;
};