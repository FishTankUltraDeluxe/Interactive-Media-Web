//openweathermap API key a1d5cd461239db268533663f1afc087d


var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,CA&appid=a1d5cd461239db268533663f1afc087d"

$.ajax({

	url: apiURL,
	success: function(cData) {

		C = (cData.main.temp - 273.15).toFixed(1);
		$("#section1").html("It is currently " + C + "&deg; C in Toronto");

	}

})

// $("#section1").click(function() {

// 	// fromTop = $("#section2").offset().top;
// 	// alert(fromTop);

// 	randomBox(1);

// })

// $("#section2").click(function() {

// 	randomBox(2);

// })

// $("#section3").click(function() {

// 	randomBox(3);

// })

// function randomBox(currentBox) {

// 	whichBox = Math.floor((Math.random()*3)+1);
// 	$(window).scrollTo("#section"+whichBox+"")

// }