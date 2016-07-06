
$(document).ready(function(){
	
  /*--- 1 object for each question ---*/
  var Question0 = {
    question: "Question 0",
    choice1: "A",
    choice2: "B",
    choice3: "C",
    choice4: "D",
    answerText: "Answer 0",
    correct: "B",
  };

  var Question1 = {
    question: "Question 1",
    choice1: "A1",
    choice2: "B1",
    choice3: "C1",
    choice4: "D1",
    answerText: "Answer 1",
    correct: "C1",
  };

  var Question2 = {
    question: "Question 2",
    choice1: "A2",
    choice2: "B2",
    choice3: "C2",
    choice4: "D2",
    answerText: "Answer 2",
    correct: "D2",
  };

  /*--- Creating array with all the questions ---*/
  var questionArray = [Question0, Question1, Question2];

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
  $(".round").text("Round " + round + " out of 6 rounds");
  $(".endScreen").hide();

  /*--- Function to load next round when clicking the continue button ---*/
  function nextRound(arg0, arg1, arg2, arg3, arg4){
    $(".btnContinue").on("click", function(){
      if(nextGame < 2){
        $("input[type=submit]").prop("disabled", false);
        $("#question").text(arg0);
        $("#choice1").prop('value', arg1);
        $("#choice2").prop('value', arg2);
        $("#choice3").prop('value', arg3);
        $("#choice4").prop('value', arg4);
        $(".btnContinue").hide();
        $(".answer").text("");
        $(".round").text("Round " + round + " out of 6 rounds");
      } else {
        $(".gameScreen").hide();
        $(".endScreen").show();
        $(".finalResult").text("Congratulations! You answered " + score + " out of 6 questions correct!")
      }
    });
  };

  /*--- Function submit answer and check result ---*/
  function runQuizz(){
    $("input[type=submit]").on("click", function(){
      userAnswer = $(this).val();
      nextGame++;
      if (userAnswer == questionArray[thisGame].correct) {
          $(".answer").text("That is correct: " + questionArray[thisGame].answerText);
          $(".btnContinue").show();
          $("input[type=submit]").prop("disabled", true);
          score++;
          $(".score").text(score + " point(s)");
          round++;
          nextRound(questionArray[nextGame].question, questionArray[nextGame].choice1, questionArray[nextGame].choice2, questionArray[nextGame].choice3, questionArray[nextGame].choice4);
          thisGame++;
      } else {
          $(".answer").text("That is not correct: " + questionArray[thisGame].answerText);
          $(".btnContinue").show(); 
          $("input[type=submit]").prop("disabled", true);
          $(".score").text(score + " point(s)");
          round++;
          nextRound(questionArray[nextGame].question, questionArray[nextGame].choice1, questionArray[nextGame].choice2, questionArray[nextGame].choice3, questionArray[nextGame].choice4);       
          thisGame++;
      }
    });
  };


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


