import { playChordsOnHeader } from "./modules/sound";


function redirectToModeSelection() {
    location.replace("modeSelection.html");
}


const title = document.querySelectorAll(".title");
var indexTitle = 0;

function showTitle() {
    title[indexTitle].style.setProperty("opacity", "1.0");
    playChordsOnHeader(indexTitle);
    indexTitle++;
}


const audioButton = document.getElementById("startAudio");
const theHeader = document.getElementById("theHeader");

audioButton?.addEventListener('click', async () => {
    await Tone.start()
	console.log('audio is ready')

    setTimeout(function() {
        audioButton.style.setProperty("opacity", "0.0");
        setTimeout(function() {
            document.querySelector("#content").classList.add("backgroundAnimation");
            setTimeout(function() {
                theHeader.style.setProperty("width", "60%");
                theHeader.style.setProperty("height", "35%");
                theHeader.style.setProperty("border", "0.4em solid rgb(109, 41, 44)");
                setTimeout(function() {
                    let showing = setInterval(showTitle, 700);
                    setTimeout(function() {clearInterval(showing)}, 2800);
                    setTimeout(redirectToModeSelection, 5000);
                }, 2300);
            }, 800);
        }, 500);
    }, 500);

}, {once: true})
