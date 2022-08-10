module.exports = function reverse (n) {
    n = Math.abs(n);
    const arr = String(n).split('');
    const arrReverse = arr.reverse();
    while (arrReverse[0] === 0) {
        arrReverse.shift();
    }
    return Number(arrReverse.join(''));
}
