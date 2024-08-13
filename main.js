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

gameBoard = [];

function drawBoard() {
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
            tile.addEventListener("click", function () {
                getPossibleMoves(i, j);
            });
            document.getElementById("game").appendChild(tile);
        }
    }
}

function resetBoardColors() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            tile = document.getElementById("tile" + i + j)
            if ((i + j) % 2 == 0) {
                tile.style.backgroundColor = "black";
            } else {
                tile.style.backgroundColor = "white";
            }
        }
    }
}

function resetBoard() {
    drawBoard();

    let e = 0;
    for (let i = 0; i < 8; i++) {
        e++;
        gameBoard[i] = [];
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
                        gameBoard[i][j] = (new Piece(c, false));
                    }
                    else {
                        gameBoard[i][j] = null;
                    }
                } else if (e % 2 != 0) {
                    if (k % 2 != 0) {
                        document.getElementById("tile" + i + j).appendChild(checker);
                        gameBoard[i][j] = (new Piece(c, false));
                    }
                    else {
                        gameBoard[i][j] = null;
                    }
                }
            } else {
                gameBoard[i][j] = null;
            }
            k++;
        }
    }
    console.log(gameBoard)
}

resetBoard();

var tiles = [];

function getPossibleMoves(xPos, yPos) {
    if (document.getElementById("tile" + xPos + yPos).style.backgroundColor == "green") {
        //return;
        moveTile(xPos, yPos, document.getElementById("tile" + xPos + yPos));
        //if the tile is already green, then the user has already clicked on it
    }
    resetBoardColors();
    if (gameBoard[xPos][yPos] != null) {
        checker = gameBoard[xPos][yPos];
        if (checker.color == "red") { //moving upwards
            if (xPos - 1 >= 0 && yPos - 1 >= 0) {
                if (gameBoard[xPos - 1][yPos - 1] == null) {
                    document.getElementById("tile" + (xPos - 1) + (yPos - 1)).style.backgroundColor = "green";
                }
            }
            if (xPos - 1 >= 0 && yPos + 1 <= 7) {
                if (gameBoard[xPos - 1][yPos + 1] == null) {
                    document.getElementById("tile" + (xPos - 1) + (yPos + 1)).style.backgroundColor = "green";
                }
            }
        } else if (checker.color == "blue") { //moving downards
            if (xPos + 1 <= 7 && yPos - 1 >= 0) {
                if (gameBoard[xPos + 1][yPos - 1] == null) {
                    document.getElementById("tile" + (xPos + 1) + (yPos - 1)).style.backgroundColor = "green";
                }
            }
            if (xPos + 1 <= 7 && yPos + 1 <= 7) {
                if (gameBoard[xPos + 1][yPos + 1] == null) {
                    document.getElementById("tile" + (xPos + 1) + (yPos + 1)).style.backgroundColor = "green";
                }
            }
        }
    }
}

function moveTile(xPos, yPos, tile) {
    console.log("hi")
}

