const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
    x: 50,
    y: canvas.height / 2,
    radius: 15,
    gravity: 0.6,
    velocity: 0,
    lift: -12
};

const pipes = [];
const pipeGap = 250;
const pipeWidth = 100;
let score = 0;
let isGameOver = false;
let attempts = 0;
const maxAttempts = 3;

// Load the bird image
const birdImg = new Image();
birdImg.src = 'bird.png'; // Set your bird image file path here

function drawBird() {
    ctx.drawImage(birdImg, bird.x - bird.radius, bird.y - bird.radius, bird.radius * 2, bird.radius * 2);
}

// Load the pipe image
const pipeImg = new Image();
pipeImg.src = 'pipe.png'; // Set your pipe image file path here

function drawPipes() {
    for (let i = 0; i < pipes.length; i++) {
        ctx.drawImage(pipeImg, pipes[i].x, 0, pipeWidth, pipes[i].topHeight);
        ctx.drawImage(pipeImg, pipes[i].x, pipes[i].topHeight + pipeGap, pipeWidth, canvas.height - pipes[i].topHeight - pipeGap);
    }
}

function updatePipes() {
    if (pipes.length === 0 || pipes[pipes.length - 1].x < canvas.width - 200) {
        pipes.push({
            x: canvas.width,
            topHeight: Math.random() * (canvas.height - pipeGap - 300) + 150
        });
    }

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].x -= 2;

        if (pipes[i].x + pipeWidth < 0) {
            pipes.shift(); // Remove pipes that are off-screen
            score++;
        }

        if (pipes[i].x < bird.x + bird.radius && 
            bird.x - bird.radius < pipes[i].x + pipeWidth &&
            (bird.y - bird.radius < pipes[i].topHeight || bird.y + bird.radius > pipes[i].topHeight + pipeGap)) {
            gameOver();
        }
    }
}

function drawScore() {
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('Score: ' + score, 20, 30);
}

function gameOver() {
    isGameOver = true;
    ctx.font = '50px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText('Game Over', canvas.width / 2 - 150, canvas.height / 2);
    ctx.font = '30px Arial';
    ctx.fillText('Press Space to Restart', canvas.width / 2 - 150, canvas.height / 2 + 50);
    document.removeEventListener('keydown', restartListener); // Remove the old event listener
    document.addEventListener('keydown', restartListener); // Add the new event listener
}

function restartListener(e) {
    if (e.key === ' ' && attempts < maxAttempts) {
        restartGame();
    }
}

function restartGame() {
    if (isGameOver) {
        attempts++;
        if (attempts >= maxAttempts) {
            ctx.font = '30px Arial';
            ctx.fillStyle = '#000';
            ctx.fillText('Max Attempts Reached', canvas.width / 2 - 150, canvas.height / 2 + 100);
            return;
        }
        pipes.length = 0;
        bird.y = canvas.height / 2;
        score = 0;
        isGameOver = false;
        gameLoop();
    }
}

function gameLoop() {
    if (!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBird();
        drawPipes();
        updateBird();
        updatePipes();
        drawScore();
        requestAnimationFrame(gameLoop);
    }
}

function updateBird() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.radius > canvas.height) {
        bird.y = canvas.height - bird.radius;
        bird.velocity = 0;
    }
    if (bird.y - bird.radius < 0) {
        bird.y = bird.radius;
        bird.velocity = 0;
    }
}

document.addEventListener('keydown', function (e) {
    if (e.key === ' ' && !isGameOver) {
        bird.velocity = bird.lift;
    }
});

gameLoop();
