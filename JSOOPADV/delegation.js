
// Callbacks are used to delegate functionality
// If a function takes a callback, that callback can do a myriad of things. 
// This allows us to use our callback to be delegated to a specific task.

// Coding Dojo uses delegation: We have multiple bootcamp leaders who all 
// (though they might seem like clones) have different strengths 
// (let’s call them delegates). If Coding Dojo needed a bootcamp leader 
// to lead a new Java Android class, the company wouldn’t just grab anyone. 
// It rather would delegate a bootcamp leader who knows Java Android.

// The code/pseudocode might look like this:

function lanLead(lang, leader){
    var outcome = leader(lang);
    console.log(outcome);
}

function Laura(language){
    var languages= {
        'english' : 'awesome',
        'spanish' :'awesome',
    }

    if (languages[language]){
        return languages[language];
    }
    else{
        return "maybe later!";
    }
}

function Vicky(language){
    var languages = {
        'ukrainian': 'awesome',
        'englush': 'ok',
        'german' : 'maybe',
    }
    if (languages[language]){
        return languages[language];
    }
    else{
        return "maybe later?";
    }
}

lanLead('german', Laura);
lanLead('spanish', Laura);
lanLead('spanish', Vicky);

// another example of the function that prints result of another function:

// This is a function that just prints the result of another list of instructions
function printResult(doSomething) {
    var result = doSomething();         // store the return value of the callback parameter
    console.log(result);                // print the result!
   }
   printResult(function returnFive(){ return 5; }); // this should print "5"


//   Pro Tip: JavaScript allows us to pass anonymous functions 
//(e.g. remove returnFive from above and it will still work), but 
//when debugging, giving them a name can really help!

//    Last Example: The underscore library uses delegation exceptionally 
//effectively: Take a look here: underscore.js
   
//    Let's recreate the 'each' method using underscore!
   
   function each(arr, callback) {
     // loop through the array
     for(var i = 0; i < arr.length; i++) {
       callback(arr[i]); // invoking the callback many times... delegation!
     }
   }
   // call the each function
   each([1,2,3], function(num) { alert(num + " I am from the callback!"); }) //so many alerts!
   