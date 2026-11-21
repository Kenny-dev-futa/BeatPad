const drumPads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// Play the sound
function playSound(key) {
  const audio = document.getElementById(key);

  if (audio) {
    audio.currentTime = 0;
    audio.play();

    // Display the sound name
    display.textContent = audio.parentElement.id;
  }
}

// Handle mouse clicks
drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const key = pad.textContent.trim();
    playSound(key);
  });
});

// Handle keyboard presses
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  playSound(key);
});
