module.exports = function (){
    return {
     add: function(num1, num2){
          console.log("the sum is:", num1 + num2);
      },
      multiply: function(num1, num2) {
          console.log("the product is:", num1 * num2);
      },
      square: function(num) {
          console.log("the square is:", num ** 2);
      },
      random: function(min, max) {
          res = Math.floor(Math.random() * (+max - +min)) + min; 
          console.log("the random is:", res );
      },
      greet: function(){
        console.log("we are now using a module!");
        },
    };
  };
  