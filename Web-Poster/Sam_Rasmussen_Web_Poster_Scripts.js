$('.fullPageTakeover').on('click', function () {

	$(this).fadeOut(500, function() {
		$('.mainPageContent').fadeIn(500)
	});

})

//Couldn't get this to work. Was trying to get it so that hovering 
//the cursor over the white bars would pull out the text in a drawer-style animation

// $('.studioSections').hover(function() {

// 	//select ID of child div
// 	var sectionID = $(this).children(this).attr('id');

// 	//log ID to console
// 	console.log ('now hovering over ' + sectionID);

// 	//play animation for div defined earlier
// 	$(sectionID).animate({
// 		'margin-left':'-=0px', width:'+=10px'
// 	}, 500);

// })

//Wait for mouse to leave, play closing animation
// $('.studioSections').mouseleave(function() {

// 	var sectionID = $(this).children(this).attr('id');
		
// 	console.log ('now leaving ' + sectionID);
// 	$(sectionID).animate({
// 		marginLeft:'-600px',
// 		display:'none'
// 	}, 500);

// })