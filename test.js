
// Function along with its lexical scope forms a closure 

// function x () {
// 	var a = 7;
// 	function y () {
// 		console.log(a);
// 	};
// 	// y();
//     a = 100;
//     return y;
// };
// const z = x();
// console.log(z());

// Over here function y is forming closure.

function m () {
    for (var i = 0; i < 6; i++) {
        function close (x) {
            setTimeout(function () {
                console.log(x);
            }, x * 1000); 
        };
        close(i);
    }; 
    console.log('okay');
};
m();

// function m () {
//     for (var i = 0; i < 6; i++) {
//         console.log(i);
//     };
//     console.log('okay');
// };
// m();
