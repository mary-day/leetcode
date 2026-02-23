/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longestSubstringCount = 0;
    let longestSubstring = '';
    for (let i = 0; i < s.length; i++) {
        longestSubstring = s[i];
        for (let j = i+1; j < s.length; j++) {
            if (longestSubstring.includes(s[j])) {
                break;
            } else {
                longestSubstring += s[j];
            }
        }
        if (longestSubstring.length > longestSubstringCount) {
            longestSubstringCount = longestSubstring.length;
        }
    }
    return longestSubstringCount;
};