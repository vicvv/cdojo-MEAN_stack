
//In bubble sort we compare current value with the next value in the 
//inner loop. To figure out if input array is already sorted we can put a
//flag to detect the swaps. If no swaps detected in the run we can break 

function BBSort(arr){
    count = 0;
    flag = 0;
    for (i=0; i < arr.length; i++){
        count += 1;
        for (j=0; j < arr.length; j++){
            count += 1;
            
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                flag += 1;
            }
            
        }
        if (!flag){
           break;
        }
    }
    console.log("Total oparations:", count);

    return (arr);
}

var arr = [1,2,3,4,5,6,7,8,9,10];
console.log(BBSort(arr));
//Total oparations: 11 with the flag. Without the flag it is 110 or n^2
