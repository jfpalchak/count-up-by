
function countToBy(countTo=0, countBy=1) {
  if (countTo === "" || countBy === "" || isNaN(countTo) || isNaN(countBy)  ){
    return NaN;
  } else if (countTo === countBy){
    return countTo;
  } else if (countBy > countTo){
    return null;
  } else if (countTo <= 0 || countBy <= 0){
    return null;
  } 
  

  let countArray = [];
  for (let i = parseFloat(countBy); i <= parseFloat(countTo); i+= parseFloat(countBy)) {
    countArray.push(i);
  }
  
  return countArray;

  }