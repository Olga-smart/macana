const search = document.querySelector('.search-in-nav');
const body = document.body;
const footer = document.querySelector('.page-footer');
let footerHeight = footer.offsetHeight;

// Make Search in Nav to Work
search.addEventListener('click', function(e) {
	e.stopPropagation();
	this.classList.add('active');
});

body.addEventListener('click', function() {
	search.classList.remove('active');
});
// End Make Search in Nav to Work


// Fix footer on the bottom of the page
document.addEventListener('DOMContentLoaded', function() {
	footerHeight = footer.offsetHeight;
	body.style.paddingBottom = footerHeight + 'px';
});

window.addEventListener('resize', function() {
	footerHeight = footer.offsetHeight;
	body.style.paddingBottom = footerHeight + 'px';
});
// End Fix footer on the bottom of the page

