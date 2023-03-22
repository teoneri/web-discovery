let colors = ['blue', 'yellow', 'black', 'brown', 'red', 'orange', 'pink'];

let button = document.getElementById('button');

button.addEventListener('click', function(){
	var randomColor = colors[Math.floor(Math.random() * colors.length)]
	let container = document.getElementById('background')

	container.style.background = randomColor;
})