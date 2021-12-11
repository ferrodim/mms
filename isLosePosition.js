const LOSE_POSITIONS = ['1', '1,1,1', '3,2,1'];

// array
function isLosePosition(a){
  const strRepresentation = a.sort().join(',');
  if (LOSE_POSITIONS.includes(strRepresentation)){
     return true;
  }
  
  // all 1's
  if (a[0] === 1){
     return !! (a.length % 2);
  }
  
  // double
  if (a.length === 2  && a[0] === a[1]){
     return true;
  }
  
  return false;
  
}

module.exports = isLosePosition;
