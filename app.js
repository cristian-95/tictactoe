const p = document.querySelector('.result-txt')
const grid = document.querySelectorAll('.cell')
const resetButton = document.querySelector("button")
const x = '❌'
const circle = '⭕'
let lock = false
const winningConditions = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]
const messages = [
    "❌ ganhou!",
    "⭕ ganhou!",
    "empate..."
]

resetButton.addEventListener("click", resetBoard)

function startGame(){
    grid.forEach(element => {
        element.addEventListener('click', handle , {once: true})    
    })
}

function handle () {
    if(!lock){
        this.innerHTML = x
        this.classList.add(x)
        if (checkWin(x)){
            showResult(0)
        }
        setTimeout(botMove, 300)
        if(checkWin(circle)){
            showResult(1)
        }
        if(fullBoard()){
            showResult(2)
        }
    }
}

function checkWin(currentClass) {
   return winningConditions.some(combination => {
        return combination.every(index => {
            return grid[index].classList.contains(currentClass)
        })
   })
}

function fullBoard(){
    let c = 0;
    grid.forEach(element => {
        if (element.classList.length > 1){
            c++
        }
    })
    return c === 9
}


function showResult(index){
    p.innerHTML = messages[index]
    lock = true
    resetButton.classList.remove("hide")

}

function resetBoard(){
    grid.forEach(cell => {
        cell.innerHTML = ""
        if (cell.classList.contains(x)){
            cell.classList.remove(x)
        } else if (cell.classList.contains(circle)){
            cell.classList.remove(circle)
        }
        cell.removeEventListener("click", handle)
    })
    p.innerHTML = ""
    resetButton.classList.add("hide")
    lock = false
    startGame();
}

function botMove(){
    if (lock) return
    let index = Math.floor(Math.random() * 9)
    if (grid[index].classList.length === 1){
        grid[index].innerHTML = circle
        grid[index].classList.add(circle)
    } else {
        for (let i=0; i<9; i++){
            if (grid[i].classList.length === 1){
                grid[i].innerHTML = circle
                grid[i].classList.add(circle)
                if(checkWin(circle)){
                    showResult(1)
                }
                return
            }
        }
    }
}

startGame();