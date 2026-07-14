/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;

    // A string starting with 0 cannot be decoded
    if (s[0] === "0") return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        // Current digit by itself
        const oneDigit = Number(s[i-1]);
        // Current digit and previous digit together
        const twoDigits = Number(s.slice(i-2, i));

        // Can decode one digit
        if (oneDigit >= 1) {
            dp[i] += dp[i-1];
        }
        // Can decode current and previous digits together
        if (twoDigits >= 10 && twoDigits <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[n];
    // Time: O(n)
    // Space: O(n)
};