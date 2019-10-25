// Braces Valid
// Objectives:
// Exercise those logic muscles!
// Use data structures (arrays, objects) effectively to complete the challenge.
// Given a string, write a function that will determine whether the braces  - 
//including parentheses (), square brackets [], and curly brackets {} - 
//within the string are valid. That means that any braces within other 
//braces must close before the outer set closes.

// HINT: Keep in mind that you may use arrays and objects to keep your information organized!

// Example: bracesValid("{{()}}[]") returns true because the 
//inner braces close before the outer braces. Each opening brace has a matching closing brace.

// Example:  bracesValid("{(})") returns false because the curly braces 
//close before the parentheses, which starts within the curly braces, had a chance to close.


// Algorithm:

// Declare a character stack S.
// Now traverse the expression string exp.
// If the current character is a starting bracket (‘(‘ or ‘{‘ or ‘[‘) then push it to stack.
// If the current character is a closing bracket (‘)’ or ‘}’ or ‘]’) then pop from stack and if the popped character is the matching starting bracket then fine else parenthesis are not balanced.
// After compl

// Stack is a linear data structure which follows a particular order in which the operations are performed. 
// The order may be LIFO(Last In First Out) or FILO(First In Last Out).

function bracesValid(mystr){
    var st = [];
    var myin = [ "(","[","{"];
    var myout = [ ")","]","}"];
    var check ="";
    var test = 1;

    for (i=0; i < mystr.length; i++){
        //console.log(mystr[i]);
        if (myin.includes(mystr[i])){
            st.push(mystr[i]);
            //console.log(mystr[i], st);
        }
        if (myout.includes(mystr[i])){
            check = st.pop();
            
            if (check == '(' &&  mystr[i] == ')'){console.log('match!');  test = 0;}
            else if (check == '{' &&  mystr[i] == '}') {console.log('match!');test = 0;}
            else if (check == '[' &&  mystr[i] == ''){console.log('match!');test = 0;}
        }
    }
    if (test == 0 ){
        console.log("Its a match!","Stack size: ", st.length);
    }
    else{
        console.log("No match!","Stack size: ", st.length);
    }
}


bracesValid("{{()}}[]");
bracesValid("{(})");


