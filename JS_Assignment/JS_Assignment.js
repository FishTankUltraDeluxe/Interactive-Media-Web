//Variables for reading which key was pressed
var whichKey = 0
var keyValue = 'null'
var hexArray = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
var fontArray = ['Amatic SC','Anton','Baloo Bhaijaan','Bangers','Caveat Brush','Hanalei Fill','Kumar One Outline','Leckerli One','Lilita One','Limelight','Luckiest Guy','Mali','Merriweather','Monoton','Montserrat','Oswald','Pacifico','Pattaya','Playfair Display','Poiret One','Poller One','Poor Story','Press Start 2P','Raleway','Roboto','Roboto Mono','Roboto Slab','Rock Salt','Sigmar One','Spicy Rice','Titan One','Ubuntu']

//Variables for spawnChar function
var newFontSize = 'null'
var newColor = 'null'
var newLeftPos = 0
var newTopPos = 0
var newRotation = 90
var newFontFace = 'null'
var maxHeight = $(window).height();
var maxWidth = $(window).width();

//This was some big cleanup on this one. Generate a random hex-code for colors and return the value as requested. 
//I originally had this code in quite a few places, once I learned how the return function worked I immediately did this to clean up a lot of messy code because let's be real, this is a mess to look at

function randomHex() {

	return hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)]		

}

//Randomize starting text font, font color, and background color
$(document).ready(function () {

	newColor = randomHex();
	console.log('Random Color Activated, new text color is ' + newColor)
	$('p').css('color', newColor)

	newBackground = '#' + randomHex();
	console.log('Background Activated, New Color is ' + newBackground)
	$('body').css('background', newBackground)	

	var newFont = fontArray[Math.ceil(Math.random() * fontArray.length)]
	$('#startText').attr("style","font-family: " + newFont + "; color: #" + newColor + ";");

	setInterval(
		function() {

			var i = 1

			if (i == 1) {

				i = i+1
				newFont = fontArray[Math.ceil(Math.random() * fontArray.length)]
				$('#startText').attr("style","font-family: " + newFont + "; color: #" + newColor + ";");

			}},1000);

});

//If the window is resized, set new maximum bounds for letter-spawning
$(window).resize(function() {

	maxHeight = $(window).height();
	maxWidth = $(window).width();

})

//Function called when a key is pressed. Generate random values for position, rotation, typeface, color, and other relevant items, and append it to the html file
function spawnChar(upperLetter, lowerLetter) {

	$('#startText').remove()
	lowerOrUpper = (Math.ceil(Math.random() * 2))
	newFontSize = (Math.ceil(Math.random() * 400))
	// newColor = hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)];
	newLeftPos = (Math.ceil(Math.random() * maxWidth))
	newTopPos = (Math.ceil(Math.random() * maxHeight))
	newRotation = (Math.ceil(Math.random() * 359))
	newFontFace = fontArray[Math.ceil(Math.random() * fontArray.length)]
	console.log(fontArray.length)
	console.log(newFontFace)

	if (lowerOrUpper == 1) {

		$('#contentBox').append('<p style="font-size:' + newFontSize + 'px; color: #' + newColor + '; left: ' + newLeftPos + 'px; top: ' + newTopPos + 'px; transform: rotate(' + newRotation + 'deg); font-family: ' + newFontFace + '; " >' + lowerLetter + '</p>')

	} else {

		$('#contentBox').append('<p style="font-size:' + newFontSize + 'px; color: #' + newColor + '; left: ' + newLeftPos + 'px; top: ' + newTopPos + 'px; transform: rotate(' + newRotation + 'deg); font-family: ' + newFontFace + '; " >' + upperLetter + '</p>')

	}

}

//Variables for secrectCode function
var codeArray = [];
var codeConcat = 'null'

//Functions called to check if the correct sequence of characters is being pressed to activate a secret code that will modify the visual appearance of the screen. The first is a switch to check the number of characters currently stored in the array. In each case, it concats the existing elements of the array and checks if the stored string is correct.

function secretCode(character)  {

		//This switch inserts the most recently pressed character into the array, concatonates the array, and logs the results to the console. It then compares its result with the codeChecker function using its switch-case terms to determine if a code has been entered correctly or not.

		switch (codeArray.length) {

			case 0:
				codeArray.push(character)
				codeConcat = codeArray[0];
				console.log(codeConcat);
				codeChecker (codeConcat);
				break;
			case 1:
				codeArray.push(character)
				codeConcat = codeArray[0] + codeArray[1];
				console.log(codeConcat);
				codeChecker (codeConcat);
				break;
				break;
			case 2:
				codeArray.push(character)
				codeConcat = codeArray[0] + codeArray[1] + codeArray[2];
				console.log(codeConcat);
				codeChecker (codeConcat);
				break;				
			case 3:
				codeArray.push(character)
				codeConcat = codeArray[0] + codeArray[1] + codeArray[2] + codeArray[3];
				console.log(codeConcat);
				codeChecker (codeConcat);
				break;				
			case 4:
				codeArray.push(character)			
				codeConcat = codeArray[0] + codeArray[1] + codeArray[2] + codeArray[3] + codeArray[4];
				console.log(codeConcat);
				codeChecker (codeConcat);
				break;				
			case 5:
				console.log('Array is at max!')
				break;							
						
		}

}

//These are the following codes that we will use for this bit. Typing these codes will activate its listed effect:
	// Spin: 	Spin letters around once
	// Color: 	Change the text color to a random value
	// Back: 	Change the background color to a random value
	// List: 	Reset the text to show an in-line list of characters
	// Reset: 	Clear screen

//This function is a case switch that allows for the codes to be entered. If an incorrect character is entered, it clears the code array. If the correct sequence is entered, run the appropriate code to accomplish the intended effect, then clear the array.

function codeChecker (currentCode) {

	var codeConcat = currentCode;

	switch (codeConcat) {

		case 'S': 
			// //console.log('String is valid')
			break;	
		case 'SP': 
			//console.log('String is valid')
			break;	
		case 'SPI': 
			//console.log('String is valid')
			break;	
		
			case 'SPIN': 
				console.log('Spin Text Code Activated')

				$('p').animate(
				    { deg: 360 },
				    {
				      duration: 300,
				      step: function(now) {
				        $(this).css({ transform: 'rotate(' + now + 'deg)' });
				      }
				    }
				  );

				//Spinning solution pulled from Hideyuki Tabata on Codepen | https://codepen.io/seeker5084/pen/VMQGwX/

				codeArray = [];
				break;	

		case 'C': 
			//console.log('String is valid')
			break;	
		case 'CO': 
			//console.log('String is valid')
			break;	
		case 'COL': 
			//console.log('String is valid')
			break;	
		case 'COLO': 
			//console.log('String is valid')
			break;	
			
			case 'COLOR': 

				newTextColor = '#' + randomHex();
				console.log('Random Color Code Activated, new text color is ' + newTextColor)
				$('p').css('color', newTextColor)
				
				//And then make the text that is typed after a different color
				newColor = randomHex();

				codeArray = [];
				break;	

		case 'B': 
			//console.log('String is valid')
			break;	
		case 'BA': 
			//console.log('String is valid')
			break;	
		case 'BAC': 
			//console.log('String is valid')
			break;	
			
			case 'BACK': 
				newBackground = "#" + randomHex();
				console.log('Background Code Activated, New Color is ' + newBackground)
				$('body').css('background', newBackground)
				codeArray = [];
				break;	

		case 'L': 
			//console.log('String is valid')
			break;	
		case 'LI': 
			//console.log('String is valid')
			break;	
		case 'LIS': 
			//console.log('String is valid')
			break;	
			
			case 'LIST': 
				console.log('List Code Activated')
				$('p').attr("style","position:static; display:inline;");

				codeArray = [];
				break;

		case 'R': 
			//console.log('String is valid')
			break;	
		case 'RE': 
			//console.log('String is valid')
			break;	
		case 'RES':
			//console.log('String is valid') 
			break;	
		case 'RESE': 
			//console.log('String is valid')
			break;
			
			case 'RESET': 
				console.log('Reset Code Activated')
				$('p').remove();
				codeArray = [];
				$('#contentBox').append('<div id="startText" style="color: #' + newColor + '">Press any letter key to start!</div>')
				break;

		default:
			console.log('String is invalid, resetting')
			codeArray = [];
			break;

	}

}

//This event triggers when a key is pressed. It checks which key was pressed, then using a switch-case calls the spawnChar function and inserts the appropriate characters into the function
$('body').keydown(function(event) {

	whichKey = event.which
	// console.log(whichKey);

	switch (whichKey) {

	case 65: 
		spawnChar ('A','a')
		console.log('[A] key was pressed');
		secretCode('A')
		break;
	case 66:
		spawnChar ('B','b')
		console.log('[B] key was pressed');
		secretCode('B')
		break;
	case 67:
		spawnChar ('C','c')
		console.log('[C] key was pressed');
		secretCode('C')
		break;
	case 68:
		spawnChar ('D','d')
		console.log('[D] key was pressed');
		secretCode('D')		
		break;
	case 69:
		spawnChar ('E','e')
		console.log('[E] key was pressed');
		secretCode('E')		
		break;				
	case 70:
		spawnChar ('F','f')
		console.log('[F] key was pressed');
		secretCode('F')		
		break;				
	case 71:
		spawnChar ('G','g')
		console.log('[G] key was pressed');
		secretCode('G')		
		break;
	case 72:
		spawnChar ('H','h')
		console.log('[H] key was pressed');
		secretCode('H')		
		break;
	case 73:
		spawnChar ('I','i')
		console.log('[I] key was pressed');
		secretCode('I')		
		break;
	case 74:
		spawnChar ('J','j')
		console.log('[J] key was pressed');
		secretCode('J')		
		break;
	case 75:
		spawnChar ('K','k')
		console.log('[K] key was pressed');
		secretCode('K')		
		break;
	case 76:
		spawnChar ('L','l')
		console.log('[L] key was pressed');
		secretCode('L')		
		break;
	case 77:
		spawnChar ('M','m')
		console.log('[M] key was pressed');
		secretCode('M')		
		break;
	case 78:
		spawnChar ('N','n')
		console.log('[N] key was pressed');
		secretCode('N')		
		break;
	case 79:
		spawnChar ('O','o')
		console.log('[O] key was pressed');
		secretCode('O')		
		break;
	case 80:
		spawnChar ('P','p')
		console.log('[P] key was pressed');
		secretCode('P')		
		break;
	case 81:
		spawnChar ('Q','q')
		console.log('[Q] key was pressed');
		secretCode('Q')		
		break;
	case 82:
		spawnChar ('R','r')
		console.log('[R] key was pressed');
		secretCode('R')		
		break;
	case 83:
		spawnChar ('S','s')
		console.log('[S] key was pressed');
		secretCode('S')		
		break;
	case 84:
		spawnChar ('T','t')
		console.log('[T] key was pressed');
		secretCode('T')		
		break;
	case 85:
		spawnChar ('U','u')
		console.log('[U] key was pressed');
		secretCode('U')		
		break;
	case 86:
		spawnChar ('V','v')
		console.log('[V] key was pressed');
		secretCode('V')		
		break;
	case 87:
		spawnChar ('W','w')
		console.log('[W] key was pressed');
		secretCode('W')		
		break;
	case 88:
		spawnChar ('X','x')
		console.log('[X] key was pressed');
		secretCode('X')		
		break;
	case 89:
		spawnChar ('Y','y')
		console.log('[Y] key was pressed');
		secretCode('Y')		
		break;
	case 90:
		spawnChar ('Z','z')
		console.log('[Z] key was pressed');
		secretCode('Z')
		break;

	}

})