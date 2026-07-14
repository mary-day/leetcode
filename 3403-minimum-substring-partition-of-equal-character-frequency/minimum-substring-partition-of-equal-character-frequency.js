/**
 * @param {string} s
 * @return {number}
 */
var minimumSubstringsInPartition = function(s) {
    const n = s.length;

    // dp[i] = minimum number of balanced substrings needed to
    // partition the first i characters
    const dp = new Array(n + 1).fill(1001);
    dp[0] = 0; // an empty string needs 0 substrings

    for (let end = 1; end <= n; end++) {
        const counts = new Array(26).fill(0);
        let distinct = 0;
        let maxFrequency = 0;

        for (let start = end - 1; start >= 0; start--) {
            // Convert the current letter to an index from 0 to 25
            const letterIndex = s.charCodeAt(start) - 97;

            // If first occurrance, increase distinction count
            if (counts[letterIndex] === 0) {
                distinct++;
            }
            counts[letterIndex]++;
            maxFrequency = Math.max(maxFrequency, counts[letterIndex]);
            const substringLength = end-start;

            // Checks if current substring is balanced
            if (substringLength === distinct * maxFrequency) {
                dp[end] = Math.min(dp[end], dp[start] + 1);
            }
        }
    }
    return dp[n];
    // Time: O(n^2)
    // Space: O(n)
};