
// number of operation = number of elements in array, so it is N
function printArray(arr){
    count = 0;
    for(var i=0; i<arr.length; i++){
        count += 1;
        //console.log(arr[i]);
    }
    return (count);
}

count = printArray([1,2,3]);
console.log("Number of operation in printArray", count);


// N=1
function findNth(arr, n){
        console.log(arr[n]);
}

// N/2
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}

console.log(halving(5));


// not sure about below. If I porvide 5 as input I get 30 operations...
function identityMatrix(n){
    var matrix = [];
    count = 0;
    for(var i=0; i < n; i++){
        var row = [];
        count += 1;
        for(var j=0; j < n; j++){
            count += 1;
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return count;
}

console.log(identityMatrix(5));