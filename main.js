const ONE_SECOND = 1000;
class Clock {
	constructor(){
		this.currentTime = 0;
		this.$clock = document.querySelector('h1');
		this.clock = null;
	}
	render(string){
		this.$clock.textContent = string;
	}
	start(formattedTime){
		this.limitTime = Clock.parseSeconds(formattedTime)
		
		this.clock = setInterval( () => {
			this.currentTime += ONE_SECOND
			let diff = this.limitTime - this.currentTime;
			this.render(diff)
		}, ONE_SECOND)
	}
	static parseSeconds(time){
		let [minutes,seconds] = time.split(':').map(Number)
		return minutes * 60 * ONE_SECOND + seconds * ONE_SECOND;

	}
}

function setup(){
	
	let clock1 = new Clock();
	clock1.start('10:00')
}

window.addEventListener('DOMContentLoaded', setup);