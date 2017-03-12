var vocales = [{letra:"a", imagen:"assets/images/sonidoinicial/ala.png", label: "ala" },
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
				{letra:"m", imagen:"assets/images/sonidoinicial/pila.png", label: "pila" },
				{letra:"m", imagen:"assets/images/sonidoinicial/silla.png", label: "silla" }, 
				{letra:"a", imagen:"assets/images/sonidoinicial/sopa.png", label: "sopa" },
				{letra:"a", imagen:"assets/images/sonidoinicial/taco.png", label: "taco" },
				{letra:"a", imagen:"assets/images/sonidoinicial/tela.png", label: "tela" },
				{letra:"a", imagen:"assets/images/sonidoinicial/uno.png", label: "uno" },
				{letra:"a", imagen:"assets/images/sonidoinicial/uva.png", label: "uva" },
				

			];


var i=0;
	document.getElementById("next").onclick = function(){
		var nueva = mpslt[i+1].imagen;
		console.log(nueva);
		var etiqueta = mpslt[i+1].label;
		document.getElementById("myImg").src = nueva;
		document.getElementById("wLabel").innerHTML = etiqueta;

		i = i+1;

		if (i == 9) {
			i = 0;
		};
	};
