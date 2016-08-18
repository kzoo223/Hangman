//Variables & arrays
	var words = ["terra", "locke", "sabin", "edgar", "shadow", "cyan"]

	var guesses ="";
	var lives = 5;

	

//select random answer
	var word = words[Math.floor(Math.random() * words.length)];
	
	console.log (word)

//masking answer
	var hidden = word.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9/g,"_");









