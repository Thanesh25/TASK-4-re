//Arrow Function  
  oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
 }
 oddNumbers([1,2,3,4,5,6,7,8])