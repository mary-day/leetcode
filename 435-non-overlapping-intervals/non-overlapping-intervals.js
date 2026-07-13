/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]); // sorts by ascending end value

    let removals = 0;
    let previousEnd = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        // checking for start values less than previous ends to detect overlap
        if (intervals[i][0] < previousEnd) {
            removals++;
        } else {
            previousEnd = intervals[i][1];
        }
    }
    return removals;
};