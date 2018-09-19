$(document).ready(function() {

var compPick = Math.floor(Math.random() * 102) + 19; 
	console.log("compPick: " + compPick); 
$("#randomNumber").html(compPick); 

var houseStark = Math.floor(Math.random() * 12) + 1; 
	console.log("Gem 1: " + houseStark); 
	$("#img1").html("<img src=" + "assets/images/stark.jpg" + " value=" + houseStark + ">"); 

var houseLannister = Math.floor(Math.random() * 12) + 1; 
	console.log("Gem 2: " + houseLannister); 
	$("#img2").html("<img src=" + "assets/images/lannister.jpg" + " value=" + houseLannister + ">"); 

var houseTargaryen = Math.floor(Math.random() * 12) + 1; 
	console.log("Gem 3: " + houseTargaryen); 
	$("#img3").html("<img src=" + "assets/images/targaryen.jpg" + " value=" + houseTargaryen + ">");
	
var houseGreyjoy = Math.floor(Math.random() * 12) + 1; 
	console.log("Gem 4: " + houseGreyjoy); 
	$("#img4").html("<img src=" + "assets/images/greyjoy.jpg" + " value=" + houseGreyjoy + ">");
		
var wins = 0; 
	console.log("wins: " + wins); 

var losses = 0; 
	console.log("losses: " + losses); 

var score = 0; 
	console.log("score: " + score); 

function reset () {
	compPick = Math.floor(Math.random() * 102) + 19; 
		console.log("compPick: " + compPick); 
	$("#randomNumber").html(compPick); 

	score = 0; 
	$(".scoreDisplay").html(score); 

	houseStark = Math.floor(Math.random() * 12) + 1;  
		console.log("Gem 1: " + houseStark); 
	$("#img1").html("<img src=" + "assets/images/stark.jpg" + " value=" + houseStark + ">"); 

	houseLannister = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 2: " + houseLannister); 
	$("#img2").html("<img src=" + "assets/images/lannister.jpg" + " value=" + houseLannister + ">"); 

	houseTargaryen = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 3: " + houseTargaryen); 
	$("#img3").html("<img src=" + "assets/images/targaryen.jpg" + " value=" + houseTargaryen + ">");
	
	houseGreyjoy = Math.floor(Math.random() * 12) + 1; 
		console.log("Gem 4: " + houseGreyjoy); 
	$("#img4").html("<img src=" + "assets/images/greyjoy.jpg" + " value=" + houseGreyjoy + ">");

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
			
		} 

		else if(newScore > compPick) {
		losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}
  }); 
}

	$("img").on("click", function () {
		var newScore = score += parseInt($(this).attr("value")); 
			console.log("New Score: " + newScore); 
		$(".scoreDisplay").html(newScore); 

		if(newScore === compPick) { 
			wins++ ; 
			$(".wins").html("Wins: " + wins); 
				console.log("Wins: " + wins); 
				reset(); 
		} 

		else if(newScore > compPick) {
			losses++ ; 
			$(".losses").html("Losses: " + losses); 
				console.log("Losses: " + losses); 
				reset(); 
		}

	}); 

}); 