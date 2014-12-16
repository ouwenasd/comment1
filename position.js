
var vid = document.getElementById("myVideo");
vid.onloadedmetadata = function() {
	document.getElementById("comment").style.left=vid.getBoundingClientRect().left+'px';
	document.getElementById("comment").style.width=vid.getBoundingClientRect().right-vid.getBoundingClientRect().left+'px';
	document.getElementById("comment").style.top=vid.getBoundingClientRect().top+'px';
	document.getElementById("comment").style.height=(vid.getBoundingClientRect().bottom-vid.getBoundingClientRect().top)/7*6+'px';
	document.getElementById("waikuang").style.top=vid.getBoundingClientRect().top+'px';
	document.getElementById("waikuang").style.left=vid.getBoundingClientRect().right+8+'px';
	document.getElementById("danmuinput").style.top=vid.getBoundingClientRect().bottom+8+'px';
	document.getElementById("danmuinput").style.left=vid.getBoundingClientRect().left+8+'px';
};
