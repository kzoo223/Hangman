//Variables & arrays
	var words = ["terra", "locke", "sabin", "edgar", "shadow", "cyan"]
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var lives = 5;

//select random answer
	var word = words[Math.floor(Math.random() * words.length)];

//masking answer
	var hidden = [];	

//functions

document.onkeyup = function (event){
	//letter input
	var key = String.fromCharCode(event.keyCode).toLowerCase();
	for (var i = 0; i<word.length; i++){
		if(key == word[i]){
			hidden[i] = key+"";
		
		}
		else if (key != word[i]){
			lives - 1
		}

	}
}




