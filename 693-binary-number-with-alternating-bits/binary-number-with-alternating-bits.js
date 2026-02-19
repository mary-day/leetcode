/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    const binaryN = n.toString(2);
    let lastBit;
    for (const bit of binaryN) {
        if (lastBit !== undefined && bit === lastBit) {
            return false;
        } else {
            lastBit = bit;
        }
    }
    return true;
};