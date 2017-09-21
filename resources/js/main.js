$(document).ready(function() {
	$('.carousel').slick({
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		fade: true,
		speed: 2000,
		draggable: false,
		pauseOnFocus: true,
		pauseOnHover: true
	});
});

function showAllItems() {
	var x = document.getElementsByClassName("cat-item");
	var i;
	for (i = 0; i < x.length; i++) {
		if (x[i].style.display === 'none') {
			x[i].style.display = 'flex';
		}
	}
}

function showItems(checkboxElem, categoria) {
	var x = document.getElementsByClassName("cat-item");
	var i;
	for (i = 0; i < x.length; i++) {
		if (!(x[i].className.includes(categoria))) {
  			x[i].style.display = 'none';
		} else {
			x[i].style.display = 'flex';
		}
	}
}

