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
            tile.id = "tile" + j + i;
            tile.addEventListener("click", function () {
                if (!winner) {
                    getPossibleMoves(j, i);
                }
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
            checker.style.boxShadow = "0px 1px 0px rgba(127, 127, 127, 0.75)";
            checker.style.zIndex = "1";
            if (i != 3 && i != 4) {
                if (i < 3) {
                    checker.style.backgroundColor = "#2e9ce6";
                    checker.style.boxShadow = "0px 3px 0px rgb(0, 0, 0, 0.5), 0px 3px 0px #2e9ce6";
                    c = "blue";
                } else if (i > 4) {
                    checker.style.backgroundColor = "#c41a18";
                    checker.style.boxShadow = "0px 3px 0px rgb(0, 0, 0, 0.5), 0px 3px 0px #c41a18";
                    c = "red";
                }
                if (e % 2 == 0) {
                    if (k % 2 == 0) {
                        document.getElementById("tile" + j + i).appendChild(checker);
                        gameBoard[i][j] = (new Piece(c, false));
                        // if (c == "blue") {
                        //     document.getElementById("tile" + j + i).appendChild(checker);
                        //     gameBoard[i][j] = (new Piece(c, false));
                        // } else {
                        //     gameBoard[i][j] = null;
                        // }
                    }
                    else {
                        gameBoard[i][j] = null;
                    }
                } else if (e % 2 != 0) {
                    if (k % 2 != 0) {
                        document.getElementById("tile" + j + i).appendChild(checker);
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

var prevTile = null;

var turn = "red";
var winner = null;

function getPossibleMoves(xPos, yPos) {
    if (document.getElementById("tile" + xPos + yPos).style.backgroundColor == "green") {
        moveTile(prevTile.id[4], prevTile.id[5], document.getElementById("tile" + xPos + yPos));
        //if the tile is already green, then the user has already clicked on it
    }
    prevTile = document.getElementById("tile" + xPos + yPos);
    resetBoardColors();
    if (gameBoard[yPos][xPos] != null) {
        if (gameBoard[yPos][xPos].color == "red" && turn == "red") {
            if (xPos - 1 >= 0 && yPos - 1 >= 0) {
                if (gameBoard[yPos - 1][xPos - 1] == null) {
                    document.getElementById("tile" + (xPos - 1) + (yPos - 1)).style.backgroundColor = "green";
                }
                else if ((xPos - 2 >= 0 && yPos - 2 >= 0) && gameBoard[yPos - 1][xPos - 1].color == "blue" && gameBoard[yPos - 2][xPos - 2] == null) {
                    document.getElementById("tile" + (xPos - 2) + (yPos - 2)).style.backgroundColor = "green";
                }
            }
            if (xPos + 1 <= 7 && yPos - 1 >= 0) {
                if (gameBoard[yPos - 1][xPos + 1] == null) {
                    document.getElementById("tile" + (xPos + 1) + (yPos - 1)).style.backgroundColor = "green";
                }
                else if ((xPos + 2 <= 7 && yPos - 2 >= 0) && gameBoard[yPos - 1][xPos + 1].color == "blue" && gameBoard[yPos - 2][xPos + 2] == null) {
                    document.getElementById("tile" + (xPos + 2) + (yPos - 2)).style.backgroundColor = "green";
                }
            }
        }
        if (gameBoard[yPos][xPos].color == "blue" && turn == "blue") {
            if (xPos - 1 >= 0 && yPos + 1 <= 7) {
                if (gameBoard[yPos + 1][xPos - 1] == null) {
                    document.getElementById("tile" + (xPos - 1) + (yPos + 1)).style.backgroundColor = "green";
                }
                else if ((xPos - 2 >= 0 && yPos + 2 <= 7) && gameBoard[yPos + 1][xPos - 1].color == "red" && gameBoard[yPos + 2][xPos - 2] == null) {
                    document.getElementById("tile" + (xPos - 2) + (yPos + 2)).style.backgroundColor = "green";
                }
            }
            if (xPos + 1 <= 7 && yPos + 1 <= 7) {
                if (gameBoard[yPos + 1][xPos + 1] == null) {
                    document.getElementById("tile" + (xPos + 1) + (yPos + 1)).style.backgroundColor = "green";
                }
                else if ((xPos + 2 <= 7 && yPos + 2 <= 7) && gameBoard[yPos + 1][xPos + 1].color == "red" && gameBoard[yPos + 2][xPos + 2] == null) {
                    document.getElementById("tile" + (xPos + 2) + (yPos + 2)).style.backgroundColor = "green";
                }
            }
        }
        if (gameBoard[yPos][xPos].king) {

            if (gameBoard[yPos][xPos].color == "red" && turn == "red") {
                if (xPos - 1 >= 0 && yPos + 1 <= 7) {
                    if (gameBoard[yPos + 1][xPos - 1] == null) {
                        document.getElementById("tile" + (xPos - 1) + (yPos + 1)).style.backgroundColor = "green";
                    }
                    else if ((xPos - 2 >= 0 && yPos + 2 >= 0) && gameBoard[yPos + 1][xPos - 1].color == "blue" && gameBoard[yPos + 2][xPos - 2] == null) {
                        document.getElementById("tile" + (xPos - 2) + (yPos + 2)).style.backgroundColor = "green";
                    }
                }
                if (xPos + 1 <= 7 && yPos + 1 <= 7) {
                    if (gameBoard[yPos + 1][xPos + 1] == null) {
                        document.getElementById("tile" + (xPos + 1) + (yPos + 1)).style.backgroundColor = "green";
                    }
                    else if ((xPos + 2 <= 7 && yPos + 2 >= 0) && gameBoard[yPos + 1][xPos + 1].color == "blue" && gameBoard[yPos + 2][xPos + 2] == null) {
                        document.getElementById("tile" + (xPos + 2) + (yPos + 2)).style.backgroundColor = "green";
                    }
                }
            }
            if (gameBoard[yPos][xPos].color == "blue" && turn == "blue") {
                if (xPos - 1 >= 0 && yPos - 1 >= 0) {
                    if (gameBoard[yPos - 1][xPos - 1] == null) {
                        document.getElementById("tile" + (xPos - 1) + (yPos - 1)).style.backgroundColor = "green";
                    }
                    else if ((xPos - 2 >= 0 && yPos - 2 >= 0) && gameBoard[yPos - 1][xPos - 1].color == "red" && gameBoard[yPos - 2][xPos - 2] == null) {
                        document.getElementById("tile" + (xPos - 2) + (yPos - 2)).style.backgroundColor = "green";
                    }
                }
                if (xPos + 1 >= 0 && yPos - 1 >= 0) {
                    if (gameBoard[yPos - 1][xPos + 1] == null) {
                        document.getElementById("tile" + (xPos + 1) + (yPos - 1)).style.backgroundColor = "green";
                    }
                    else if ((xPos + 2 <= 7 && yPos - 2 >= 0) && gameBoard[yPos - 1][xPos + 1].color == "red" && gameBoard[yPos - 2][xPos + 2] == null) {
                        document.getElementById("tile" + (xPos + 2) + (yPos - 2)).style.backgroundColor = "green";
                    }
                }
            }
        }
    }


}

function moveTile(xPos, yPos, tile) {
    if (Math.abs(xPos - tile.id[4]) == 2) {
        gameBoard[(parseInt(yPos) + parseInt(tile.id[5])) / 2][(parseInt(xPos) + parseInt(tile.id[4])) / 2] = null;
        document.getElementById("tile" + ((parseInt(xPos) + parseInt(tile.id[4])) / 2) + ((parseInt(yPos) + parseInt(tile.id[5])) / 2)).children[0].remove();

        var won = true;
        for (var col of gameBoard) {
            for (var piece of col) {
                if (piece && piece.color != turn) {
                    won = false;
                    break;
                }
            }
            if (!won) {
                break;
            }
        }
        if (won) {
            winner = turn;
        }
    }

    checker = document.getElementById("tile" + xPos + yPos).children[0];
    console.log(document.getElementById("tile" + xPos + yPos).children)
    tile.appendChild(checker);
    gameBoard[tile.id[5]][tile.id[4]] = gameBoard[yPos][xPos];
    gameBoard[yPos][xPos] = null;
    console.log(checker.style.backgroundColor);
    console.log(gameBoard)

    if ((tile.id[5] == 0 || tile.id[5] == 7) && !gameBoard[tile.id[5]][tile.id[4]].king) {
        gameBoard[tile.id[5]][tile.id[4]].king = true;
        checker.style.border = "5px outset gold";
        checker.textContent = '\uD83D\uDC51';
        checker.style.lineHeight = '26px';
        checker.style.textShadow = '0 0 6px rgb(64, 64, 64), 0 0 0px rgb(0, 0, 0)';
        requestAnimationFrame(() => {
            checker.style.animation = 'flip3d 0.6s forwards';
            setTimeout(function () {
                checker.style.animation = null;
            }, 600);
        });
    }

    turn = (turn == "red" ? "blue" : "red");
    var t = document.getElementById("turn")
    if (winner) {
        resetBoardColors();
        var h1 = t.parentElement;
        h1.innerHTML = '<span id="turn"></span>';
        t = h1.children[0];
        if (winner == "red") {
            t.textContent = "Red won!"
            t.style.color = "#c41a18"
        } else {
            t.textContent = "Blue won!"
            t.style.color = "#2e9ce6"
        }
    } else {
        if (turn == "red") {
            t.textContent = "Red's"
            t.style.color = "#c41a18"
            document.body.classList.remove('flip');
        } else {
            t.textContent = "Blue's"
            t.style.color = "#2e9ce6"
            document.body.classList.add('flip');
        }
    }
}

setTimeout(function () {
    document.body.classList.add('loaded');
}, 20);