const button = document.getElementById('catch-button');
const gameContainer = document.getElementById('game-container');
const levelDisplay = document.getElementById('level');
const clicksDisplay = document.getElementById('clicks');

let level = 1;
let clicks = 0;
let timeout = 500;

function moveButton() {
  const maxX = gameContainer.offsetWidth - button.offsetWidth;
  const maxY = gameContainer.offsetHeight - button.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  button.style.marginTop = randomY + "px";
  button.style.marginLeft = randomX + "px";
}
function handleClick() {
    clicks++;
    clicksDisplay.textContent = "Clicks: " + clicks;
  
    if (clicks >= 3) {
      level++;
      levelDisplay.textContent = "Level: " + level;
      clicks = 0;
      timeout = Math.max(0, timeout - 100);
      moveButton();
  
      
      const levelMessage = document.createElement('p');
      levelMessage.textContent = "Level " + level;
      document.body.appendChild(levelMessage);
  
      setTimeout(() => {
        document.body.removeChild(levelMessage);
      }, 3000);
  
      
      alert("Congratulations! Level " + level);
    }
  
    if (level >= 6) {
      alert("Congratulations! You have won the game.");
      return;
    }
  
    setTimeout(moveButton, timeout);
  }


button.addEventListener('click', handleClick);

moveButton();
