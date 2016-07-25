var imgURL = chrome.extension.getURL("toi-icon.png");
var toi    = false;
var imageWidth   = 0;

function removeStyles(){
	$('.Gallery-content').removeAttr('Style');
	$('.Gallery-media img').removeAttr('Style');
}

function getStyles(){
	imageWidth    = $('.media-image').css('width');
}

function setStyles(){
	$('.media-image').css('width', imageWidth);
}

function setBtn(str){
	$('.Gallery-content').append(
		'<button type="button" id="toi-btn" class="toi-btn"><img src="' + imgURL + '" alt="View original size" /><span>toggle show image</span></button>'
		)
	$('#toi-btn').on('click', function(e){
		if (toi == false) {		
			getStyles();
			removeStyles();
			toi = true;
		} else if (toi == true) {
			setStyles();
			toi = false;
		};
	})
}

setBtn()

$(window).on('keydown', function(e){
	if (event.which == 79) {
		if (toi == false) {
			getStyles()
			removeStyles()
			toi = true;
		} else if (toi == true) {
			setStyles()
			toi = false;
		};
	} else if (event.which == 37 || event.which == 39) {
		toi = false;
	}
})

var config = { attributes: true, childList: true, characterData: true };
var parent = document.getElementsByClassName('Gallery-content')
var target = document.getElementsByClassName('media-image');
var mo = new MutationObserver(function(){
	mm.observe(target[0], config);
});
var mm = new MutationObserver(function(){
	getStyles()
	setStyles()
})
mo.observe(parent[0], config);
mo.disconnect();