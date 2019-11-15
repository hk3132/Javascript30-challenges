function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio)return; // to stop the function if there is no audio prescribed to it
    audio.currentTime = 0; //rewind to the start of the sound so it plays over and over again
    audio.play();
    key.classList.add('playing');
};

function removeTransition(e) {
    if(e.propertyName !== "transform") return; // do not run if it is not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll (".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener('keydown', playSound);