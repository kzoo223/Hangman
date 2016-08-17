//Possible answers array
	var words = ["TERRA", "LOCKE", "SABIN", "EDGAR", "SHADOW", "CYAN"]
	

//function to choose answer
	function SelectAnswer () {
    return words[Math.floor(Math.random() * words.length)];
}

	function answerBlanks ( word ){
		var hiddenBlanks ="";
		for (i=0; i <= word.length; i++){
			hiddenBlanks = "_" + hiddenBlanks
		}
	}