// let student=new Object()

// student={
//     firstName:"awais shams",
//     lastName:"Shams ud din",
//     id:2880,
//     Department:{
//         name:"Mern Stack",
//         building:"G3",
//         floor:1
//     }
// }



const student={
    firstName:"awais shams",
    lastName:"Shams ud din",
    id:2880,
    Department:{
        name:"Mern Stack",
        building:"G3",
        floor:1
    }
}


console.log(student.Department.building)



student.firstName="uzair"
let d=student.firstName
d.st

console.log(d)
console.log(student.firstName)



let obj=new Object()
obj={
    first:"awais"
}

console.log(obj)


const byRef={
    name:"mohsin",
    id:2819,
    department:"MERN Stack",
    address:{},
    newSpace:{}
}


console.log(byRef)

byRef.address.street="Azeem colony"

const c={greetings:"Awaissssss"}

byRef.newSpace=c;


console.log(byRef)


let x;

function foo(num){
    x=num
    console.log("Foo: ",x)
}


foo(3)
console.log(x)


function thisKeywordss(){
    // console.log(this)
    this.awais="hello world"
}

// thisKeywordss()


(function(){
    console.log("Immediately invoked function")
}())

function foobar(challenge){

    console.log("foobar: ",challenge)
    return function foobar2(challenge){
        console.log("foobar2: ",challenge)
    }
}

let exm=foobar("hi")
exm("fuck javascript")



// call back functions

function someWork(num){
    let a=num;
    console.log("Hell! this function is invoked")
}


someWork(5,function(){
    console.log("hola this is call back function")
})


function mapForEach(arr1,fn){
    let arr_1=[];
    for(let i=0 ; i>arr1.length ; i++){
        arr_1.push(fn(arr1[i]));
    }

    return arr_1;
}

const  arr=[1,2,3,4,5,6,7,8,9];


const checkLimit=mapForEach(arr,function(item){
    return item>2;
}); 

console.log("checkLimit: ",checkLimit)



function softwareTester(num,call){
    console.log("this is functioin invoked call: ",num);
    call()
}

softwareTester(6,function(){
    console.log("This is  callback function")
})



function arrManipulation(arr,foo){
    let arr_1=[]
    for(let i=0 ; i<arr.length ; i++){
        arr_1.push(foo(arr[i]));
    }

    return arr_1
}

let checkData=arrManipulation(arr,function(items){
    return items>2;
})

console.log(checkData)



console.log(man);
console.log(woman);
let man=6;
var woman=5;