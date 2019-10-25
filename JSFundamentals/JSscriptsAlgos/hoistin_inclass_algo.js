var first = "vanilla latte";
var second ="cookie";
console.log(swap([first, second]));

function swap(items){
    first = items[1];
     second = items[0];
    return ([first, second]);
}

console.log("second time",first,second);