//Variables & arrays
	var words = ["terra", "locke", "sabin", "edgar", "shadow", "cyan"]
	var lives
	

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

//functions>>>>>>>>>>>>>>>>>>>>>>>>>

//reset
function resetLetters () {
    $(".guessed").remove();
    $(".shown").remove();
}

function reset () {
    resetLetters();
    answer = choose();
    blankAnswer = blanks(answer);
    lives = 5
    drawWord(blankAnswer);
}

//pulled from example. checks index of answer + alters blanks
function alterAt ( n, c, originalString ) {
    return originalString.substr(0,n) + c + originalString.substr(n+1,originalString.length);
}
function guess( letter, shown, answer ) {
    var checkIndex = 0;
    
    checkIndex = answer.indexOf(letter);
    while ( checkIndex >= 0 ) {
        shown = alterAt( checkIndex, letter, shown );
        checkIndex = answer.indexOf(letter, checkIndex + 1);
    }
    return shown;
}

function wrongLetter ( letter ) {
    $('#wrong-letters').append(
        $('<span/>').addClass('guessed-letter').text(letter));
}

//adds blanks to area
function drawWord ( answer ) {
    for ( i in answer ) {
	$('.word-display').append(
	    $('<span/>').addClass('shown-letter').html('&nbsp;'));
    }
}

function update( answer ) {
    $k = $('.shown-letter:first');
    for ( i in answer ) {
	if ( answer.charAt(i) != '_' ) {
	    $k.text( answer.charAt(i) );
	} else { 
	    $k.html('&nbsp;');
	}
	$k = $k.next();
    }
}

$(document).ready(reset);
function win(){alert("Congrats!"); reset();}
function lose(){alert("Sorry you lost!"); reset();}
//sets values to 0/blank
function keyPress(){
		var char = $("input").val().toLowerCase();
		var string = "";
		$("#input").val("");

		string =guess( char, blankAnswer, answer );
		if (string != blankAnswer){
			update(string);
			blankAnswer = answer;
			if (blankAnswer === answer){
				win();
			}
		}
		else {
			wrongLetter(char);
			lives = lives--
			if (lives === 0){
				lose();
			}
		}
}
//assigns input on keypress
$('#input').keyup( keyPress );