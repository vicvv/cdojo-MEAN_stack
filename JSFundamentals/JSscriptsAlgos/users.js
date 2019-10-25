
// this is an assigment in which we print JSON objects elements.


users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },

    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },

    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ];

for (i=0; i < users.length; i++){

    console.log(users[i].fname, users[i].lname , " knows ", users[i].languages.join(' ')+'.');
    //console.log(users[0].fname," the ",users[0].lname , " also interesed in ");
    
    var s = users[i].fname + users[i].lname + " also interesed in ";
    for ( var key in users[i].interests){
        s = s + (users[i].interests[key].join(' ')+',');
    }
    s = s.replace(/,\s*$/, ".");
    console.log(s);
}
  
  