
function countUpBy(countTo, countBy) {
  if (countTo === "" || countBy === ""){
    return NaN;
  } else if (countTo === countBy){
    return countTo;
  } 

  let countArray = [];
  for (let i = countBy; i <= countTo; i+= countBy) {
    countArray.push(i);
  }
  
  return countArray;

  }