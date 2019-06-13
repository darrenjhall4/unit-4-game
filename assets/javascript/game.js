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
$("#losses").text(wins);

//restarts game
function restart() {
  randomValue = Math.floor(Math.random() * 101 + 19);
  $("#targetNumber").text(randomValue);
  var ranValue1 = Math.floor(Math.random() * 12);
  var ranValue2 = Math.floor(Math.random() * 12);
  var ranValue3 = Math.floor(Math.random() * 12);
  var ranValue4 = Math.floor(Math.random() * 12);
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


/*
var sweetSpot = 24;
var myArray = ["acoustic", "electric", "bass", "drums"]
//span/h1 matches frustration goal
$("#goal").text(sweetSpot);
*/

//////////////////////////////////////////////////////////

//create counter to track score
/*
var counter = 0
$(".instruments>#clapton").on("click", function () {
  counter += 8;
  alert("Sweet acoustic melodies! Your neighbor's frustration is at: " + counter);

  $(".instruments>#hendrix").on("click", function () {
    counter += 15;
    alert("Shredding! Your neighbor's frustration is at: " + counter);

    $(".instruments>#flea").on("click", function () {
      counter += 20;
      alert("Slappin the bass! Your neighbor's frustration is at: " + counter);

      $(".instruments>#carter").on("click", function () {
        counter += 25;
        alert("DRUM $OLO! Your neighbor's frustration is at: " + counter);

        //if you reach target frustration
        if (counter === maxFrustration) {
          alert("Right on! You know, back in my day.....");
        }

        //Neighbor calls cops if you exceed maximum frustration
        else if (counter > maxFrustration) {
          alert("THAT'S IT, I'M CALLING THE COPS!")
        }

      });
    */