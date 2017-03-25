var vocales = [ {letra:"a", imagen:"assets/images/sonidoinicial/ala.png", label: "ala", answers:["e", "m", "a"], pictAnswer: [3, 7, 0] },
				{letra:"a", imagen:"assets/images/sonidoinicial/Anillo.png", label: "anillo", answers:["n", "a", "l"], pictAnswer: [4, 1, 8] },
				{letra:"e", imagen:"assets/images/sonidoinicial/escoba.png", label: "escoba", answers:["o", "e", "u"], pictAnswer: [9, 2, 5] },
				{letra:"e", imagen:"assets/images/sonidoinicial/escuela.png", label: "escuela", answers:["a", "e", "p"], pictAnswer: [6, 3, 0]},
				{letra:"i", imagen:"assets/images/sonidoinicial/iguana.jpg", label: "iguana", answers:["i", "u", "s"], pictAnswer: [4, 1, 7]},
				{letra:"i", imagen:"assets/images/sonidoinicial/iman.png", label: "im&#225n", answers:["t", "u", "i"], pictAnswer: [8, 2, 5]},
				{letra:"o", imagen:"assets/images/sonidoinicial/ojo.png", label: "ojo", answers:["a", "t", "o"], pictAnswer: [9, 3, 6]}, 
				{letra:"o", imagen:"assets/images/sonidoinicial/oreja.png", label: "oreja", answers:["o", "a", "u"], pictAnswer: [7, 0, 4] },
				{letra:"u", imagen:"assets/images/sonidoinicial/        ", label: "u&#241a", answers:["u", "t", "e"], pictAnswer: [8, 5, 1]},
				{letra:"u", imagen:"assets/images/sonidoinicial/uva.png", label: "uva", answers:["e", "u", "o"], pictAnswer: [2, 9, 6] }
			];


var mpslt = [	{letra:"m", imagen:"assets/images/sonidoinicial/mono.png", label: "mono", answers:["d", "m", "a"], pictAnswer: [3, 0, 7] },		
				{letra:"m", imagen:"assets/images/sonidoinicial/mama.png", label: "mam&#225", answers:["m", "e", "r"], pictAnswer: [1, 8, 4] },
				{letra:"p", imagen:"assets/images/sonidoinicial/pato.png", label: "pato", answers:["m", "b", "p"], pictAnswer: [9, 5, 2] },
				{letra:"p", imagen:"assets/images/sonidoinicial/        ", label: "pi&#241ata", answers:["p", "t", "r"], pictAnswer: [3, 6, 0] },
				{letra:"s", imagen:"assets/images/sonidoinicial/silla.png", label: "silla", answers:["e", "t", "s"], pictAnswer: [7, 1, 4] }, 
				{letra:"s", imagen:"assets/images/sonidoinicial/sopa.png", label: "sopa", answers:["s", "t", "u"], pictAnswer: [5, 2, 8] },
				{letra:"t", imagen:"assets/images/sonidoinicial/taco.png", label: "taco", answers:["e", "t", "d"], pictAnswer: [9, 6, 3] },
				{letra:"t", imagen:"assets/images/sonidoinicial/tela.jpg", label: "tela", answers:["f", "c", "t"], pictAnswer: [4, 0, 7] },
				{letra:"l", imagen:"assets/images/sonidoinicial/thepencil.png", label: "l&#225piz", answers:["l", "i", "u"], pictAnswer: [8, 5, 1] },
				{letra:"l", imagen:"assets/images/sonidoinicial/leche2.png", label: "leche", answers:["p", "l", "a"], pictAnswer: [2, 9, 6] }
			];

var drnfb = [	
				{letra:"d", imagen:"assets/images/sonidoinicial/dulce.png", label: "dulce", answers:["r", "d", "a"], pictAnswer: [3, 0, 7] },		
				{letra:"d", imagen:"assets/images/sonidoinicial/dinero.png", label: "dinero", answers:["d", "e", "r"], pictAnswer: [1, 8, 4] },
				{letra:"r", imagen:"assets/images/sonidoinicial/rosa.png", label: "rosa", answers:["m", "b", "r"], pictAnswer: [9, 5, 2] },
				{letra:"r", imagen:"assets/images/sonidoinicial/ramas.jpg", label: "rama", answers:["r", "t", "o"], pictAnswer: [3, 6, 0] },
				{letra:"n", imagen:"assets/images/sonidoinicial/        ", label: "nar&#237z", answers:["e", "r", "n"], pictAnswer: [7, 1, 4] }, 
				{letra:"n", imagen:"assets/images/sonidoinicial/nubes.jpg", label: "nube", answers:["n", "f", "u"], pictAnswer: [5, 2, 8] },
				{letra:"f", imagen:"assets/images/sonidoinicial/foto.jpg", label: "foto", answers:["g", "f", "d"], pictAnswer: [9, 6, 3] },
				{letra:"f", imagen:"assets/images/sonidoinicial/foca.png", label: "foca", answers:["h", "c", "f"], pictAnswer: [4, 0, 7] },
				{letra:"b", imagen:"assets/images/sonidoinicial/bote.jpg", label: "bote", answers:["b", "z", "l"], pictAnswer: [8, 5, 1] },
				{letra:"b", imagen:"assets/images/sonidoinicial/bigote2.jpg", label: "bigote", answers:["l", "b", "q"], pictAnswer: [2, 9, 6] }

			];

var JG209VLl = [
				{letra:"j", imagen:"assets/images/sonidoinicial/        ", label: "jab&#243n", answers:["i", "j", "k"], pictAnswer: [3, 0, 7] },		
				{letra:"j", imagen:"assets/images/sonidoinicial/jugo.png", label: "jugo", answers:["j", "p", "d"], pictAnswer: [1, 8, 4] },
				{letra:"g", imagen:"assets/images/sonidoinicial/        ", label: "gigante", answers:["m", "b", "g"], pictAnswer: [9, 5, 2] },
				{letra:"g", imagen:"assets/images/sonidoinicial/gorra.png", label: "gorra", answers:["v", "z", "b"], pictAnswer: [3, 6, 0] },
				{letra:"&#241", imagen:"assets/images/sonidoinicial/        ", label: "&#209o&#209o", answers:["o", "s", "&#209"], pictAnswer: [7, 1, 4] }, 
				{letra:"&#241", imagen:"assets/images/sonidoinicial/nandu.png", label: "&#209and&#250", answers:["&#209", "f", "Ll"], pictAnswer: [5, 2, 8] },
				{letra:"v", imagen:"assets/images/sonidoinicial/vela1.jpg", label: "vela", answers:["d", "v", "s"], pictAnswer: [9, 6, 3] },
				{letra:"v", imagen:"assets/images/sonidoinicial/vaso.jpg", label: "vaso", answers:["i", "q", "v"], pictAnswer: [4, 0, 7] },
				{letra:"Ll", imagen:"assets/images/sonidoinicial/lluvia.jpg", label: "lluvia", answers:["Ll", "z", "u"], pictAnswer: [8, 5, 1] },
				{letra:"Ll", imagen:"assets/images/sonidoinicial/llama.jpg", label: "llama", answers:["l", "Ll", "q"], pictAnswer: [2, 9, 6] }
			];



var ind= 0;
var modeChoice;

$(document).ready(function() {

//---BUTON EVENT SELECT LETTERS AND MODE----------------------

	
	$("input:radio").on("click",function(){
	modeChoice = $("input[name=mode]:checked").val();
	console.log(modeChoice);
	});

	$("#aeiou").on("click", function(){

		if (modeChoice == "soloPalabras"){
			 clearContent();
			 slideShow(vocales);

		} else if (modeChoice == "queSonidoI"){
			 clearContent();
			 queSonido(vocales);

		} else if (modeChoice == "cualIniciaI"){
			clearContent();
			cualInicia(vocales);
		};

	}); //end aeio buton event

	$("#MPSLT").on("click", function(){

		if (modeChoice == "soloPalabras"){
			 clearContent();
			 slideShow(mpslt);

		} else if (modeChoice == "queSonidoI"){
			 clearContent();
			 queSonido(mpslt);

		} else if (modeChoice == "cualIniciaI"){
			clearContent();
			cualInicia(mpslt);
		};

	}); //end MPSLT buton event

	$("#DRNFB").on("click", function(){

		if (modeChoice == "soloPalabras"){
			 clearContent();
			 slideShow(drnfb);

		} else if (modeChoice == "queSonidoI"){
			 clearContent();
			 queSonido(drnfb);

		} else if (modeChoice == "cualIniciaI"){
			clearContent();
			cualInicia(drnfb);
		};

	}); //end DRNFB buton event

	$("#jgñvLl").on("click", function(){

		if (modeChoice == "soloPalabras"){
			 clearContent();
			 slideShow(JG209VLl);

		} else if (modeChoice == "queSonidoI"){
			 clearContent();
			 queSonido(JG209VLl);

		} else if (modeChoice == "cualIniciaI"){
			clearContent();
			cualInicia(JG209VLl);
		};

	}); //end DRNFB buton event

	function clearContent(){
		$("#actionz").empty();
	}
// MODO SLIDESHOW//////////////////////////////////////////////////////////////////
	function slideShow(letters){
		var picFrame = $("<div>");
		picFrame.attr("class", "gameBox");
		picFrame.attr("id","letraGrande");
		picFrame.html("<img src=" + letters[0].imagen + " width='276px' height='276px'>");
		$("#actionz").append(picFrame); 
		
		var gameTextBox = $("<div>");
		gameTextBox.attr("class", "gameBox");
		gameTextBox.attr("id", "gameTextBoxCp");
		gameTextBox.html("<h1>" + letters[0].label + "</h1>");
		$("#actionz").append(gameTextBox);
		
		var buttonBox = $("<div>");
		buttonBox.attr("class", "gameBox");
		buttonBox.attr("id", "buttonBoxCp");
		$("#actionz").append(buttonBox);
		
		var nextButton = $("<button>");
		nextButton.attr("id", "nextButtonCp");
		nextButton.attr("class", "case");
		nextButton.html("Siguiente");
		buttonBox.append(nextButton);
	
		$("#nextButtonCp").click(function(){
			ind++;
			picFrame.html("<img src=" + letters[ind].imagen + " width='276px' height='276px'>");
			gameTextBox.html("<h1>" + letters[ind].label + "</h1>");
			
			if(ind == 9){
				ind=0;
			}
		});

	} // END OF SLIDE SHOW FUNCTION

// MODO QUE SONIDO//////////////////////////////////////////////////////////////////

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
		choiceContainer1.attr("class", "inLineContainer answerChoiceLabel");
		buttonBox.append(choiceContainer1);

		var choiceContainer2 = $("<div>");
		choiceContainer2.attr("class", "inLineContainer answerChoiceLabel");
		buttonBox.append(choiceContainer2);

		var choiceContainer3 = $("<div>");
		choiceContainer3.attr("class", "inLineContainer answerChoiceLabel");
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
			var theAnswer = $("input[name=answer]:checked").val();
			console.log(theAnswer);
			

			if (theAnswer == letters[ind].letra){
				ind ++;
				rightAnswer();
				picFrame.html("<img src=" + letters[ind].imagen + " width='276px' height='276px'>");
				input1.attr({type:"radio", name:"answer", value:letters[ind].answers[0]});
				inputText1.html(letters[ind].answers[0])
				input2.attr({type:"radio", name:"answer", value:letters[ind].answers[1]});
				inputText2.html(letters[ind].answers[1])
				input3.attr({type:"radio", name:"answer", value:letters[ind].answers[2]});
				inputText3.html(letters[ind].answers[2])
				theAnswer = "";
				$("input:radio").prop("checked", false);

			} else {
				wrongAnswer();
			};

			if(ind == 9){
				$("#picFrameCp").html("Lo lograste!!!!!");
				$("#buttonBoxCp").html("<a href='sonidoInicial.html'>REGRESAR");
			}
		}); // END OF RADIO EVENT

	}//END OF QUE SONIDO FUNCTION

// MODO CUAL INICIA//////////////////////////////////////////////////////////////////

function cualInicia(letters){
		var picFrame = $("<div>");
		picFrame.attr("class", "gameBox");
		picFrame.attr("id","letraGrande");
		picFrame.html("<h1>" + letters[0].letra + "</h1>");
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
		var inputPicture1 = $("<img>");
		inputPicture1.attr({src: letters[letters[0].pictAnswer[0]].imagen, width:"100px", height:"100px"});
		choiceContainer1.append(inputPicture1);

		var input2 = $("<input>");
		input2.attr({type:"radio", name:"answer", value:letters[0].answers[1]});
		choiceContainer2.append(input2);
		var inputPicture2 = $("<img>");
		inputPicture2.attr({src: letters[letters[0].pictAnswer[1]].imagen, width:"100px", height:"100px"});
		choiceContainer2.append(inputPicture2);

		var input3 = $("<input>");
		input3.attr({type:"radio", name:"answer", value:letters[0].answers[2]});
		choiceContainer3.append(input3);
		var inputPicture3 = $("<img>");
		inputPicture3.attr({src: letters[letters[0].pictAnswer[2]].imagen, width:"100px", height:"100px"});
		choiceContainer3.append(inputPicture3);

		$("input:radio").click(function(){
			var theAnswer = $("input[name=answer]:checked").val();
			console.log(theAnswer);
			

			if (theAnswer == letters[ind].letra){
				ind ++;
				console.log("this is ind:" + ind);
				console.log("cambia a:" +  letters[ind].letra);
				rightAnswer();
				picFrame.html("<h1>" + letters[ind].letra + "</h1>");
				
				input1.attr({type:"radio", name:"answer", value:letters[ind].answers[0]});
				inputPicture1.attr({src: letters[letters[ind].pictAnswer[0]].imagen, width:"100px", height:"100px"});

				
				input2.attr({type:"radio", name:"answer", value:letters[ind].answers[1]});
				inputPicture2.attr({src: letters[letters[ind].pictAnswer[1]].imagen, width:"100px", height:"100px"});
				
				input3.attr({type:"radio", name:"answer", value:letters[ind].answers[2]});
				inputPicture3.attr({src: letters[letters[ind].pictAnswer[2]].imagen, width:"100px", height:"100px"});
				
				theAnswer = "";
				$("input:radio").prop("checked", false);

			} else {
				wrongAnswer();
			};

			if(ind == 9){
				picFrame.empty
				$("#picFrameCp").html("Lo lograste!!!!!");
				$("#buttonBoxCp").html("<a href='sonidoInicial.html'>REGRESAR");
			}
		}); // END OF RADIO EVENT

	 }//END OF CUALI NICIA FUNCTION





//FUNCIONES VENTANA DE RESPUESTA//////////////////////////////////////////////////////////////////

	function rightAnswer(){
		$("#mask").css("display", "block");
		$("#popText").html("Fantastico tu respuesta es correcta");
	}

	$("#theX").on("click", function(){
		$("#mask").css("display", "none");		
	});


	function wrongAnswer(){
		$("#mask").css("display", "block");
		$("#popText").html("Tu respuesta no es correcta. Intentalo de nuevo");
	}





	




});// END OF FUNCION GET READY 