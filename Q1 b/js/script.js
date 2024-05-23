//2)Convert all the strings to title caps in a string array
   
 //anonymous : 
 function convertToTitleCase(str) {
    if (!str) {
        return ""
    }
    return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
  }
  
  console.log(convertToTitleCase('welcome every one'));
  console.log(convertToTitleCase(' i am thaneshwar'));