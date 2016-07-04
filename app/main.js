var imgURL = chrome.extension.getURL("toi-icon.png");

function setBtn(){
	$('.Gallery-content').append(
		'<button type="button" id="toi-btn" class="toi-btn"><img src="' + imgURL + '" alt="View original size" /><span>Open!</span></button>'
	)
	$('#toi-btn').on('click', function(e){
		$('.Gallery-content').removeAttr('Style');
		$('.Gallery-media img').removeAttr('Style');
	})
}

setBtn();