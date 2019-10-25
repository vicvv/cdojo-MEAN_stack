
$(document).ready(function(){
    $('.card-text').click(function(){
        //console.log(this.id);
        var cur_id = this.id;
        var category_id = (this.id).split('-');
        console.log(category_id[0], category_id[1]);
        $.get("https://opentdb.com/api.php?amount=10&category=" + category_id[1],function(data){

            category = data.results;
            console.log(category[0].question);
            console.log(cur_id );
            let answers = []
            for(let i = 0; i < category[0].incorrect_answers.length; i++){
                answers.push(category[0].incorrect_answers[i])
            }
            answers.push(category[0].correct_answer);
            console.log("unsorted array", answers);
            answers.sort(() => Math.random() - 0.5);
            console.log("sorted array", answers);

            let innerReplacement = "" + category[0].question;
            for(let i = 0; i < answers.length; i++){
                innerReplacement += '<div><input type="radio" id="huey" name="answer" id="option0" value="huey" ><label for="huey">'+answers[i]+'</label></div>'
            }
            $("#" + cur_id).html(innerReplacement);
            // $("#"+ cur_id ).replaceWith(category[0].question + '<br>' +
            // '<div><input type="radio" id="huey" name="answer" id="option0" value="huey" ><label for="huey">'+category[0].incorrect_answers[0]+'</label></div>' +
            // '<div><input type="radio" id="dewey" name="answer" value="dewey"><label for="dewey">'+category[0].incorrect_answers[1]+'</label></div>' + 
            // '<div><input type="radio" id="dewey" name="answer" value="dewey"><label for="dewey">'+category[0].incorrect_answers[2]+'</label></div>' +
            // '<div><input type="radio" id="dewey" name="answer" value="dewey"><label for="dewey">'+category[0].correct_answer+'</label></div>'
            // ) ;

        });


    });
});
    

         






// $(document).ready(function(){

//     $.get("https://opentdb.com/api.php?amount=10&category=22", function(gdata){
//         geography=gdata.results;
//     });

//     $.get("https://opentdb.com/api.php?amount=10&category=29", function(edata){

//         enterntaiment = edata.results;
//     });

//     $.get("https://opentdb.com/api.php?amount=10&category=17", function(sdata){

//         science=sdata.results;

//     });

//     //geography

//     $("#g1").click(function(){
//         $("#g1").html(
//         "<div class='center'><p>"+geography[0].question+ "</p>" +
//         "<div><input type='radio' name='incorrect 'value='incorrect checked><label >"
//         + geography[0].incorrect_answers[0]+ "</label></div>" +
            
//         "<label><input type='radio' name='options' id='option0'>"+geography[0].incorrect_answers[0]+ "</label><br>"+
//         "<label><input type='radio' name='options' id='option1'>"+geography[0].incorrect_answers[1]+"</label><br>"+
//         "<label><input type='radio' name='options' id='option2'>"+geography[0].correct_answer+"</label><br>"+
//         "<label><input type='radio' name='options' id='option3'>"+geography[0].incorrect_answers[2]+"</label>"+
//         "</div>");
//     });

//     $("#g2").click(function(){
//         $("#g2").html("<div class='center'><p>"+geography[1].question+"</p><p>"+
//         geography[1].incorrect_answers[0]+"</p><p>"+geography[1].incorrect_answers[1]+
//         "</p><p>"+geography[1].correct_answer+"</p><p>"+geography[1].incorrect_answers[2]+"</p></div>");
//     });

//     $("#g3").click(function(){
//         $("#g3").html("<div class='center'><p>"+geography[2].question+"</p><p>"+
//         geography[2].incorrect_answers[0]+"</p><p>"+geography[2].incorrect_answers[1]+
//         "</p><p>"+geography[2].correct_answer+"</p><p>"+geography[2].incorrect_answers[2]+"</p></div>");
//     });

//     //enterntaiment

//     $("#e1").click(function(){
//         $("#e1").html("<div class='center'><p>"+enterntaiment[0].question+"</p><p>"+
//         enterntaiment[0].incorrect_answers[0]+"</p><p>"+enterntaiment[0].incorrect_answers[1]+
//         "</p><p>"+enterntaiment[0].correct_answer+"</p><p>"+enterntaiment[0].incorrect_answers[2]+"</p></div>");
//     });

//     $("#e2").click(function(){
//         $("#e2").html("<div class='center'><p>"+enterntaiment[1].question+"</p><p>"+
//         enterntaiment[1].incorrect_answers[0]+"</p><p>"+enterntaiment[1].incorrect_answers[1]+
//         "</p><p>"+enterntaiment[1].correct_answer+"</p><p>"+enterntaiment[1].incorrect_answers[2]+"</p></div>");
//     });

//     $("#e3").click(function(){
//         $("#e3").html("<div class='center'><p>"+enterntaiment[3].question+"</p><p>"+
//         enterntaiment[3].incorrect_answers[0]+"</p><p>"+enterntaiment[3].incorrect_answers[1]+
//         "</p><p>"+enterntaiment[3].correct_answer+"</p><p>"+enterntaiment[3].incorrect_answers[2]+"</p></div>");
//     });

//     //sciense
//     $("#s1").click(function(){
//         $("#s1").html("<div class='center'><p>"+science[0].question+"</p><p>"+
//         science[0].incorrect_answers[0]+"</p><p>"+science[0].incorrect_answers[1]+
//         "</p><p>"+science[0].correct_answer+"</p><p>"+science[0].incorrect_answers[2]+"</p></div>");
//     });

//     $("#s2").click(function(){
//         $("#s2").html("<div class='center'><p>"+science[1].question+"</p><p>"+
//         science[1].incorrect_answers[0]+"</p><p>"+science[1].incorrect_answers[1]+
//         "</p><p>"+science[1].correct_answer+"</p><p>"+science[1].incorrect_answers[2]+"</p></div>");
//     });

//     $("#s3").click(function(){
//         $("#s3").html("<div class='center'><p>"+science[3].question+"</p><p>"+
//         science[3].incorrect_answers[0]+"</p><p>"+science[3].incorrect_answers[1]+
//         "</p><p>"+science[3].correct_answer+"</p><p>"+science[3].incorrect_answers[2]+"</p></div>");
//     });
    


// });



