
function coinChange(num){
    
    var dollars = Math.floor(num/100);
    var quarters = Math.floor((num - dollars * 100)/25);
    var dimes = Math.floor((num-dollars*100 - quarters*25)/10);
    var fives = Math.floor((num-dollars*100 - quarters*25 - dimes*10)/5);
    var pennies = Math.floor((num-dollars*100 - quarters*25 - dimes*10- fives*5)/1);
   
    var dict ={
        "dollars":dollars,
        "quarters":quarters,
        "dimes":dimes,
        "fives":fives,
        "pennies": pennies,
    };

    for (var key in dict){
        if (dict[key] != 0){
            console.log(key, dict[key]);
        }
    }
}

coinChange(312);
coinChange(78);
