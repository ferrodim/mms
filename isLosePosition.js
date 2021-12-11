const LOSE_POSITIONS = ['1', '1,1,1', '3,2,1'];
const WIN_POSTITIONS = [''];
const nextPositions = require('./nextPositions');
const cachedValues = new Map();

function isLosePosition(pos) {
    let a = (typeof pos === 'string') ? pos.split(',').sort() : pos;
    const s = a.join(',');

    if (LOSE_POSITIONS.includes(s)) {
        return true;
    }

    if (WIN_POSTITIONS.includes(s)) {
        return false;
    }

    // all 1's
    if (a[a.length-1] === 1) {
        return !!(a.length % 2);
    }

    // double
    if (a.length === 2 && a[0] === a[1]) {
        return true;
    }

    if (cachedValues.has(s)){
        return cachedValues.get(s);
    }

    // TODO: caching

    // deep calc
    let childs = nextPositions(s);
    let ans = !childs.some(isLosePosition);
    cachedValues.set(s, ans);
    //console.log('deepTest', s, childs, ans);
    return ans;
}

module.exports = isLosePosition;
