//ES6 map,filter,reduce

let nums = [1, 2, 3, 4, 5]; //in js functin map
let result = nums.map(function(n) {
    return n + 1;
})
console.log(result);

let mapfun = [1, 2, 3, 4]; //in arrow map funcrion
let mapResult = mapfun.map(n => n + 1);
console.log(mapResult);

let filNum = [1, 2, 3, 4, 5]; //in js filter function
let filResult = filNum.filter(function(n) {
    return n % 2;
})
console.log(filResult);

let arrFilter = [1, 2, 3, 4, 5]; //in arrow filter function
let arrResult = arrFilter.filter(n => n % 2);
console.log(arrResult);