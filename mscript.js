var num=-1; //global variable to generate my random questions
var interval; //variable to stop timer at 0
var k = 15; //variable used to generate 15 questions
var msg=["Two answers will be eliminated","One answer has been given, you are free to choose it or not."
,"Question is swaped." //this array is for the messages when choosing the lifelines
  ]

var Questions = [
        ["The Earth is approximately how many miles away from the Sun?",'A.9.3million', 'B.93million', 'C.193million','D.39million', 2],

        ["In the children's book series, where is Paddington Bear originally from?",'A.India', 'B.Canada', 'C.Iceland','D.Peru', 4],

        ["What does the word loquacious mean?",'A.Chatty', 'B.Secretive','C.Wicked', 'D.Amazing',1],

        ["Which Disney character famously leaves a glass slipper behind at a royal ball?",'A.Jasmine','B.Moana','C.Cinderella','D.Snow White',3],

        ["Queen Anne was the daughter of which English Monarch?",'A.James II', 'B.George III','C.Charles III','D.Phillip',1],

        ["Which former Beatle narrated the TV adventures of Thomas the Tank Engine?",'A.Freddie Mercury','B.Elvis Presley','C.Ringo Starr','D.Led Zeppelin',3],

        ["Who composed 'Rhapsody in Blue'?",'A.George Gershwin','B.Beethoven','C.Antonio Vivaldi','D.Maurice Ravel',1],

        ["What is the Celsius equivalent of 77 degrees Fahrenheit?",'A.70','B.75','C.25','D.20',3],

        ["Which Shakespeare play features the line 'Neither a borrower nor a lender be'?",'A.Hamlet','B.The Merchant of Venice','C.Romeo and Juliet','D.Macbeth',1],

        ["Which is the largest city in the USA's largest state?",'A.New york','B.California','C.Anchorage','D.Texas',3],

        ["The word 'aristocracy' literally means power in the hands of whom?",'A.The rich','B.Men','C.The politicians','D.The best',4],

        ["In which palace was Queen Elizabeth I born?",'A.Greenwich','B.Buckingham','C.Windsor Castle','D.Carlton House',1],

        ["A person with well-developed abdominal muscles is said to have a what?",'A.Family-pack','B.Six-pack','C.Three-pack','D.Nine-pack',2],

        ["A magnet would most likely attract which of the following?",'A.Metal','B.Wood','C.The wrong man','D.Plastic',1],

        ["Where did Scotch whisky originate?",'A.Ireland','B.Scotland','C.The Wales','D.The United States',2],

        ["In the United States, what is traditionally the proper way to address a judge?",'A.Your honor','B.You da man','C.Your highness','D.Father',1],

        ["At a restaurant, someone who 'foots the bill' does what?",'A.Runs away','B.Rips it up','C.Pays it','D.Chew it up',3],

        ["According to a common phrase, a person who takes chances is 'going out on a' what?",'A.Limb','B.A tour','C.Knee','D.Knuckle',1],

        ["A person who is not a banker and lends money at an extremely high interest rate is known as what?",'A.Stupid','B.Loan Shark','C.Green Snake','D.Family',2],

        ["Mauritius is a small island nation east of Madagascar. To what group of islands does Mauritius belong?",'A.Isla Bonita','B.Eagle Islands','C.Iles Des Madeleines','D.Mascarene Islands',4],

        ["The island of Mauritius is split up into nine different districts. Which of these is NOT one of the districts of Mauritius?",'A.Flacq','B.Savanne','C.Rhill','D.Port-Louis',3],

        ["The capital and most populated city of Mauritius is Port Louis. What is the name of the second largest city in Mauritius?",'A.Beau-Bassin Rose-hill','B.Mahebourg','C.Vacoas','D.Flacq',1],

        ["What mountain serves as the highest point in Mauritius?",'A.Le Morne','B.Peter Both','C.Le Pouce','D.Piton de la petire riviere Noire',4],

        ["The flag of Mauritius is one of the simplest and most colorful flags in Africa. The flag of Mauritius is made up of four different colors in horizontal stripes. What are these four colors, from top to bottom?",'A.Blue,Red,Yellow,Green','B.Red,Yellow,Blue,Green','C.Red,Blue,Yellow,Green','D.Red,Blue,Green,Yellow',3],

        ["Only continent in the world without a desert is",'A.Asia','B.Europe','C.North America','D.Africa',2],

        ["How many countries were participated as founding member of United Nation.",'A.51','B.75','C.50','D.102',1],

        ["Which one is the largest tropical rain forest in the world.",'A.Bosawas','B.Daintree Rain Forest','C.Amazon','D.South East Asian Rain Forest',3],

        ["Which one is the biggest island in the World.",'A.Mauritius','B.Iceland','C.Finland','D.Greenland',4],

        ["Which mountain is known as the Roof of the World.",'A.The Himalayas','B.Andes','C.Pamir','D.Trou Aux Cerfs',3],

        ["Which continent has the highest number of countries.",'A.Africa','B.Asia','C.Europe','D.Antartica',1]
      ];//array for the 30questions from which 15questions will be generated for the game

      //the function randomques is to generate questions and answers from the array
    function randomques(){
       num = Math.floor(Math.random() * Questions.length); //generates random question
      document.getElementById('ques').innerHTML=(Questions[num][0]); //this is the index for the questions since it is a two dimensional array
      document.getElementById('ans1').value=(Questions[num][1]);
      document.getElementById('ans2').value=(Questions[num][2]);
      document.getElementById('ans3').value=(Questions[num][3]);
      document.getElementById('ans4').value=(Questions[num][4]);  //these are the indexes for the answers from the array

timer1(); //here, i called the function timer1 to generate the timer after each random question
    }

      randomques(); //here i called the function to generate the random questions

  $('#over').hide();
  $('#timesup').hide();
  $('#win').hide();
//this function is to check the correct answer
      $('.answers .answer').click(function(){
          var correctIndex=Questions[num][5]; //variable to store the correct answer
          var correctAns= Questions[num][correctIndex]; //variable to store random question and its correct answer

          $(this).parent().css("pointer-events","none"); //this is to restrict clicking on two answers
          clearInterval(interval);
          if($(this).val() == correctAns){
            $(this).addClass('correct');

//this code here is for the milestone to detect when it is active and when not
            setTimeout(()=>{
              $('#p' + k).removeClass('active'); //here the active class is removed for the milestone to show that it is inactive. it is concatenated with k to detect the prize ids
              k--;
              $('#p' + k).addClass('active');//it is then reactivated to show where it reached in the milestone
              if(k==0){
                document.getElementById('win').innerHTML;
                $('#win').show();
                //alert('you won');
              }
              $('#countdown').text(30);
              clearInterval(interval);
                $(this).removeClass('correct');
              $(this).parent().css("pointer-events","auto");
              randomques()}, 4000);
              Questions.splice(num,1);
              for (let i = 0; i < Questions.length; i++) {
                  console.log(Questions[i]);
              }

          }

          else{
            $(this).addClass('incorrect');
              clearInterval(interval);
              // incorrect
              setTimeout(()=>{
                  $('#ans1,#ans2,#ans3,#ans4').css("pointer-events","none");
                  $('#over').show();
              },2000);

            };

          $("input").attr("disabled", false).css("pointer-events","auto");
          $('#ans' + ans).css({"background":"","border":""});
      });




function timer1(){
  var timerValue=document.getElementById('countdown');
  var second = document.getElementById('countdown').innerText;
  parseInt(second);
  console.log(second);
   interval = setInterval(()=>{
      second--;
timerValue.innerHTML = second;

      if(second == 0){
        clearInterval(interval);
        $('#timesup').show();
        //alert("time's up");
        console.log(second);
}
},1000);

}
//  $('#over').hide();
function incorrect(){
  if(correctAns == false){

    //document.getElementById('over').hide().innerHTML;
    //incorrect();
    // $('#over').show();
    // $( '#over' ).fadeOut(3000);
  }

}

// $("#over").click(function() {
//     document.getElementById('over').innerHTML
//   incorrect();
//   $(this).show();
//   $( 'over' ).fadeIn(3000);
// });
// incorrect();
//   $('#over').show(4000);



$("#fifty").click(function() {
    document.getElementById('errfifty').innerText= msg[0];
  fiftyfifty();
  $(this).hide();
  $( '#errfifty' ).fadeOut(3000);
});

function fiftyfifty(){
    var correctIndexAns=Questions[num][5];
    randomValue=Math.floor(Math.random() * 4) + 1;
    while (randomValue == correctIndexAns){
        randomValue=Math.floor(Math.random() * 4) + 1;
    }

    console.log('randomval=' + randomValue);
    console.log('correctIndexAns=' + correctIndexAns);

    for(var i = 0; i < 2; i++){
        //console.log('forloop i');
        for(var j = 1; j <= 4 ; j++){ //incorrect index
        //console.log('j='+ j);

      if(j != randomValue && j != correctIndexAns){
            $('#ans' + j).attr('disabled', true).css("pointer-events","none");
            console.log('removed' + j);
          }
    }
}
}
$("#paf").click(function() { //on click this function will be enabled.

  document.getElementById('errpaf').innerText= msg[1]; //this is to display a message explaining the lifeline
  paf();
  $(this).hide();
  $( '#errpaf' ).fadeOut(3000); //i called the function to then hide it 3s after being called.

});
function paf(){  //this is my function for phone a friend.
  ans = Math.floor(Math.random() * 4) + 1;  //this enables a random answer to be chosen
  $('#ans' + ans).css({"background":"#884dff","border":"1px solid white"});  //the random chosen ansswer  will then take this css
}


$("#sq").click(function() {
  document.getElementById('errsq').innerText= msg[2]; //this is to display a message explaining the lifeline
  swap();
  $(this).hide();
  $( '#errsq' ).fadeOut(3000); ///i called the function to then hide it 3s after being called.
});
function swap(){  //this is my swap question function
randomques(); //i called the randomques function to generate a random question when swapped.
}
