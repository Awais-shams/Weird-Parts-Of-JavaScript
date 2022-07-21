// console.log(a)
// console.log(b);
// let a=6;

// var b=7;

// check();


// var awais=function check(){
    
//     var c=6;

//     console.log(c);
// }

// {
//     let a=6;

//     const b=7;
    
//     var c=8;
    
//     var c=9;
    
//     console.log(a);
// console.log(b);
//     {
//         var c=99;
//         console.log(a)
//     }
// }



// console.log(c);



// // Actual Concepts of Callbacks

// function doSomething(call){
//     for(let i=0 ; i<3 ; i++){
//         console.log(i,"Anonymous Identity is Learning The Javascript");
//     }
//     let a=80;
//     call(a);
// }

// doSomething(function(x){
//     console.log(x,": This is callback");
//     for(let i=0 ; i<5; i++){
//         console.log("Functions are the heart of javascript");
//     }
// })



// // what are closures


// setTimeout(function a(){
//     console.log("first async calll");
// },1000)

// setTimeout(function a(){
//     console.log("second async calll");
// },1000)

// setTimeout(function a(){
//     console.log("Third async calll");
// },1000)

// setTimeout(function a(){
//     console.log("Fourth async calll");
// },1000)


function awais(callback){
    let a=b=7;
    let x=a+b;
    callback(x)
}


function  foo(){
     return awais(function(X){
        console.log("Is this Really a Foo Function: ",X);
    })
}

foo()