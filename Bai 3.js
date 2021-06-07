let arr = ['one', 'two', 'three', 'one','one', 'four', 'five', 'four', 'five'];
let arr1 = [1,2,3,3,4,5,4,4,4,5,5];
let output = [...new Set(arr)];
let output1 = [...new Set(arr1)];
console.log(output);
console.log(output1);