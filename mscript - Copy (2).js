var num=-1;

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
      ];
    function randomques(){
       num= Math.floor(Math.random() * 30);
      document.getElementById('ques').innerHTML=(Questions[num][0]);
      document.getElementById('ans1').value=(Questions[num][1]);
      document.getElementById('ans2').value=(Questions[num][2]);
      document.getElementById('ans3').value=(Questions[num][3]);
      document.getElementById('ans4').value=(Questions[num][4]);
timer1();
    }

      randomques();
      function checkAns(a){
        document.querySelector=a;
        var temp=Questions[num][5];
        var correctAns= Questions[num][temp];
        if(a.value == correctAns){
          document.getElementByClass('answer.correct').innerHTML
          checkAns(a);
          alert('correct answer');
}
        else{
          alert('Incorrect answer');

        }
      }



function timer1(){
  const timerValue=document.getElementById('countdown');
  var second = document.getElementById('countdown').innerText;
  parseInt(second);
  console.log(second);
  var interval = setInterval(()=>{
      second--;
timerValue.innerHTML=second;
  if(second <= 0){
    clearInterval(interval);
  }

  else if(checkAns(a)==true){
    clearInterval(interval);
  }
  else if(checkAns(a)==false){
      clearInterval(interval);
    }

},1000);


}

function timeout(){


}
