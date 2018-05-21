$( document ).ready(function(){


var numChoice = Math.floor(Math.random() * 101) + 19;
var gemNum1 = Math.floor(Math.random() * 11) + 1 ;
var gemNum2 = Math.floor(Math.random() * 11) + 1 ;
var gemNum3 = Math.floor(Math.random() * 11) + 1 ;
var gemNum4 = Math.floor(Math.random() * 11) + 1 ;

var score = 0;
var wins = 0;
var losses = 0;

// wins and losses tracking
$("#winsTotal").text("Wins: " + wins);
$("#lossTotal").text("Losses: " + losses);

// game reset
function reset() {
  numChoice = Math.floor(Math.random() * 100) + 15;
  $("#ranNumber").text(numChoice);
  gemNum1 = Math.floor(Math.random() * 10) + 1 ;
  gemNum2 = Math.floor(Math.random() * 10) + 1 ;
  gemNum3 = Math.floor(Math.random() * 10) + 1 ;
  gemNum4 = Math.floor(Math.random() * 10) + 1 ;
  score = 0;
  $("#userScore").text(score);

};

document.onkeydown = function(event) {
  reset()
};

// wins and losses tracking
function winner() {
  alert("YOU'RE A WINNER!");
  wins++;
  $("#winsTotal").text("Wins: " + wins);
  reset();
}

function loser() {
  alert("SUCH A LOSER!");
  losses++;
  $("#lossTotal").text("Losses: "+ losses);
  reset();
}

// jewel clicks
$("#gem1").on ("click", function() {
  score = score + gemNum1;
  $("#userScore").text(score);
    if (score == numChoice) {
      winner();
    }
    else if (score > numChoice) {
      loser();
    }
})

$("#gem2").on ("click", function() {
  score = score + gemNum2;
  $("#userScore").text(score);
    if (score == numChoice) {
      winner();
    }
    else if (score > numChoice) {
      loser();
    }
})

$("#gem3").on ("click", function() {
  score = score + gemNum3;
  $("#userScore").text(score);
    if (score == numChoice) {
      winner();
    }
    else if (score > numChoice) {
      loser();
    }
})

$("#gem4").on ("click", function() {
  score = score + gemNum4;
  $("#userScore").text(score);
    if (score == numChoice) {
      winner();
    }
    else if (score > numChoice) {
      loser();
    }
});

});
