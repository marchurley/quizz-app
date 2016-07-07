
$(document).ready(function(){
	
  /*--- 1 object for each question ---*/
  var Question0 = {
    question: "Barolo is sometimes referred to as the 'King of Italian Wine', which region is it from?",
    choice1: "Veneto",
    choice2: "Tuscany",
    choice3: "Sicily",
    choice4: "Piedmont",
    answerText: "Barolo is a red Denominazione di Origine Controllata e Garantita (DOCG) wine produced in the northern Italian region of Piedmont. It is made from the Nebbiolo grape and is often described as one of Italy's greatest wines.",
    correct: "Piedmont",
  };

  var Question1 = {
    question: "On the hilltop town of Montalcino you will find wine being made called:",
    choice1: "Brunello",
    choice2: "Barolo",
    choice3: "Chiellini",
    choice4: "Vino di Nobile",
    answerText: "Brunello di Montalcino is a red Italian wine produced in the vineyards surrounding the town of Montalcino located about 80 km south of Florence in the Tuscany wine region. Brunello, a diminutive of bruno, which means brown, is the name that was given locally to what was believed to be an individual grape variety grown in Montalcino",
    correct: "Brunello",
  };

  var Question2 = {
    question: "Primitivo is one of the dominant red grapes in the Pulgia region, what is it known as in USA?",
    choice1: "Shiraz",
    choice2: "Cabernet",
    choice3: "Petite Sirah",
    choice4: "Zinfandel",
    answerText: "Primitivo is called Zinfandel in the USA and is a variety of black-skinned wine grape. The grape found its way to the United States in the mid-19th century, where it became known by variations of the name 'Zinfandel', a name which is probably of Austrian origin.",
    correct: "Zinfandel",
  };

    var Question3 = {
    question: "Which animal is on the official crest of Chianti Classico?",
    choice1: "Golden Goose",
    choice2: "Red boar",
    choice3: "Black rooster",
    choice4: "White horse",
    answerText: "Only Chianti Classico may boast the black rooster seal (known in Italian as a gallo nero) on the neck of the bottle, which indicates that the producer of the wine is a member of the Chianti Classico Consortium, the local association of producers.",
    correct: "Black rooster",
  };

    var Question4 = {
    question: "What is the grape Chiavennasca more commonly known as?",
    choice1: "Nebbiolo",
    choice2: "Negroamaro",
    choice3: "Aglianico",
    choice4: "Sangiovese",
    answerText: "Chiavennasca is better known as Nebbiolo and is a red wine grape variety predominantly associated with its native Piedmont region.",
    correct: "Nebbiolo",
  };

  /*--- Creating array with all the questions ---*/
  var questionArray = [Question0, Question1, Question2, Question3, Question4];

  /*--- Variables to advance the game, count game rounds and the score ---*/
  var nextGame = 0;
  var thisGame = 0;
  var round = 1;
  var score = 0;

  /*--- Initial setup with the first question and possible answers ---*/
  $(".btnContinue").hide();
  $("#question").text(Question0.question);
  $("#choice1").prop('value', Question0.choice1);
  $("#choice2").prop('value', Question0.choice2);
  $("#choice3").prop('value', Question0.choice3);
  $("#choice4").prop('value', Question0.choice4);
  $(".round").text("Round: " + round + " / 5");
  $(".endScreen").hide();

  /*--- Function to load next round when clicking the continue button ---*/
  function nextRound(arg0, arg1, arg2, arg3, arg4){
    $(".btnContinue").on("click", function(){
      if(nextGame < 5){
        $("input[type=submit]").prop("disabled", false);
        $("#question").text(arg0);
        $("#choice1").prop('value', arg1);
        $("#choice2").prop('value', arg2);
        $("#choice3").prop('value', arg3);
        $("#choice4").prop('value', arg4);
        $(".btnContinue").hide();
        $(".answer").text("").hide();
        $(".round").text("Round " + round + " out of 5 rounds");
      } else {
        $(".gameScreen").hide();
        $(".btnContainer").hide();
        $(".endScreen").show();
        $(".answer").text("").hide();
        $(".finalResult").text("You scored " + score + " out of 5 points!")
      }
    });
  };

  /*--- Function submit answer and check result ---*/
  function runQuizz(){
    $("input[type=submit]").on("click", function(){
      userAnswer = $(this).val();
      nextGame++;
      if (userAnswer == questionArray[thisGame].correct) {
          $(".answer").text("That is correct: " + questionArray[thisGame].answerText).css("background-color", "rgba(4, 204, 174, 0.63)").show();
          $(".btnContinue").show();
          $("input[type=submit]").prop("disabled", true);
          score++;
          $(".score").text(score + " point(s)");
          round++;
          nextRound(questionArray[nextGame].question, questionArray[nextGame].choice1, questionArray[nextGame].choice2, questionArray[nextGame].choice3, questionArray[nextGame].choice4);
          thisGame++;
      } else {
          $(".answer").text("That is not correct: " + questionArray[thisGame].answerText).css("background-color", "rgba(230, 63, 63, 0.37)").show();
          $(".btnContinue").show(); 
          $("input[type=submit]").prop("disabled", true);
          $(".score").text(score + " point(s)");
          round++;
          nextRound(questionArray[nextGame].question, questionArray[nextGame].choice1, questionArray[nextGame].choice2, questionArray[nextGame].choice3, questionArray[nextGame].choice4);       
          thisGame++;
      }
    });
  };

  /*--- Start a new game ---*/
  function newGame(){
    $(".btnNewGame").on("click", function(){
      nextGame = 0;
      thisGame = 0;
      round = 1;
      score = 0;
      $(".btnContinue").hide();
      $("#question").text(Question0.question);
      $("#choice1").prop('value', Question0.choice1);
      $("#choice2").prop('value', Question0.choice2);
      $("#choice3").prop('value', Question0.choice3);
      $("#choice4").prop('value', Question0.choice4);
      $(".round").text("Round " + round + " out of 6 rounds");
      $("input[type=submit]").prop("disabled", false);
      $(".answer").text("");
      $(".score").text("");
      $(".endScreen").hide();
      $(".gameScreen").show();
      $(".endScreen").hide();
    });
  };

  /*--- Run the quizz ---*/
  runQuizz();
  newGame();

 
  

});


