const lis = document.querySelectorAll('li');

Array.from(lis).forEach(function(li){
	li.addEventListener('click', function(){
		let color = li.className;
		const body = document.querySelector('body');
		body.className = color;
		li.childNodes[0].checked = true;
	});
});

const clickButton = document.querySelector('.image-button');
const menu = document.querySelector('.menu-items');

clickButton.addEventListener('click', function(){
	menu.classList.toggle("visibility");
})
