/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    // Sort events by ascending start time
    events.sort((a, b) => a[0] - b[0]);
    const n = events.length;

    // maxFromRight[i] = largest event value from i -> end
    const maxFromRight = new Array(n);
    maxFromRight[n - 1] = events[n - 1][2];

    // Build maxFromRight from right to left
    for (let i = n - 2; i >= 0; i--) {
        maxFromRight[i] = Math.max(
            events[i][2],
            maxFromRight[i + 1]
        );
    }

    let answer = 0;

    // trying each event as the first event
    for (let i = 0; i < n; i++) {
        const end = events[i][1];
        const value = events[i][2];

        let left = 0;
        let right = n-1;
        let nextIndex = n;

        // binary search for the first event starting after the current one ends
        while (left <= right) {
            const mid = Math.floor((left + right)/2);
            const start = events[mid][0];
            if (start > end) {
                nextIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        let total = value;
        if (nextIndex < n) {
            total += maxFromRight[nextIndex];
        }
        answer = Math.max(answer, total);
    }
    return answer;
};