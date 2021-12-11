
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

module.exports = nextPositions;