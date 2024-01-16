let bomb
let flag
let number
let board
let tile
let line

play_board()

function play_board() {
    let board = document.createElement("div")
    board.style.height = "650px"
    board.style.width = "1000px"
    board.style.border = "5px solid black"
    board.style.display = "flex"
    board.style.flexDirection = "column" // Change la direction pour les lignes horizontales
    board.style.margin = "auto"
    board.style.alignContent = "center"
    board.style.backgroundColor = "#A5A5A5"
    document.body.appendChild(board)

    for (let i = 0; i < 20; i++) {
        let line = document.createElement("div")
        let lineHeight = 650 / 20 // Calcule la hauteur de chaque ligne
        line.style.width = "1000px"
        line.style.height = lineHeight + "px"
        line.id = "line_" + i
        board.appendChild(line)
    }
}