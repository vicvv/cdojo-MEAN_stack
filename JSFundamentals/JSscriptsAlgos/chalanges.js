
//Write a function that accepts an array of student objects, 
//as shown below. Print all of the students' names and their cohorts.


var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


function printStudenst(arr){
    for(i=0; i<arr.length; i++){
        console.log("Name ", arr[i].name, "Cohort ",arr[i].cohort);
        //console.log(i,arr[i].name, arr[i].cohort, arr[i]);
    }
}

printStudenst(students);

//Write a function that accepts an object of users divided into 
//employees and managers, and display the number of characters 
//per employee/manager's name, as shown below, and logs the 
//information to the console.


var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 for (var key in users){
    console.log(key.toUpperCase());
    for (i=0; i < users[key].length; i++){
        console.log(i,users[key][i].first_name, users[key][i].last_name, users[key][i].first_name.length + users[key][i].last_name.length);
    }
 }
