//setting variables 
var wins = 0;
var losses = 0;
var totalScore = 0;
var randomNumber = Math.floor(Math.random() * 101 + 19)
$("#randomNumber").text(randomNumber);
$("#numwins").html(wins);
$("#numlosses").html(losses);
$("#totalScore").text(totalScore);


//setting the random numbers for the cyrstals, random hidden value between 1 - 12.
var red = Math.floor(Math.random() * 11) + 1;
var blue = Math.floor(Math.random() * 11) + 1;
var yellow = Math.floor(Math.random() * 11) + 1;
var green = Math.floor(Math.random() * 11) + 1;

//restart the game after someone loses or wins 
function restartGame() {

// random number shown at the start of the game should be between 19 - 120
randomNumber = Math.floor(Math.random() * 101 + 19)
$("#randomNumber").text(randomNumber);
red = Math.floor(Math.random() * 11) + 1;
blue = Math.floor(Math.random() * 11) + 1;
yellow = Math.floor(Math.random() * 11) + 1;
green = Math.floor(Math.random() * 11) + 1;
totalScore = 0;
}
function win() {
//alert you once you hit the targeted number then restarts the game 
	alert("You win!");
	wins ++;
	$("#wins").text(wins);
	restartGame();
}
function lose() {
// alert you once you went over the number your suppose to hit then restarts the game 
	alert("You lose!");
	losses ++;
	$("#losses").text(losses);
	restartGame();
}
//lets you click the red cyrstal
$('#red').on ('click', function(){
    totalScore = totalScore + red;
    
    $('#totalScore').text(totalScore); 
          
        if (wins == randomNumber){
          winner();
        }
        else if (losses > randomNumber){
          loser();
        }   
  });  
//lets you click the blue cyrstal 
$('#blue').on ('click', function(){
    totalScore = totalScore + blue;
    
    $('#totalScore').text(totalScore); 
         
        if (wins == randomNumber){
          winner();
        }
        else if (losses > randomNumber){
          loser();
        }   
  });  
//lets you click the yellow cyrstal
$('#yellow').on ('click', function(){
    totalScore = totalScore + yellow;
    
    $('#totalScore').text(totalScore); 
          
        if (wins == randomNumber){
          winner();
        }
        else if (losses > randomNumber){
          loser();
        }   
  });  
//lets you click the green cyrstal
$('#green').on ('click', function(){
    totalScore = totalScore + green;
    
    $('#totalScore').text(totalScore); 
         
        if (wins == randomNumber){
          winner();
        }
        else if (losses > randomNumber){
          loser();
        }   
  });  
