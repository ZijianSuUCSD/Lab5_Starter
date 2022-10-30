// expose.js


window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {

  let range_value = document.getElementById("volume").value;
  let sound = document.querySelector("#expose > audio");
  sound.volume = Number(range_value)/100;

  document.getElementById("horn-select").addEventListener('change',(event) =>{
    let select_value = document.getElementById("horn-select").value;
    if(select_value === "air-horn"){
      document.querySelector("#expose img").src = "assets/images/air-horn.svg";
    }
    else if(select_value === "car-horn"){
      document.querySelector("#expose img").src = "assets/images/car-horn.svg";
    }
    else if(select_value === "party-horn"){
      document.querySelector("#expose img").src = "assets/images/party-horn.svg";
    }
  })

  document.getElementById("volume").addEventListener('input',(event) =>{
    let range_value = document.getElementById("volume").value;
    let sound = document.querySelector("#expose > audio");
    sound.volume = Number(range_value)/100;

    
    if(range_value >= 0 && range_value < 1){
      document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-0.svg";
    }
    else if(range_value >=1 && range_value < 33){
      document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-1.svg";
    }
    else if(range_value >=33 && range_value < 67){
      document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-2.svg";
    }
    else if(range_value >= 67){
      document.querySelector("#volume-controls > img").src = "assets/icons/volume-level-3.svg";
    }
  })

  document.querySelector("#expose > button").addEventListener('click',(event) =>{
    let select_value = document.getElementById("horn-select").value;
    let sound = document.querySelector("#expose > audio");

    if(select_value === "air-horn"){
      sound.src = "assets/audio/air-horn.mp3";
      sound.play();
    }
    else if(select_value === "car-horn"){
      sound.src = "assets/audio/car-horn.mp3";
      sound.play();
    }
    else if(select_value === "party-horn"){
      sound.src = "assets/audio/party-horn.mp3";
      sound.play();
      jsConfetti.addConfetti();
    }
  })

}
