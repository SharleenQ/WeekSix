// 29th March 2020 -

// Call Stack

// What is the call stack?
// At the most basic level, a call stack is a data structure that uses the Last In, First Out 
// (LIFO) principle to temporarily store and manage function invocation (call).
function greet() {
    return "hi";
}
    console.log('whats up')

    const name = 'kenny'       // not called yet as its got no console.log
    const anotherName = 'bob'  // not called yet as its got no console.log

    console.log(greet())
    
// function firstFunction(fun){
//     throw new Error('Stack Trace Error');
//     }
//     function secondFunction(time){
//     firstFunction();
//     }
//     function thirdFunction(at the){
//     secondFunction();
//     }
//     thirdFunction();                    //which code get executed first ?


// // Manage function invocation (call):


//The call stack maintains a record of the position of each stack frame.

//It knows the next function to be executed (and will remove it after execution).

//This is what makes code execution in JavaScript synchronous.
// Think of yourself standing on a queue, in a grocery store cash point.
// You can only be attended to after the person in front of you have been attended to.
// That’s synchronous.
// This is what we mean by “manage function invocation”.

// //The key takeaways from the call stack are:
// 1. It is single-threaded. Meaning it can only do one thing at a time.
// 2. Code execution is synchronous.
// 3. A function invocation creates a stack frame that occupies a temporary memory.
// 4. It works as a LIFO — Last In, First Out data structure.

//  Javascript And memory

//y// declare some variables and initialize them
// var a = 5
// let b = 'xy'
// const c = true

// // assign new values
// a = 6
// b = b + 'z'
// c = false // TypeError: Assignment to constant variable

// As programmers, declaring variables, initializing them (or not), and assigning them new values later on is something we do on a daily basis.
// But what actually happens when do this? How does JavaScript in particular handle such basic functionality internally? And more importantly, how does it benefit us as programmers to understand
 // the underlying minutiae of JavaScript?

 // Primitives in JAvascript
// let myNumber = 23 

// address: 0012ccgwh80  // also NEWVAR
// value: 23

// Since myNumber equals the memory address “0012CCGWH80”, 
// assigning it to newVar assigns “0012CCGWH80” to newVar.

//my number = myNumber + 1 

//heres another example
// let myString = 'abc'
// myString = myString + 'd'

// what is the outcome ? =new location in the memory address
// JavaScript’s memory model: the call stack and the heap

//call stack :
// myString = 'abcd'
// newVar = 23
// myNumber = 24

// heap : 

// The heap is where non-primitives are stored. The key difference is that the heap can store unordered data that can grow
// dynamically—perfect for arrays and objects.

//how are non primitives stored ? reference , Garbage Collection 

// what is the meaning of CHANGE ??

//A mistake is to interpret “change” as a change in value. A JS programmer who interprets
// “change” this way will do something like this:


//let numbers = []
// sum = 1 + 2 + 3 + 4 + 5let numbers = []
// numbers.push(1)
// numbers.push(2)
// numbers.push(3)
// numbers.push(4)
// numbers.push(5)
 
// console.log(numbers   // array 

//const myArray = [] convert to non array

// data manipulation my Array = ['a']
