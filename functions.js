// ===========================================
// function statement || function declaration 
// function x () {
//     // function body
// };
// This way of creating a function is function statement 


// =============================================
// function expression 
// const y = function () {
    
// };
// We can assign a funcation into a variable also 
// function acts like a value

// =============================================
// difference between function statement and function expression 
// Major difference is hoisting. In such case we can call function 'x' even before intilize it.



// ===============================================
// Anonymous function 
// function () {

// };
// A function without it's name is anonymous function.
// Anonymous function does not have its own identity, that mean it will give a syntex error.
// Anonymous function looks like funciton statement and we can say it is funciton statement without name.
// Anonymous funciton are used where functions are used as value.


// ==================================================
// Named function expression 
// it is like same as function expression but in this case funciton has it's own name and it is assigned into a variable.
// const a = function xyz () {

// };
// we can call this function as 'a()'
// if we try to call it as 'xyz()', then it will give reference error as 'xyz is not defined', because this time this 'xyz' is not created in global scope.
// we can access this funciton inside the function 'a' only.



// ====================================================
// parameters and arguments 
// function abc (parameter) {
//     console.log(parameter);
// };
// abc('argument');



// ====================================================
// First class function 
// ability of function to use as a value and ....
// we can pass function inside other funciton as an argument.
// And we can also return a fuction form other funciton as output.
// function are also known as 'first class citizens', because of these ability 