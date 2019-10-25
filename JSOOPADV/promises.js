// Promises
// JavaScript runs synchronously: After the interpreter hoists variables and 
// functions to the top of their scope, JavaScript runs code-block by code-block 
// (which as a general rule can be thought of as line-by-line). This little tab 
// is going to show us how to get out of that synchronous cycle. 
// (This is how that event-loop can set up a queue of events in Node). 
// It also allows us to run code that might take a bit of time to run, 
// without completely stalling our program (AJAX calls to APIs, DB queries etc).



// Promises and Callbacks allow us to make sure that we have our data before moving on.
//  A promise says to the interpreter: “I promise to give you data back, so you 
//  can move on with your code.” (Just like your friends promise to pay you back!). 
//  This is what we had done with our callback above. A number of libraries exist 
//  to make promises in ES5 (q is a popular one), but in ES6 they added promises to 
//  the core language


function getStaffFromdb(callback){
    var data;
    var myTimer = setTimeout(function(){
        if (typeof(callback) == 'function'){
            //pretend that this was a data from db
            data = [{name: 'Todd'}, {name : 'Vicky'}, {name: 'Laura'}];
            callback(data);
        }
         
    }, 1000);
    return data;
}


// //simulation failure
// function requestDataFromDb(){
//     var data = getStaffFromdb();
//     console.log("Data:",data);  ///<-- gonna be undeff
// }


function requestDataFromDb(){
    var data = getStaffFromdb(function myCallback(data){
        console.log(data, "ASynchronous");
        for (var i = 0; i<data.length; i++){
            console.log(data[i].name);
        }
    });
    console.log(data, "Synchronous");
}


function catchCat(){
    console.log("i got that cat!!");
}

requestDataFromDb();
console.log("hi");
catchCat();