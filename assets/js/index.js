'use strict';

console.log('Hello, world.');

const main = document.querySelector('main');
const url = 'https://images.unsplash.com/photo-1605142859862' + 
			'-978be7eba909?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8M' + 
			'HxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit' +
			'=crop&w=1170&q=80';
function setBackground() {
	main.style.background = `#fff url(${url}) center center / cover no-repeat`;
}

setBackground();