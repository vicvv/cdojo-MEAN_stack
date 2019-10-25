// Closures
// A closure is a function that is returned from another function. T
// his produces some interesting behavior. 

// Let's see a quick example:

// Here we have a function called "Outer"

function Outer() {
      // There is a count variable that is scoped to the function
  var count = 0;
      // There is an inner function that increments count and then console.logs it
  function inner() {
        // increment count
    count++;
        // console.log count
    console.log(count);
  }
      // return the inner function! We can return a function!
  return inner;
}
// counter is now the function returned from invoking Outer
var counter = Outer();
              // if we invoke the counter function
counter() ;    // this will console.log "1"
counter() ;    // this will console.log "2"
counter() ;    // this will console.log "3"
counter() ;    // this will console.log "4"
              // So that means that the count variable still exists! 
              // and it is being changed even though we aren't inside of the Outer function!
                   // What if we try to access count out here?
console.log(count) ;// doesn't work!


// What actually happened is that the count variable was instantiated when the 
// Outer function was called. Then since we returned the inner function, 
// it got stored in "counter". Now every time we called the counter function 
// it had access to the "enclosed" variables from the Outer function.

// Closures are tough to wrap your head around at first. Just remember that 
// the inner function in a closure is the one that is returned and accessed 
// outside of the function definition.