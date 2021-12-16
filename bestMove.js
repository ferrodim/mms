// this is All-In-One version. To help run it outside node.js environment
// run as bestMove([1,2,4,5])

const cachedValues = new Map();
cachedValues.set('', false);
cachedValues.set('1', true);

function bestMove(a){
    let childs = nextPositions(a);
    let bestMove = childs.find(isLosePosition);

    return bestMove ? bestMove.split(',') : 'Ви у програшній позиції';
}

function isLosePosition(pos) {
    let a = (typeof pos === 'string') ? pos.split(',').sort() : pos;
    const s = a.join(',');

    if (cachedValues.has(s)){
        return cachedValues.get(s);
    }

    let childs = nextPositions(s);
    let ans = !childs.some(isLosePosition);
    cachedValues.set(s, ans);

    return ans;
}

function nextPositions(s){
    let uniquePositions = new Set();
    let a = typeof s === 'string' ? s.split(',') : s;

    for (let i=0; i<a.length; i++){ // what item to modify
        for (let j=a[i]-1; j>=0; j--){ // what new value
            let b = [...a];
            b[i] = j;
            let c = b.sort().filter(a=>a).join();
            uniquePositions.add(c);
        }
    }

    return [...uniquePositions].sort();
}

if (module) module.exports = bestMove; // node.js