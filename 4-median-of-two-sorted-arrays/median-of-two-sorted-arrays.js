/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while(i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    // Add remaining numbers from nums1 if all of nums2 is in mergedArray
    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }

    // Add remaining numbers from nums2 if all of nums1 is in mergedArray
    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }

    const midIndex = (mergedArray.length-1)/2;
    let median;
    // If there are an even number of items in mergedArray, manually calculate the median based on the two middle items. Otherwise return the middle item in mergedArray.
    if (mergedArray.length % 2 === 0) {
        const lowerIndex = Math.floor(midIndex);
        const upperIndex = Math.ceil(midIndex);
        median = (mergedArray[lowerIndex] + mergedArray[upperIndex])/2;
    } else {
        median = mergedArray[midIndex];
    }

    return median;
};