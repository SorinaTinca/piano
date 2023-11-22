const flaps = document.querySelectorAll(".flap");
const btnPlay = document.querySelector(".btn-play");
const negativeSound = document.querySelector("#negative-1");

function playSound(url) {
  new Audio(url).play();
}

flaps.forEach((flap, i) => {
  const soundNumber = i < 9 ? "0" + (i + 1) : i + 1;
  const soundUrl = `sounds/key${soundNumber}.mp3`;
  flap.addEventListener("click", () => {
    playSound(soundUrl);
    flap.classList.add("isPressed");
  });
});

function toggleSound() {
  if (negativeSound.paused) {
    negativeSound.play();
    btnPlay.classList.add("isActive");
  } else {
    negativeSound.pause();
    btnPlay.classList.remove("isActive");
  }
}
