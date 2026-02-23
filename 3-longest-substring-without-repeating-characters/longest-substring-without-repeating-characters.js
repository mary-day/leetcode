/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const seen = new Set(); // O(1) lookup, add, and delete
    let left = 0;
    let best = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);
        if (right - left + 1 > best) {
            best = right - left + 1;
        }
    }

    return best;
};