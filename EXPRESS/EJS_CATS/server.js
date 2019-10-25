class Cat{
    constructor(name, age, favs1, favs2, image){
        this.name = name;
        this.age = age;
        this.favs1 = favs1;
        this.favs2 = favs2;
        this.image=image;
    }

}

const cat1 = new Cat("topa",5,"kitchen","table",'cat1.jpeg');
const cat2 = new Cat("hester", 8, "sofa", "shoulder",'cat2.jpeg');
const cat3 = new Cat("moss", 2, 'chair','basket','cat3.jpeg');

cat_array = [cat1,cat2,cat3];

const express = require("express");
const app = express();
//app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//app.use( express.static( "images" ) );
app.use(express.static(__dirname + "/static"));


app.get('/cats', (req, response) => {
   response.render('cats');
});

app.get("/cat/:id" , (req, response) => {   
    response.render('details', {cat: cat_array[parseInt(req.params.id) - 1]});
});


app.listen(8000, () => console.log("listening on port 8000"));