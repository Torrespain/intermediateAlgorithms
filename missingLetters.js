// Intermediate Algorithm Scripting: Missing letters
// Find the missing letter in the passed letter range and return it.

function fearNotLetter(str) {
 let abc = "abcdefghijklmnopqrstuvwxyz";
 let start = abc.indexOf(str[0]);
 let last = abc.indexOf(str[str.length-1]);
 let resultArr = [];

 let compareTo = (abc.slice(start, last+1));

 let counter = 0;
 for (let i=0; i<compareTo.length-1; i++) {
   if (str[i]!==compareTo[counter]) {
    resultArr.push(compareTo[i]);
   }
   counter++;
 }
 if (resultArr.length>0) {
   return resultArr;
 }
 return undefined;
}

fearNotLetter("af");