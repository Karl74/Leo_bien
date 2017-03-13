var vocales = [ {letra:"a", imagen:"assets/images/sonidoinicial/ala.png", label: "ala" },
				{letra:"a", imagen:"assets/images/sonidoinicial/anillo.png", label: "anillo" },
				{letra:"e", imagen:"assets/images/sonidoinicial/escoba.png", label: "escoba" },
				{letra:"e", imagen:"assets/images/sonidoinicial/escuela.png", label: "escuela" },
				{letra:"i", imagen:"assets/images/sonidoinicial/iguana.jpg", label: "iguana" },
				{letra:"i", imagen:"assets/images/sonidoinicial/iman.png", label: "imán" },
				{letra:"o", imagen:"assets/images/sonidoinicial/ojo.png", label: "ojo" }, 
				{letra:"o", imagen:"assets/images/sonidoinicial/oreja.png", label: "oreja" },
				{letra:"u", imagen:"assets/images/sonidoinicial/uno.png", label: "uno" },
				{letra:"u", imagen:"assets/images/sonidoinicial/uva.png", label: "uva" },
			];


var mpslt = [	{letra:"m", imagen:"assets/images/sonidoinicial/mono.png", label: "mono" },		
				{letra:"m", imagen:"assets/images/sonidoinicial/mama.png", label: "mamá" },
				{letra:"l", imagen:"assets/images/sonidoinicial/pato.png", label: "pato" },
				{letra:"m", imagen:"assets/images/sonidoinicial/pila.gif", label: "pila" },
				{letra:"m", imagen:"assets/images/sonidoinicial/silla.png", label: "silla" }, 
				{letra:"a", imagen:"assets/images/sonidoinicial/sopa.png", label: "sopa" },
				{letra:"a", imagen:"assets/images/sonidoinicial/taco.png", label: "taco" },
				{letra:"a", imagen:"assets/images/sonidoinicial/tela.jpg", label: "tela" },
				{letra:"a", imagen:"assets/images/sonidoinicial/uno.png", label: "uno" },
				{letra:"a", imagen:"assets/images/sonidoinicial/uva.png", label: "uva" },
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

		var input1 = $("<input>");
		input1.attr({type:"radio", name:"answer", value:"choice1"});
		buttonBox.append(input1);
		var inputText1 =$("<p>");
		inputText1.html("choice1")
		buttonBox.append(inputText1);

		var input2 = $("<input>");
		input2.attr({type:"radio", name:"answer", value:"choice2"});
		buttonBox.append(input2);
		var inputText2 =$("<p>");
		inputText2.html("choice2")
		buttonBox.append(inputText2);

		var input3 = $("<input>");
		input3.attr({type:"radio", name:"answer", value:"choice3"});
		buttonBox.append(input3);
		var inputText3 =$("<p>");
		inputText3.html("choice3")
		buttonBox.append(inputText3);


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