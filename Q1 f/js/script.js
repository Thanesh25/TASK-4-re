//Anonymous Function :
 const b=function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  b([2,3,4,4,3,1,7,8])