const nextPositions = require('./nextPositions');

test('nextPositions', ()=>{
    expect(nextPositions("2")).toEqual(["", "1"]);
    expect(nextPositions("5")).toEqual(["", "1", "2", '3', '4']);
    expect(nextPositions("1,1")).toEqual(["1"]);
    expect(nextPositions("1,2,3")).toEqual(["1,1,2","1,1,3","1,2","1,2,2","1,3","2,3"]);
    expect(nextPositions("2,2")).toEqual(["1,2", "2"]);
});