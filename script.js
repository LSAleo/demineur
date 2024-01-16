let bomb
let flag
let number
let board

play_board()

function play_board() {
    let board = document.createElement("div")
    board.style.height = "600px"
    board.style.width = "850px"
    board.style.border = "5px solid black"
    board.style.display = "flex"
    board.style.margin = "auto"
    board.style.alignContent = "center"
    board.style.backgroundColor = "#A5A5A5"
    document.body.appendChild(board)
}