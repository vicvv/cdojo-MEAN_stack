// Immediate Functions
// The immediate function pattern is a syntax that enables you to execute a 
// function as soon as it is defined.

// This pattern is useful because of the sandbox it provides for your 
// initialization code - the code that you only need to run once at the 
// beginning of your application to set up your environment for the rest of 
// your code, such as attaching event handlers. Since we don’t need to repeat 
// this code, it’s unnecessary to create a named function.

(
    function() {
   console.log( "I'm an immediate function!" );
}()

);


//OR

(function() {
   console.log( "I'm an immediate function!" );
})();


// () is used to invoke a function. ( ) helps define the order of operations. 
// (myfunction)<-- do this first (myfunction)() <-- create the function before 
//doing anything else and then invoke the function! Alternative Syntax: (myfunction()) 
//<-- create and run the function before doing anything else.

// Passing Arguments to Immediate Functions

(function (param1, param2){
   console.log( "I'm an immediate function!" );
}) ( arg1, arg2 ) ;


// A common pattern when writing code that should be able to 
// run on non-browser platforms, or when speed is important, 
// is passing the global object as an argument. This creates a 
// local copy of the global object inside the function, which results in 
// faster lookup times.

// Example:

(function (global) {
   console.log( window );               // logs the window object
   console.log( global );               // logs the window object, but faster!
}) ( window ) ;


// Some Benefits:

// It reduces the number of global variables and mitigates variable 
// name pollution.Features are self-contained units, resulting in easier testing.
// Most JavaScript libraries use immediate functions, which helps prevent
// the libraries' private variables and functions from contaminating the user 
// of the library’s name space:

// For example, you had the following code:

   var a = "Hi";
   var b = 38;
   function test() {
     //some code here
   }
   function add() {
     //some code here
   }
   test();

// If this was how you wrote your javascript library (basically codes 
// where others can use your codes/methods), if someone else also 
// used a variable a, b, or had functions named test or add, this 
// would cause conflicts and cause lots of problems.

// Therefore, to eliminate these variables/methods being exposed outside 
// and to contain its scoping, you could wrap them inside an immediate function. 
// Once you wrap these inside an immediate function, these variables/methods 
// are no longer global (due to the function scoping of Javascript).

// This is exactly why JavaScript libraries use immediate functions to scope 
// their variables/functions inside itself.

// Example: http://code.jquery.com/jquery-1.11.0.js . The jquery library 
//uses immediate functions!

// Our a,b test, add code rewritten:

( function() {
   var a = "Hi";
   var b = 38;
   function test() {
     //some codes here
   }
   function add() {
     //some codes here
   }
   test();
}());