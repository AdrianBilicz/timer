let clock = null;
function setup(){
	$clock = document.querySelector('h1');
	$clock.textContent = '00;00'
}

window.addEventListener('DOMContentLoaded', setup);