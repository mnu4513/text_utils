const api = 'https://api.github.com/users/mnu4513';

const user = fetch(api);

const data1 = user.then(data => {
    console.log(data);
});

// A promise is an object, representing the eventual completion or failure of an asynchronous operation.

// Promise object is a placeholder which will be filled leter with value, untill we receive a response from an asynchronous operation.






// callback hell 
// inversion of control