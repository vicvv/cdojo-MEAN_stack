// Finish the five methods attached to the _ object to create your own 
// custom library.  The purpose of this assignment 
// is to show how a simple JavaScript library can be made. 

var _ = {
    map: function(arr, map) {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++)
            arr2.push(map(arr[i]));
        return arr2;
    },
    filter: function(arr, filter) {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (filter(arr[i]))
                arr2.push(arr[i]);
        }
        return arr2;
    },

    reject: function(arr, reject) {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (!reject(arr[i]))
                arr2.push(arr[i]);
        }
        return arr2;
    },
    find: function(arr, find) {
        var arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            if (find(arr[i]))
                return arr[i];
        }
    },
    
    reduce: function(arr, reduce, action) {
        if (!action)
        action = arr[0];
        temp = 0;
        for (var i = 0; i < arr.length; i++) {
            temp = reduce(temp, arr[i]);
        }
        return temp;
    },
}
var map = _.map([1, 2, 3, 4, 5, 6], function(num) {
    return num * 3;
});
console.log(map);
var filter = _.filter([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});

console.log(find);
var reject = _.reject([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});
console.log(reject);
var reduce = _.reduce([1, 2, 3, 4, 5, 6], function(memo, num) {
    return num + memo;
}, 0);
console.log(reduce);

console.log(filter);
var find = _.find([1, 2, 3, 4, 5, 6], function(num) {
    return num % 2 == 0;
});