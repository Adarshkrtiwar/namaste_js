// console.log("Hello world ");

// var fullName="Adarsh";
// var isLoggedIn = true;
// var loggedCount = 34 ;
// var paymentMode = null;


// setTimeout(function (){
// console.log("timer ");
// } , 1000)

// setTimeout(()=>{console.log("Timer 2 ")} , 3000)


// function x(y){
//     console.log('x');
//     y();
// }
// x(function y(){
//     console.log('y');
// })

// let count = 0 ; 
// document.getElementById('click').addEventListener('click', function xyz(){
//     console.log('button is clicked ' , ++count );
// });

// //Asynchronous javascript and evenrt loop from scretch 




// console.log("Start ");

// setTimeout(()=>{

//     console.log("Timer functions");
// },0);

// console.log("End");


// console.log("Start");
// document.getElementById('click').addEventListener('click', ()=> {
//     console.log("callback");
// });
// console.log("End ")



// console.log("Start");
// setTimeout(()=>{console.log("timer")},0);
// Promise.resolve('promise').then(res=>console.log(res));

// console.log("End")


// console.log("Hello");
// setTimeout(()=>{
//     console.log("Timer");
// } , 0);
// Promise.reject('error').catch(e=> console.log(e));

// console.log("end")


function x(){
    console.log('Hi');
}

function y(x){
    x();
}
y(x);


const radius = [1,2,3,4,5];
const output=[];
const calculateArea = function(radius){
    for(let i = 0 ; i < radius.length ; i++){
  output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calculateArea(radius));

function calculateCircumference(){
    const out=[];
    for(let i = 0 ; i < radius.length ; i++){
        out.push( 2 * Math.PI * radius[i]);
    }
    return out;
}

console.log(calculateCircumference(radius));


//Polyfill of map function in array 
Array.prototype.calculate = function (ops){
    const out1=[];
    for(let i = 0 ; i<this.length ; i++){
        out1.push(ops(this[i]));
    }
    return out1;
}


// Map , filter , and reduce method on array 
// Map fucntion is used to transform a array . the map() method create a new array with the result of the calling a function for every array element 


// const arr = [1,2,3,4];
//  const arr1 = arr.map(triple);
// function double(x){
//     return x * x ;

// }
// function triple(x){
//     return x*x*x;
// }
// console.log(arr);
// console.log(arr1);


// Filter function 

//arr.filter()

// const arr = [1,2,3,2,3,1,2];
// const fil= arr.filter(isOdd);
// function isOdd(x){
//     return x%2;
// }

// console.log(arr);
// console.log(fil);


// Reduce function 


const arr = [1,2,3,4,3];
function findSum (arr){
    let sum = 0 ; 
    for(let i = 0 ; i<arr.length ; i++){
        sum += arr[i];
    }
    return sum ;

}

const b = findSum(arr);
console.log(b);


const sumofArr= arr.reduce(function (acc , current){
    acc= acc+ current
    return acc;
} ,0);

console.log(sumofArr);


const user  = fetch('https://api.github.com/users/alok722');

console.log(user);
// user.then(res=>console.log(res));
const [a,xy,...c] = [1,2,3,];
console.log(a);
const obj = {
    1:'mumbai',
    2:'pune'
}
const obj1 = obj;
obj1[1] = 'Delhi';

// console.log(obj[1]);
// console.log(obj1[1]);

const arry = [1,2,3,3];
const array=arry;
array[2]=43;
const bary = [...arry];
bary[2]=34;
// console.log(...array);
// console.log(bary)
// console.log(arry);



const str = 'Adarsh';
const revStr = str.toLocaleLowerCase().split('').reverse().join('');

// console.log(revStr);








