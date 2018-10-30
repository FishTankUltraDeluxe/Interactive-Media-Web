var whichKey = 0
var keyValue = 'null'
var hexArray = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
var fontArray = ['Abril+Fatface','Acme','Anton','Bree+Serif','Cabin','Fira+Sans','Gloria+Hallelujah','Lobster','Mali','Merriweather','Noto+Sans+JP','Open+Sans','Oswald','Pacifico','Patrick+Hand','Playfair+Display','Righteous','Roboto','Roboto+Mono','Roboto+Slab','Shadows+Into+Light','Source+Code+Pro','Spicy+Rice','Suwannaphum','Varela+Round']


newFontSize = 'null'
newColor = 'null'
newLeftPos = 0
newTopPos = 0
newRotation = 90
newFontFace = 'null'
maxHeight = $(window).height();
maxWidth = $(window).width();
// console.log ('New Window Size: ' + maxHeight + ' height & ' + maxWidth + ' wide')

$(window).resize(function() {

	maxHeight = $(window).height();
	maxWidth = $(window).width();
	// console.log ('New Window Size: ' + maxHeight + ' height & ' + maxWidth + ' wide')

})

function spawnChar(upperLetter, lowerLetter) {

	lowerOrUpper = (Math.ceil(Math.random() * 2))
	newFontSize = (Math.ceil(Math.random() * 400))
	newColor = hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)] + hexArray[Math.ceil(Math.random() * 15)];
	newLeftPos = (Math.ceil(Math.random() * maxWidth))
	newTopPos = (Math.ceil(Math.random() * maxHeight))
	newRotation = (Math.ceil(Math.random() * 359))
	newFontFace = fontArray[Math.ceil(Math.random() * 24)]

	if (lowerOrUpper == 1) {

		$('#contentBox').append('<p style="font-size:' + newFontSize + 'px; color: #' + newColor + '; left: ' + newLeftPos + 'px; top: ' + newTopPos + 'px; transform: rotate(' + newRotation + 'deg); font-family: ' + newFontFace + '; " >' + lowerLetter + '</p>')

	} else {

		$('#contentBox').append('<p style="font-size:' + newFontSize + 'px; color: #' + newColor + '; left: ' + newLeftPos + 'px; top: ' + newTopPos + 'px; transform: rotate(' + newRotation + 'deg); font-family: ' + newFontFace + '; " >' + upperLetter + '</p>')

	}

}

$('body').keydown(function(event) {

	whichKey = event.which
	// console.log(whichKey);

	switch (whichKey) {

	case 65: 
		spawnChar ('A','a')
		console.log('[A] key was pressed');
		break;
	case 66:
		spawnChar ('B','b')
		console.log('[B] key was pressed');
		break;
	case 67:
		spawnChar ('C','c')
		console.log('[C] key was pressed');
		break;
	case 68:
		spawnChar ('D','d')
		console.log('[D] key was pressed');
		break;
	case 69:
		spawnChar ('E','e')
		console.log('[E] key was pressed');
		break;				
	case 70:
		spawnChar ('F','f')
		console.log('[F] key was pressed');
		break;				
	case 71:
		spawnChar ('G','g')
		console.log('[G] key was pressed');
		break;
	case 72:
		spawnChar ('H','h')
		console.log('[H] key was pressed');
		break;
	case 73:
		spawnChar ('I','i')
		console.log('[I] key was pressed');
		break;
	case 74:
		spawnChar ('J','j')
		console.log('[J] key was pressed');
		break;
	case 75:
		spawnChar ('K','k')
		console.log('[K] key was pressed');
		break;
	case 76:
		spawnChar ('L','l')
		console.log('[L] key was pressed');
		break;
	case 77:
		spawnChar ('M','m')
		console.log('[M] key was pressed');
		break;
	case 78:
		spawnChar ('N','n')
		console.log('[N] key was pressed');
		break;
	case 79:
		spawnChar ('O','o')
		console.log('[O] key was pressed');
		break;
	case 80:
		spawnChar ('P','p')
		console.log('[P] key was pressed');
		break;
	case 81:
		spawnChar ('Q','q')
		console.log('[Q] key was pressed');
		break;
	case 82:
		spawnChar ('R','r')
		console.log('[R] key was pressed');
		break;
	case 83:
		spawnChar ('S','s')
		console.log('[S] key was pressed');
		break;
	case 84:
		spawnChar ('T','t')
		console.log('[T] key was pressed');
		break;
	case 85:
		spawnChar ('U','u')
		console.log('[U] key was pressed');
		break;
	case 86:
		spawnChar ('V','v')
		console.log('[V] key was pressed');
		break;
	case 87:
		spawnChar ('W','w')
		console.log('[W] key was pressed');
		break;
	case 88:
		spawnChar ('X','x')
		console.log('[X] key was pressed');
		break;
	case 89:
		spawnChar ('Y','y')
		console.log('[Y] key was pressed');
		break;
	case 90:
		spawnChar ('Z','z')
		console.log('[Z] key was pressed');
		break;

	}

})