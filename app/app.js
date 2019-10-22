document.addEventListener("DOMContentLoaded", init);
function init() {

	const output = document.querySelector(".output");
	const button = document.querySelector("button");
	const inputName = document.querySelector("input");
	const wraper = document.querySelector(".wraper");
	
	button.addEventListener("click", showMessage);
	function showMessage(e) {
		e.preventDefault();
		const date = new Date();
		console.log(`${date.getHours()}:${date.getMinutes()}`);
		
		let myPicture1 = document.querySelector(".picture1"),
			myPicture2 = document.querySelector(".picture2"),
			myPicture3 = document.querySelector(".picture3"),
			myPicture4 = document.querySelector(".picture4"),
			myPicture5 = document.querySelector(".picture5"),
			para = document.querySelector("p");

		let currentTime = date.getHours(); 
		
		if (currentTime > 6 && currentTime < 13) {
			wraper.style.backgroundColor = "#f2ffff";
			output.style.color = "#000000";
			output.innerHTML = `<h1>Good morning ${inputName.value} on my webpage!</h1>`;
			myPicture1.style.display = "block";
			inputName.style.cssText = "display: none";
			button.style.cssText = "display: none";
			para.innerHTML = "<a href='https://mpreus.github.io/myProfile/' target='_blank' style='text-decoration:none; color:black;'>Enter my site here</a>";
		}
		else if (currentTime >= 13 && currentTime < 18) {
			wraper.style.backgroundColor = "#fffcc7";
			output.setAttribute("style", "color: #000000;");
			output.innerHTML = `<h1>Good afternoon ${inputName.value} on my webpage!</h1>`;
			myPicture1.style.display = "none";
			myPicture2.style.display = "block";
			inputName.style.cssText = "display: none";
			button.style.cssText = "display: none";
			para.innerHTML = "<a href='https://mpreus.github.io/myProfile/' target='_blank' style='text-decoration:none; color:black;'>Enter my site here</a>";
		}
		else if (currentTime >= 18 && currentTime < 22) {
			wraper.style.backgroundColor = "#faf4de";
			output.style.cssText = "color: #000000";
			output.innerHTML = `<h1>Good evening ${inputName.value} on my webpage!</h1>`;
			myPicture2.style.display = "none";
			myPicture3.style.display = "block";
			inputName.style.cssText = "display: none";
			button.style.cssText = "display: none";
			para.innerHTML = "<a href='https://mpreus.github.io/myProfile/' target='_blank' style='text-decoration:none; color:black;'>Enter my site here</a>";
			
		}
		else if (currentTime >= 22 && currentTime < 24) {
			wraper.style.backgroundColor = "#000000";
			wraper.style.color = "#eeeeee";
			output.style.color = "#eeeeee";
			output.innerHTML = `<h1>Hey ${inputName.value}, that's bedtime!</h1>`;
			myPicture3.style.display = "none";
			myPicture4.style.display = "block";
			inputName.style.cssText = "display: none";
			button.style.cssText = "display: none";
			para.innerHTML = "<a href='https://mpreus.github.io/myProfile/' target='_blank' style='text-decoration:none; color:white;'>Enter my site here</a>";
		}
		else if (currentTime <= 6 && currentTime > 0) {
			wraper.style.backgroundColor = "#000000";
			wraper.style.color = "#eeeeee";
			output.style.color = "#eeeeee";
			output.innerHTML = `<h1>Hey ${inputName.value}, that's bedtime!</h1>`;
			myPicture4.style.display = "none";
			myPicture5.style.display = "block";
			inputName.style.cssText = "display: none";
			button.style.cssText = "display: none";
			para.innerHTML = "<a href='https://mpreus.github.io/myProfile/' target='_blank' style='text-decoration:none; color:white;'>Enter my site here</a>";
		}
		inputName.value = "";
	}

}