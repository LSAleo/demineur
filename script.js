let bomb
let flag
let number
let board
let tile
let line
let icon
let line_height

play_board()

function play_board() {
    let board = document.createElement("div")
    board.style.height = "650px"
    board.style.width = "1000px"
    board.style.border = "5px solid red"
    board.style.display = "flex"
    board.style.flexDirection = "column" // Change la direction pour les lignes horizontales
    board.style.margin = "auto"
    board.style.alignContent = "center"
    board.style.backgroundColor = "#A5A5A5"
    document.body.appendChild(board)

    line_height = 650 / 20 // Calcule la hauteur de chaque ligne

    for (let i = 0; i < 20; i++) {
        let line = document.createElement("div")
        line.style.width = "1000px"
        line.style.height = line_height + "px"
        line.id = "line_" + i
        board.appendChild(line)

        for (let j = 0; j < 25; j++) { // 25 images par ligne (20 lignes * 25 images = 500 images)
            let image = document.createElement("img")
            image.src = "carre.png"
            let image_width = 1000 / 25 // Ajustez la largeur de l'image en fonction du nombre d'images par ligne
            image.style.width = image_width + "px"
            image.style.height = line_height + "px"
            image.id = "image_" + i + "_" + j // ID unique pour chaque image
            image.style.cursor = "pointer" // Ajoute une propriété de curseur pour indiquer que l'image est cliquable
            image.addEventListener("contextmenu", imageRightClickHandler)
            line.appendChild(image)
        }
    }
}

function imageRightClickHandler(event) {
    event.preventDefault(); // Empêche le menu contextuel par défaut de s'afficher
    console.log("Clic droit sur l'image! ID: " + this.id);

    let icon = document.getElementById(this.id);
    icon.src = "drapeau-rouge.png";
}
