//Variables & arrays
	var words = ["terra", "locke", "sabin", "edgar", "shadow", "cyan"]
	var lives = 5;
	

//select random answer
	function choose () {
    return words[Math.floor(Math.random() * words.length)];
}

//masking answer
	function blanks ( answer ) {  
    var blank = ""; 
    for ( i in answer ) {
        blank = "_" + blank;
    }
    return blank;
}

//functions

//reset
function resetLetters () {
    $(".guessed").remove();
    $(".shown").remove();
}
function reset () {
    resetLetters();
    answer = choose();
    blank = blanks(answer);
}

//button resets game
$("#resetButton").on("click", reset(){
}

$(document).ready(reset);
function win(){alert("Congrats!"); reset();}
function lose(){alert("Sorry you lost!") reset();}
//sets values to 0/blank
function doKeypress(){
		var char = $("input").val().toLowerCase();
		var string = "";
		$("#input").val("");

		string =guess( char, blank, answer );
		if (string != blank){
			update(string);
			blank = answer;
			if (blank === answer){
				win();
			}
		}
		else {
			wrongLetter(char);
			lives -1
			if (lives = 0){
				lose();
			}
		}
}
//assigns input on keypress
$('#input').keyup( doKeypress );





