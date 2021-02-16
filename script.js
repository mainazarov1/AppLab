let bg = document.querySelector(".parallax__phone");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  bg.style.transform = "rotate(-" + x * 25 + "deg)";

  // bg.style.transform = "translate(-" + x * 120 + "px, " + y * 100 + "px)";
});

let backg = document.querySelector(".parallax__phone2");
window.addEventListener("mousemove", function (e) {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;
  backg.style.transform = "rotate(" + x * 25 + "deg)";
  // backg.style.transform = "translate(" + x * 50 + "px, -" + y * 50 + "px)";
});

// let header_bg = document.querySelector(".header");
// window.addEventListener("scroll", () => {
// 	if ($(this).scrollTop() > 100) {
// 		$("header").addClass("not-transparent");
// }
// else {
// 		$("header").removeClass("not-transparent");
// }
// });

// window.onscroll = function() {scrollFunction()};
// 	function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementByClass("header").style.background = '#F55767';
//   } else {
//     document.getElementByClass("header").style.background = '#F55767';
//   }
// 	}

function scrollWin() {
  // window.scrollTo(500, 0);

  // alert('window.pageXOffset= '+window.pageXOffset + '\nwindow.pageYOffset='+ window.pageYOffset);

	var el = document.querySelector(".header");
  if (window.pageYOffset >= 100) {
    el.style.padding = "10px 0";
  }else {
    el.style.padding = "50px 0";
	}
	if (window.pageYOffset >= 100) {
		el.style.background = 'var(--light-grey)';		
	} else {
		el.style.background = '';
	}
}


