
function countUpBy(countTo, countBy) {
  if (countTo === "" || countBy === "" || isNaN(countTo) || isNaN(countBy)  ){
    return NaN;
  } else if (countTo === countBy){
    return countTo;
  } else if (countBy > countTo){
    return null;
  }


  let countArray = [];
  for (let i = parseInt(countBy); i <= parseInt(countTo); i+= parseInt(countBy)) {
    countArray.push(i);
  }
  
  return countArray;

  }