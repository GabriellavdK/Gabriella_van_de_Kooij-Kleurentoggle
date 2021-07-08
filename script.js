const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const clickButton = document.querySelector('.image-button');
const menu = document.querySelector('.menu-items');
const lis = document.querySelectorAll('li');

Array.from(lis).forEach(function(li){
	li.addEventListener('click', function(){
		let color = li.className;
		let colorNL = li.textContent;
		li.childNodes[0].checked = true;
		body.className = color;
		h1.innerHTML = colorNL;
		menu.classList.toggle("visibility");
	});
});

clickButton.addEventListener('click', function(){
	menu.classList.toggle("visibility");
})


// Helaas krijg ik de hover functie niet goed werkbaar omdat het menu verdwijnt wanneer je 

// clickButton.addEventListener('mouseover', function(){
// 	menu.classList.toggle("visibility");
// })
// clickButton.addEventListener('mouseleave', function(){
// 	menu.classList.toggle("visibility");
// })