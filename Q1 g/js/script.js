var rotate = function (arr, numberOfShifts) {
  let tmp = 0;
  const leng = arr.length;
  numberOfShifts = numberOfShifts % leng;
  for (let i = 0; i < numberOfShifts; i++) {
     tmp = arr.pop();
     arr.unshift(tmp);
  }
  console.log(arr)
 return arr;
};
rotate([3,5,6,7,8],2)