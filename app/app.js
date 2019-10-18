document.addEventListener("DOMContentLoaded", init);
function init() {

	const output = document.querySelector(".output");
	const button = document.querySelector("button");
	const inputName = document.querySelector("input");

	button.addEventListener("click", showMessage);
	function showMessage() {
		const date = new Date();
		let bodyBackground = document.querySelector("body");
		console.log(`${date.getHours()}:${date.getMinutes()}`);
		
		let myPicture = document.querySelector(".picture");
		
		let currentTime = date.getHours();

		if (currentTime >= 6 && currentTime < 13) {
			bodyBackground.style.backgroundColor = "#f2ffff";
			output.style.color = "#222";
			output.innerHTML = `<h1>Good morning ${inputName.value} on my webpage!</h1>`;
			
		}
		else if (currentTime >= 13 && currentTime <= 18) {
			bodyBackground.style.backgroundColor = "#fffcc7";
			output.setAttribute("style", "color: #222;");
			output.innerHTML = `<h1>Good afternoon ${inputName.value} on my webpage!</h1>`;
		}
		else if (currentTime > 18 && currentTime <= 22) {
			bodyBackground.style.backgroundColor = "#faf4de";
			output.style.cssText = "color: #222";
			output.innerHTML = `<h1>Good evening ${inputName.value} on my webpage!</h1>`;
		}
		else if (currentTime > 22) {
			bodyBackground.style.backgroundColor = "#222";
			output.style.color = "#eeeeee";
			output.innerHTML = `<h1>Hey ${inputName.value}, that's bedtime!</h1>`;
		}
		else if (currentTime < 6) {
			bodyBackground.style.backgroundColor = "#222";
			output.style.color = "#eeeeee";
			output.innerHTML = `<h1>Hey ${inputName.value}, that's bedtime!</h1>`;
		}
		
		inputName.value = "";
	}
}