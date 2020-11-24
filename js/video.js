var video;

window.addEventListener("load", function () {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function () {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function () {
	video.pause();
});

document.getElementById("slower").addEventListener("click", function setplaybackRate() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
})

document.getElementById("faster").addEventListener("click", function stplaybackRate() {
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
})

document.getElementById("skip").addEventListener("click", function () {
	if (video.currentTime > 30) {
		video.currentTime = 0;
		video.play();
	}
	video.play();
	video.currentTime += 5;
})

document.getElementById("mute").addEventListener("click", vidmute, false);

function vidmute() {

	if (video.muted) {
		document.getElementById("mute").innerHTML = "Mute";
		video.muted = false;
	}
	else {
		document.getElementById("mute").innerHTML = "Unmute";
		video.muted = true;
	}

}

document.querySelector("#old").addEventListener("click", function oldskool() {
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
})

document.querySelector("#original").addEventListener("click", function oldskool() {
	document.getElementById("myVideo").style.filter = "grayscale(0%)";
})

document.querySelector("#volumeSlider").addEventListener("click", () => {
	var x = document.querySelector("#volumeSlider").value;
	video.volume = x / 100;
	let volumeOutput = document.querySelector("#volume")
	volumeOutput.innerText = (video.volume * 100) + "%"


})
// volumeslider = doucment.getElementById("volumeSlider");

// volumeslider.addEventListener("click", function vol() {
// 	video.volume = this.value;
// 	// video.volume = volumeslider.value / 100
// })

