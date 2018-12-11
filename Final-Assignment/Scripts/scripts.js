//Google Sheets keys to be inserted into the access URL
var weaponsSheet = "1XpglRS819Vg_OD5a9R2jTOFzjpnZWNedN4YmKb9Jieg";
var armorSheet = "1LsjdOrmW2mL7X4z_XxVkBtpeZPt8vk9ij_jTm8xefdQ";
var materialsSheet = "17aV_qDbSy4UY_hdQ9Mvzgvw6xNjmO-G53g8SRr-s1eU";

 // Define the Goolge Sheet URLs for JSON Access
var wepsUrl = "https://spreadsheets.google.com/feeds/list/" + weaponsSheet + "/od6/public/values?alt=json";
var armUrl = "https://spreadsheets.google.com/feeds/list/" + armorSheet + "/od6/public/values?alt=json";
var matsUrl = "https://spreadsheets.google.com/feeds/list/" + materialsSheet + "/od6/public/values?alt=json";



//When a weapon in the type selection table is clicked, store what was clicked for use on the next page.
$(".wepChooseName").click(function() {
	
	var searchCat = "null";

	searchCat = $(this).attr("id");
	// console.log(searchCat);

		//check if we're calling up the weapons table arrangment or the armor table arrangement

		if (searchCat == "Armor") {

			$("#titleDiv").fadeOut();			
			$("#armorDataSheet").fadeIn();

		} else {

			$("#titleDiv").fadeOut();
			$("#wepDataSheet").fadeIn();
			// console.log("searchCat is not armor!")
			getWepTData (searchCat);

		}

})

$("#wepDataSheet").on('click', '.listItem', function () {

	wepselect = $(this).attr('id');
	console.log(wepselect);

	$.ajax({

			dataType: "json",
			url: wepsUrl,
			success: function(data) {

					var wepName = 	data.feed.entry[wepselect].gsx$name.$t;
					var wepAtk = 	data.feed.entry[wepselect].gsx$attack.$t;
					var wepCat = 	data.feed.entry[wepselect].gsx$itemtype.$t;
					var wepSha =	data.feed.entry[wepselect].gsx$sharpness.$t;
					var wepEle = 	data.feed.entry[wepselect].gsx$element.$t;
					var wepNotes = 	data.feed.entry[wepselect].gsx$special.$t;
					var wepRare =	data.feed.entry[wepselect].gsx$rarity.$t;
					var wepGem = 	data.feed.entry[wepselect].gsx$gemslot.$t;
					var mat1 = 		data.feed.entry[wepselect].gsx$mat1.$t;
					var mat2 = 		data.feed.entry[wepselect].gsx$mat2.$t;
					var mat3 = 		data.feed.entry[wepselect].gsx$mat3.$t;
					var mat4 = 		data.feed.entry[wepselect].gsx$mat4.$t;
					var mat5 = 		data.feed.entry[wepselect].gsx$mat5.$t;
					var mat6 = 		data.feed.entry[wepselect].gsx$mat6.$t;
					var quan1 = 	data.feed.entry[wepselect].gsx$quantity1.$t;
					var quan2 = 	data.feed.entry[wepselect].gsx$quantity2.$t;
					var quan3 = 	data.feed.entry[wepselect].gsx$quantity3.$t;
					var quan4 = 	data.feed.entry[wepselect].gsx$quantity4.$t;
					var quan5 = 	data.feed.entry[wepselect].gsx$quantity5.$t;
					var quan6 = 	data.feed.entry[wepselect].gsx$quantity6.$t;
					var cost = 		data.feed.entry[wepselect].gsx$cost.$t;				

					$("#tableContainer").fadeOut();

					$("#statPage").fadeIn();

					$("#weaponName").text(wepName);
					$("#attackPower").text(wepAtk);
					$("#itemCatagory").text(wepCat);
					$("#sharp").text(wepSha);
					$("#element").text(wepEle);
					$("#specialNotes").text(wepRare);
					$("#gemSlots").text(wepGem);
					$("#rare").text(wepRare);
					$("#mat1").text(mat1);
					$("#quan1").text(quan1);
					$("#mat2").text(mat2);
					$("#quan2").text(quan2);
					$("#mat3").text(mat3);
					$("#quan3").text(quan3);
					$("#mat4").text(mat4);
					$("#quan4").text(quan4);
					$("#mat5").text(mat5);
					$("#quan5").text(quan5);
					$("#mat6").text(mat6);
					$("#quan6").text(quan6);

					$("#mat1counter").css("max", quan1);
					$("#mat2counter").css("max", quan2);
					$("#mat3counter").css("max", quan3);
					$("#mat4counter").css("max", quan4);
					$("#mat5counter").css("max", quan5);
					$("#mat6counter").css("max", quan6);

			}
		});

});

// This function accesses the Google Sheet and lists the values that match the criteria
function getWepTData (wepCatagory) {
	$.ajax({

		dataType: "json",
		url: wepsUrl,
		success: function(data) {

			var listLoopCount;

			//For each item in the array (currently the quantity is defined explicitly, a programatic way can come later), check if the item's type matches the Longsword catagory, and if it does, print it on the screen. Otherwise, print the item type in the console, so we know it's skipping over the right ones
			for (listLoopCount = 0; listLoopCount < 2; listLoopCount++) {

				if (data.feed.entry[listLoopCount].gsx$itemtype.$t == wepCatagory) {

					var entryID = data.feed.entry[listLoopCount].gsx$entrynum.$t
					var itemName = data.feed.entry[listLoopCount].gsx$name.$t
					var cssName = data.feed.entry[listLoopCount].gsx$cssname.$t
					var itemAtk = data.feed.entry[listLoopCount].gsx$attack.$t
					var itemEle = data.feed.entry[listLoopCount].gsx$element.$t
					var itemSha = data.feed.entry[listLoopCount].gsx$sharpness.$t
					var itemRare = data.feed.entry[listLoopCount].gsx$rarity.$t

					$("#wepDataSheet").append("<tr class='listItem' id='" + entryID + "'><th id='" + entryID + "'>"+itemName+"</th><th id='" + entryID + "'>"+itemAtk+"</th><th id='" + entryID + "'>"+itemSha+"</th><th id='" + entryID + "'>"+itemEle+"</th><th id='" + entryID + "'>"+itemRare+"</th></tr>")
					// $(".results").append("<p>Weapon: "+itemName+" | Attack Power: "+itemAtk+" | Catagory: "+itemType+" | Sharpness: "+itemSha+"</p>")

				}

			}

		}

	});


	// $.getJSON(wepsUrl, function(data) {

	// console.log(data.feed.entry[0]['gsx$Item']);

	// });
}