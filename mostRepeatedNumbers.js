// Return the most repeated numbers. Let the user choose the amount displayed

let arr = [1, 1, 2, 3, 5, 6, 5, 3, 2, 1, 1, 2, 3, 4, 3, 2, 2, 2, 7, 8, 6, 9, 7, 5];

const sortNums = (arr, qty) => {
 let map = {};
 let orderedArr = [];
 for (let num of arr) {
   map[num] ? map[num]++ : map[num] = 1
 }

 for (let key in map) {
   orderedArr.push([key, map[key]]);
 }
 console.log(orderedArr);

 orderedArr.sort((a,b)=> {
   return b[1] - a[1];
 })
 console.log(orderedArr);

 if (orderedArr.length < qty) {
   return("please insert a smaller index");
 }
 
 let podium = [];
 for (let i=0; i<qty; i++) {
   podium.push(orderedArr[i][0]);
 }
 return podium
}

sortNums(arr, 3);   