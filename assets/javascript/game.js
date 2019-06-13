$( document ).ready(function(){
var randomValue = Math.floor(Math.random() * 101+ 19);

$('#targetNumber').text(randomValue);

var wins = 0;
var losses = 0;
var total = 0;
var ranValue1 = Math.floor(Math.random() * 12);
var ranValue2 = Math.floor(Math.random() * 12);
var ranValue3 = Math.floor(Math.random() * 12);
var ranValue4 = Math.floor(Math.random() * 12);

//adds wins & losses
$("#wins").text(wins);
$("#losses").text(losses);

//restarts game
function restart() {
  randomValue = Math.floor(Math.random() * 101 + 19);
  $("#targetNumber").text(randomValue);
  ranValue1 = Math.floor(Math.random() * 12);
  ranValue2 = Math.floor(Math.random() * 12);
  ranValue3 = Math.floor(Math.random() * 12);
  ranValue4 = Math.floor(Math.random() * 12);
  total = 0;
}

//If user wins
function winner(){
  alert("That's my jam! You know, back in the 70's...");
  wins++;
  $("#wins").text(wins);
  restart();
}

//if user loses
function loser(){
  alert ("THAT'S IT, I'M CALLING THE COPS!");
    losses++;
    $('#losses').text(losses);
    restart()
  }


//on click for each pic
$("#clapton").on("click", function(){
  total = total + ranValue1;
    $("#currentTotal").text(total);
      if (total === randomValue) {
        winner();
      }

      else if (total > randomValue) {
        loser();
      }
})

$("#hendrix").on("click", function(){
  total = total + ranValue2;
    $("#currentTotal").text(total);
      if (total === randomValue) {
        winner();
      }

      else if (total > randomValue) {
        loser();
      }
})

$("#flea").on("click", function(){
  total = total + ranValue3;
    $("#currentTotal").text(total);
      if (total === randomValue) {
        winner();
      }

      else if (total > randomValue) {
        loser();
      }
})

$("#carter").on("click", function(){
  total = total + ranValue4;
    $("#currentTotal").text(total);
      if (total === randomValue) {
        winner();
      }

      else if (total > randomValue) {
        loser();
      }
});



});
