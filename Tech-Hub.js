var v = document.getElementById("nav-container");
var b = document.getElementById("nav-btn");
var i = 0;
function menu(x) {
	x.classList.toggle("change");
	if(b.style.marginLeft == "10px" || b.style.marginLeft == "") {
		clearInterval(this.trans2);
		this.trans = setInterval(iterate,20)
	} else if(b.style.marginLeft == "420px") {
		clearInterval(this.trans);
		this.trans2 = setInterval(iterate2,20)
	}
	
	if(v.style.display == "") {
		v.style.display = "block";
	} else if(v.style.display == "none") {
		v.style.display = "block";
	} else if(v.style.display == "block") {
		v.style.display = "none";
	}
}

function iterate() {
	
	if(i >= 420) {
		b.style.marginLeft = "420px";
	} else {
		b.style.marginLeft = i + "px";
		i += 50;
	}
}

function iterate2() {
	if( i <= 10) {
		b.style.marginLeft = "10px";
	} else {
		b.style.marginLeft = i + "px";
	    i -= 50;
	}
}

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

var acc = document.getElementsByClassName("acc-section");
var replies = document.getElementsByClassName("replies");
var comment = document.getElementsByClassName("comment-section");

function show(n) {
	for(var s = 0; s < acc[n - 1].childNodes.length; s++) {
		if(acc[n - 1].childNodes[s].className == "comment-section") {
			if(acc[n - 1].childNodes[s].style.display == "none" || acc[n - 1].childNodes[s].style.display == "") {
				acc[n - 1].childNodes[s].style.display = "block";
			} else {
				acc[n - 1].childNodes[s].style.display = "none";
			}
		}
	}
};

var like = document.getElementsByClassName("like");
function liked(j) {
		if(acc[j - 1].childNodes[7].firstElementChild.style.background == "blue") {
			acc[j - 1].childNodes[7].firstElementChild.style.background = "white";
			acc[j - 1].childNodes[7].firstElementChild.style.color = "black";
			acc[j - 1].childNodes[7].firstElementChild.innerHTML = "<i class='fa fa-thumbs-up'></i>" + "Like";
		} else {
			acc[j - 1].childNodes[7].firstElementChild.style.background = "blue";
			acc[j - 1].childNodes[7].firstElementChild.style.color = "white";
			acc[j - 1].childNodes[7].firstElementChild.innerHTML = "<i class='fa fa-thumbs-up'></i>" + "Liked";
		}
	}
