class Piece {
    constructor(color, king) {
        this.color_ = color;
        this.king_ = king;
    }
    get color() {
        return this.color_
    }
    get king() {
        return this.king_
    }
    set king(king) {
        this.king_ = king;
    }
}

//draw board
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            ctx.fillStyle = "black";
        } else {
            ctx.fillStyle = "white";
        }
        ctx.fillRect(i * 50, j * 50, 50, 50);
    }
}
ctx.strokeRect(0, 0, 50 * 8, 50 * 8);

var gameOver = false;
var gameBoard = [];

function resetBoard() {
    let e = 0;
    for (let i = 0; i < 8; i++) {
        e++;
        gameBoard[i] = [];
        let k = 0;
        for (let j = 0; j < 8; j++) {
            if (i != 3 && i != 4) {
                if (i < 3) {
                    c = "black";
                } else if (i > 4) {
                    c = "white";
                }
                if (e % 2 == 0) {
                    if (k % 2 == 0) {
                        gameBoard[i][j] = new Piece(c, false);
                    } else {
                        gameBoard[i][j] = 0;
                    }
                } else if (e % 2 != 0) {
                    if (k % 2 != 0) {
                        gameBoard[i][j] = new Piece(c, false);
                    } else {
                        gameBoard[i][j] = 0;
                    }
                }
            } else {
                gameBoard[i][j] = 0;
            }
            k++;
        }
    }
    console.log(gameBoard)
}

resetBoard();