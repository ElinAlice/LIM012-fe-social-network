const suma = (a, b) => a/b;

const resta = (a,callback) => a-callback(2,2);



console.log(resta(8,(a, b) => a/b));

