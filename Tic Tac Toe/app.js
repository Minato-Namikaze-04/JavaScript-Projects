let player = "X"
let turn = document.querySelector(".turn")
let box = document.querySelectorAll(".box")

box.forEach((e) => {
    e.addEventListener("click", (element) => {
        e.innerHTML = player
        player = player === "X" ? "O" : "X"
        turn.innerHTML = "Turn for " + player
        wincheck(player)
        e.style.pointerEvents = "none";
    })
})

let win = [
    [0, 1, 2, 200, -100, 90],
    [3, 4, 5, 200, 40, 90],
    [6, 7, 8, 200, 180, 90],
    [0, 3, 6, 60, 40, 0],
    [1, 4, 7, 200, 40, 0],
    [2, 5, 8, 340, 40, 0],
    [0, 4, 8, 200, 40, 135],
    [2, 4, 6, 200, 40, 45]
]
let wining_line = document.querySelector(".wining_line")
let gif = document.getElementById("gif")
let wincheck = (player) => {
    win.forEach((e) => {
        if (box[e[0]].innerHTML === box[e[1]].innerHTML && box[e[1]].innerHTML === box[e[2]].innerHTML && box[e[2]].innerHTML !== "") {
            player = player === "X" ? "O" : "X"
            turn.innerHTML = "Winner is " + player
            gif.style.width = "200px"
            line(e)
            box.forEach((element) => {
                element.style.pointerEvents = "none"
            })
        }
    })
}

let reset = document.querySelector(".reset")

reset.addEventListener("click", () => {
    location.reload()
})

function line(e) {
    console.log(e)
    wining_line.style.left = `${e[3]}px`
    wining_line.style.top = `${e[4]}px`
    wining_line.style.transform = `rotate(${e[5]}deg)`
    wining_line.style.height = "320px"
    wining_line.style.width = "3px"
}