	var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	var randomAlphabets = alphabets[(Math.floor(alphabets * Math.random))];

	document.onkeyup = function(event) {
		var userChoice = event.key.toLowerCase();
	
	if (userChoice == randomAlphabets) {
		alert("you got it!")	
	}else if (userChoice !== randomAlphabets)
		document.html()	
	
	}