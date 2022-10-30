// explore.js

window.addEventListener('DOMContentLoaded', init);
const synth = window.speechSynthesis;
const voiceSelect = document.querySelector("select");
const inputTxt = document.getElementById("text-to-speak");
const but = document.querySelector("#explore button");

let voices = [];

function init() {
  // TODO
  populateVoiceList();

  but.onclick = (event) => {
    event.preventDefault();
  
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
    document.querySelector("#explore img").src = "assets/images/smiling-open.png";
    inputTxt.blur();
  }

}


function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}


if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function face(){
  const amISpeaking = synth.speaking;
  if (amISpeaking == true){
    document.querySelector("#explore img").src = "assets/images/smiling-open.png";
  }
  else{
    document.querySelector("#explore img").src = "assets/images/smiling.png";
  }
}

setInterval(face, 1000);