class Piece {
    constructor(xPos, yPos, color, king) {
        this.xPos_ = xPos;
        this.yPos_ = yPos;
        this.color_ = color;
        this.king_ = king;
    }
    get yPos() {
        return this.yPos_
    }
    get xPos() {
        return this.xPos_
    }
    get color() {
        return this.color_
    }
    get king() {
        return this.king_
    }
    set yPos(yPos) {
        this.yPos_ = yPos;
    }
    set xPos(xPos) {
        this.xPos_ = xPos;
    }
    set king(king) {
        this.king_ = king;
    }
}

function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);//clear canvas
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var gameOver = false;

//main game loop
function game() {

    if (!gameOver) {
        window.requestAnimationFrame(loop)
    } else {
        alert("Game Over!");
        location.reload();
    }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//handling keypresses
addEventListener("keydown", (event) => {
    if (event.isComposing) {
        return;
    }
    if (event.key == " ") {
        bird.yVel = 11
    }
});

// window.requestAnimationFrame(loop)