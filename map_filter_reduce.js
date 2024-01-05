// ==================== map ==================
//=================================================================
// map => when ever we want to transform an existing array
// It returns a new array
// 

// const ar = [1,2,3,4,5,6];

// function double (x) {
//     return x * 2;
// };

// function binary (x) {
//     return x.toString(2);
// };

// const resultDouble = ar.map(double);

// const resultBinary = ar.map(binary);

// const resultTriple = ar.map(function (x) {
//     return x * 3;
// });

// const plusOne = ar.map((e) => (e + 1));

// console.log(resultDouble);
// console.log(resultBinary);
// console.log(resultTriple);
// console.log(plusOne);


//=================================================================
// =================== filter ======================
//=================================================================

// filter function is basically use to filter elements inside the array
// It returns a new arra(y and does not modify existing array 

// const ar = [1,2,3,4,5,6,7,8,9,10];

// function isOdd (x) {
//     // return x % 2 !== 0;
//     return x % 2;
// };
// const oddValue = ar.filter(isOdd);
// console.log(oddValue);

// function isEven (x) {
//     return x % 2 === 0;
// };
// const evenValue = ar.filter(isEven);
// console.log(evenValue);

// const greaterThanFour = ar.filter((e) => e > 4);
// console.log(greaterThanFour);

// const lessThanFive = ar.filter(function (x) {
//     return x < 5;
// });
// console.log(lessThanFive);





//=================================================================
// ===================== reduce ====================
//=================================================================
// reduce function is used whenever we have an array of numbers and want to come up with a single value as result 
// reduce function iterates each and every element of given array and parameter 'currnet' represents the current element (value)  
// and the firse parameter 'accumulator' accumulate the result
// we can give initial value for accumulator in this reduce function 

// const ar = [1, 2, 3, 4, 9, 8, 7, 11, 6, 5, 10];

// const sum = ar.reduce(function (accumulator, current) {
//     accumulator = accumulator + current;
//     return accumulator;
// });
// console.log(sum);

// const product = ar.reduce((acc, curr) => {
//     acc *= curr;
//     return acc;
// });
// console.log(product);

// const maxValue = ar.reduce((acc, curr) => {
//     console.log(acc);
//     if (acc < curr) {
//         acc = curr;
//     };
//     return acc;
// }, 0);
// console.log(maxValue);



//=================================================
// ======= some more examples ===============

const users = [
    {fname: "akshay", lname: "saini", age: 26},
    {fname: "donald", lname: "trump", age: 75},
    {fname: "elon", lname: "musk", age: 50},
    {fname: "deepika", lname: "padukone", age: 26}
];

//====================
// // we have list out the full name of users 
// // result will look like ["akshay saini", "donald trump", "elon musk", "deepika padukone"]

// const result = users.map(function (e) {
//     return `${e.fname} ${e.lname}`
// });
// console.log(result);


//======================
// we have to find out that how many users have a particular age
// and we have to return result like {26: 2, 75: 1, 50: 1}

// using object 
// const result = users.reduce((accumulator, current) => {
//     const x = current.age;
//     if (accumulator[x]) {
//         accumulator[x] = accumulator[x] + 1;
//     } else {
//         accumulator[x] = 1;
//     };
//     return accumulator;
// }, {}); 
// console.log(result);

// using map
// const res = users.reduce((acc, cur) => {
//     const x = cur.age;
//     if (acc.has(x)) {
//         acc.set(x, acc.get(x) + 1);
//     } else {
//         acc.set(x, 1);
//     };
//     return acc;
// }, new Map());
// console.log(res);


//===================
// we have to find out users whose age is less than 30
// we have to return users array with their first name

// using filter and map function's chain 
// const result = users.filter((e) => (e.age < 30)).map((e) => e.fname);
// console.log(result);

// using reduce function 
// const result = users.reduce((acc, cur) => {
//     if (cur.age < 30) {
//         acc.push(cur.fname);
//     };
//     return acc;
// },[]);
// console.log(result);