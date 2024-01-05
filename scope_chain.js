// block 
// block is defined using {} curly braces 
// block is also known as compound statement 
// block is used to combine multiple javaScript statement into one group



// block scope --
// all the funcitons and variables, we can access inside this block 

{
    var a = 10;
    let b = 20;
    const c = 30;
} 


// shadowing --
// if we have a same named variable outside of this block and we redeclare that variable inside the block, then inner decleration will update the variable's value

var x = 5;
let y = 1;
{
    var x = 6;
    let y = 2;
    console.log(x);
    console.log(y);
}

// In case of var, if we try to access shadowed variable outside of block, than variable will give new value,  because both variables point to the same memory location 
console.log(x);
console.log(y);
// It works the same way in case of funciton scope.


// ===========================================
// illigle shadowing 
// let m = 4; 
// {
//     var m = 3;
// }
// if we want to shadow a varible using var which is declared using let or const, we can't shadow variable like this, because this will give syntex error as 'identifier a is already been declared' 



function xx () {
    console.log(tt);
};
let tt = 'ee'
xx()