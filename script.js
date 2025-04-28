// Efek typing
const text = "Like a racer, keep trying to win in your own life in a good way";
let index = 0;
const typing = document.querySelector(".typing");

function type() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 70);
  }
}
type();

// Music play after first click
document.body.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
});

// Confetti animation
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
for (let i = 0; i < 300; i++) {
  pieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 5 + 2,
    speed: Math.random() * 3 + 1,
    color: ['#FF0000', '#000000'][Math.floor(Math.random() * 2)],
  });
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let piece of pieces) {
    ctx.beginPath();
    ctx.arc(piece.x, piece.y, piece.size, 0, 2 * Math.PI);
    ctx.fillStyle = piece.color;
    ctx.fill();
    piece.y += piece.speed;
    if (piece.y > canvas.height) {
      piece.y = 0;
      piece.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(update);
}
update();
