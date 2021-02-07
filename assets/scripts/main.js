const slider = document.getElementById('volume-slider');
slider.addEventListener('input', updateSlider);

const num = document.getElementById('volume-number');
num.addEventListener('input', updateNumber);

const airHorn = document.getElementById('radio-air-horn');
airHorn.addEventListener('click', updateAir);

const carHorn = document.getElementById('radio-car-horn');
carHorn.addEventListener('click', updateCar);

const partyHorn = document.getElementById('radio-party-horn');
partyHorn.addEventListener('click', updateParty);

document.getElementById("honk-btn").type = "button";
const honk = document.getElementById('honk-btn');
honk.addEventListener('click', updateButton);


function updateSlider() {
    var volNum = document.getElementById("volume-number");
    var volSlider = document.getElementById("volume-slider");
    
    volNum.value = volSlider.value;

    updateImage();
    updateVolume(volNum.value);
}

function updateNumber() {
    var volNum = document.getElementById("volume-number");
    var volSlider = document.getElementById("volume-slider");
    
    volSlider.value = volNum.value;

    updateImage();
    updateVolume(volSlider.value);
}

function updateImage() {
    var volNum = document.getElementById("volume-number");
    var volSlider = document.getElementById("volume-slider");
    var volImage = document.getElementById("volume-image");

    if (volNum.value >= 67 || volSlider >= 67){
        volImage.src = "./assets/media/icons/volume-level-3.svg";
    }
    if ((volNum.value <= 66 && volNum.value >= 34)  || (volSlider.value <= 66 && volSlider.value >= 34)){
        volImage.src = "./assets/media/icons/volume-level-2.svg";
    }
    else if ((volNum.value <= 33 && volNum.value >= 1)  || (volSlider.value <= 33 && volSlider.value >= 1)){
        volImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    else if ((volNum.value <1)  || (volSlider.value < 1)){
        volImage.src = "./assets/media/icons/volume-level-1.svg";
    }
    
}

function updateVolume(num){
    var sound = document.getElementById("horn-sound");
    var volNum = document.getElementById("volume-number");
    var volSlider = document.getElementById("volume-slider");

    sound.volume = Number(num/100);
}

function updateAir(){
    var hornSound = document.getElementById("horn-sound");
    var soundImage = document.getElementById("sound-image");

    hornSound.src = "./assets/media/audio/air-horn.mp3";
    soundImage.src = "./assets/media/images/air-horn.svg"
}

function updateCar(){
    var hornSound = document.getElementById("horn-sound");
    var soundImage = document.getElementById("sound-image");

    hornSound.src = "./assets/media/audio/car-horn.mp3";
    soundImage.src = "./assets/media/images/car.svg"
}

function updateParty(){
    var hornSound = document.getElementById("horn-sound");
    var soundImage = document.getElementById("sound-image");

    hornSound.src = "./assets/media/audio/party-horn.mp3";
    soundImage.src = "./assets/media/images/party-horn.svg";
}

function updateButton(){
    var volNum = document.getElementById("volume-number");
    var hornSound = document.getElementById("horn-sound");
    var button = document.getElementById("honk-btn");

    if (volNum == 0){
        button.disabled = true;
    }
    else{
        hornSound.play();
    }
}
