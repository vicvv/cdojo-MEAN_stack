

function makePasta(pasta,MakeSause){
    console.log("Boiling Water");
    console.log("Putting"+pasta+"pasta in the water");
    var sause = MakeSause();
    console.log("Mixing sause");
    console.log("Pasta is done!");
    return pasta + "Pasta with " + sause + " sause! Viola!";
}

function makePesto(){
    console.log("Making Pesto");
    return "pesto";
}

function makeAlfredo(){
    console.log("Making Alfredo");
    return "alfredo";
}

console.log(makePasta("Pene",makePesto));
console.log(makePasta("Farfalle", makeAlfredo));