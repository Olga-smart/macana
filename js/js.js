const search = document.querySelector('.search-in-nav');
const body = document.querySelector('body');

search.addEventListener('click', function(e) {
	e.stopPropagation();
	this.classList.add('active');
});

body.addEventListener('click', function() {
	search.classList.remove('active');
});

