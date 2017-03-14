var vocales = [ {letra:"a", imagen:"assets/images/sonidoinicial/ala.png", label: "ala", answers:["e", "m", "a"] },
				{letra:"a", imagen:"assets/images/sonidoinicial/anillo.png", label: "anillo", answers:["a", "l", "i"] },
				{letra:"e", imagen:"assets/images/sonidoinicial/escoba.png", label: "escoba", answers:["o", "e", "u"] },
				{letra:"e", imagen:"assets/images/sonidoinicial/escuela.png", label: "escuela", answers:["a", "e", "p"] },
				{letra:"i", imagen:"assets/images/sonidoinicial/iguana.jpg", label: "iguana", answers:["i", "u", "s"] },
				{letra:"i", imagen:"assets/images/sonidoinicial/iman.png", label: "imán", answers:["t", "u", "i"] },
				{letra:"o", imagen:"assets/images/sonidoinicial/ojo.png", label: "ojo", answers:["a", "t", "o"] }, 
				{letra:"o", imagen:"assets/images/sonidoinicial/oreja.png", label: "oreja", answers:["o", "a", "u"] },
				{letra:"u", imagen:"assets/images/sonidoinicial/uno.png", label: "uno", answers:["u", "t", "e"] },
				{letra:"u", imagen:"assets/images/sonidoinicial/uva.png", label: "uva", answers:["e", "u", "o"] },
			];


var mpslt = [	{letra:"m", imagen:"assets/images/sonidoinicial/mono.png", label: "mono", answers:["d", "m", "a"] },		
				{letra:"m", imagen:"assets/images/sonidoinicial/mama.png", label: "mamá", answers:["m", "e", "r"] },
				{letra:"p", imagen:"assets/images/sonidoinicial/pato.png", label: "pato", answers:["m", "b", "p"] },
				{letra:"p", imagen:"assets/images/sonidoinicial/pila.gif", label: "pila", answers:["p", "r", "r"] },
				{letra:"s", imagen:"assets/images/sonidoinicial/silla.png", label: "silla", answers:["e", "t", "s"] }, 
				{letra:"s", imagen:"assets/images/sonidoinicial/sopa.png", label: "sopa", answers:["s", "t", "u"] },
				{letra:"t", imagen:"assets/images/sonidoinicial/taco.png", label: "taco", answers:["e", "t", "d"] },
				{letra:"t", imagen:"assets/images/sonidoinicial/tela.jpg", label: "tela", answers:["f", "c", "t"] },
				{letra:"u", imagen:"assets/images/sonidoinicial/uno.png", label: "uno", answers:["n", "i", "l"] },
				{letra:"u", imagen:"assets/images/sonidoinicial/uva.png", label: "uva", answers:["l", "m", "a"] },
			];


var ind= 0;
//var nextButton;

$(document).ready(function() {

	function clearContent(){
		$("#actionz").empty();
	}

	function slideShow(letters){
		var picFrame = $("<div>");
		picFrame.attr("class", "gameBox");
		picFrame.attr("id","picFrameCp");
		picFrame.html("<img src=" + letters[0].imagen + " width='276px' height='276px'>");
		$("#actionz").append(picFrame); 
		
		var gameTextBox = $("<div>");
		gameTextBox.attr("class", "gameBox");
		gameTextBox.attr("id", "gameTextBoxCp");
		gameTextBox.html("<h2>" + letters[0].label + "</h2>");
		$("#actionz").append(gameTextBox);
		
		var buttonBox = $("<div>");
		buttonBox.attr("class", "gameBox");
		buttonBox.attr("id", "buttonBoxCp");
		$("#actionz").append(buttonBox);
		
		var nextButton = $("<button>");
		nextButton.attr("id", "nextButtonCp");
		nextButton.html("Siguiente");
		buttonBox.append(nextButton);
	
		$("#nextButtonCp").click(function(){
			ind++;
			picFrame.html("<img src=" + letters[ind].imagen + " width='276px' height='276px'>");
			gameTextBox.html("<h2>" + letters[ind].label + "</h2>");
			if(ind == 9){
				ind=0;
			}
		});

	} // END OF SLIDE SHOW FUNCTION


	function queSonido(letters){
		var picFrame = $("<div>");
		picFrame.attr("class", "gameBox");
		picFrame.attr("id","picFrameCp");
		picFrame.html("<img src=" + letters[0].imagen + " width='276px' height='276px'>");
		$("#actionz").append(picFrame); 

		var buttonBox = $("<div>");
		buttonBox.attr("class", "gameBox");
		buttonBox.attr("id", "buttonBoxCp");
		$("#actionz").append(buttonBox);

		var choiceContainer1 = $("<div>");
		choiceContainer1.attr("class", "inLineContainer");
		buttonBox.append(choiceContainer1);

		var choiceContainer2 = $("<div>");
		choiceContainer2.attr("class", "inLineContainer");
		buttonBox.append(choiceContainer2);

		var choiceContainer3 = $("<div>");
		choiceContainer3.attr("class", "inLineContainer");
		buttonBox.append(choiceContainer3);


		var input1 = $("<input>");
		input1.attr({type:"radio", name:"answer", value:letters[0].answers[0]});
		choiceContainer1.append(input1);
		var inputText1 =$("<p>");
		inputText1.html(letters[0].answers[0])
		choiceContainer1.append(inputText1);

		var input2 = $("<input>");
		input2.attr({type:"radio", name:"answer", value:letters[0].answers[1]});
		choiceContainer2.append(input2);
		var inputText2 =$("<p>");
		inputText2.html(letters[0].answers[1])
		choiceContainer2.append(inputText2);

		var input3 = $("<input>");
		input3.attr({type:"radio", name:"answer", value:letters[0].answers[2]});
		choiceContainer3.append(input3);
		var inputText3 =$("<p>");
		inputText3.html(letters[0].answers[2])
		choiceContainer3.append(inputText3);

		$("input:radio").click(function(){
			console.log("hello guys");
			var theAnswer = $("input[name=answer]:checked").val();
			console.log(theAnswer);
			console.log(letters[0].letra);

			if (theAnswer == letters[0].letra){
				alert("Correcto!!!!");
			} else {
				alert("Intentalo de nuevo");
			};
		});






	}//END OF QUE SONIDO FUNCTION






	//---BUTON EVENT SELECT LETTERS AND MODE----------------------

	$("#aeiou").on("click", function(){
		clearContent();
		queSonido(vocales);
	});

	$("#MPSLT").on("click", function(){
			clearContent();
			slideShow(mpslt);
		});

	






});// END OF FUNCION GET READY 