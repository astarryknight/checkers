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
        tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.width = "50px";
        tile.style.height = "50px";
        if ((i + j) % 2 == 0) {
            tile.style.backgroundColor = "black";
        } else {
            tile.style.backgroundColor = "white";
        }
        tile.id = "tile" + i + j;
        document.getElementById("game").appendChild(tile);
    }
}

gameBoard = [];

function resetBoard() {
    let e = 0;
    for (let i = 0; i < 8; i++) {
        e++;
        let k = 0;
        for (let j = 0; j < 8; j++) {
            checker = document.createElement("div");
            checker.style.width = "40px";
            checker.style.height = "40px";
            checker.style.borderRadius = "50%";
            checker.style.zIndex = "1";
            if (i != 3 && i != 4) {
                if (i < 3) {
                    checker.style.backgroundColor = "#2e9ce6";
                    c = "blue";
                } else if (i > 4) {
                    checker.style.backgroundColor = "#c41a18";
                    c = "red";
                }
                if (e % 2 == 0) {
                    if (k % 2 == 0) {
                        document.getElementById("tile" + i + j).appendChild(checker);
                        gameBoard.push(new Piece(c, false));
                    }
                } else if (e % 2 != 0) {
                    if (k % 2 != 0) {
                        document.getElementById("tile" + i + j).appendChild(checker);
                        gameBoard.push(new Piece(c, false));
                    }
                } else {
                    gameBoard.push(null);
                }
            }
            k++;
        }
    }
    console.log(gameBoard)
}

resetBoard();

function getPossibleMoves(xPos, yPos) {
    if (gameBoard[xPos][yPos] != null) {
        checker = gameBoard[xPos][yPos];
        if (checker.color == "red") {

        }
    }
}

