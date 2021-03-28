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
