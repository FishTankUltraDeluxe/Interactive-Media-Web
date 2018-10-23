$('body').keydown(function(event) {

	console.log(event.which);

})




// var rand = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];

// $('body').click(function(){ 

// 	var bg = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)]
// 	$('body').css('background',bg)

// })

// $('#bigDiv').on('click', function () {

// 	var divText = 'Goodbye!'
// 	$('#bigDiv').text(divText);
// 	$(this).delay(1000).fadeOut(150);

// })

// $('#balloon').on('click', function () {

// 	$('#balloon').height('300px').width('300px').delay(10).fadeOut(10)
// 	alert('pop')

// })