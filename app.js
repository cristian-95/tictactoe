const p = document.querySelector('.result-txt')
const grid = document.querySelectorAll('.cell')
const resetButton = document.querySelector("button")
const x = '❌'
const circle = '⭕'
let counter = 1
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
    let round = mark()
    this.innerHTML = round
    this.classList.add(this.innerHTML)
    if (checkWin(x)){
        showResult(0)
    } else if(checkWin(circle)){
        showResult(1)
    }else{
        if (fullBoard()){
            showResult(2)
        }
    }
}

function mark () {
    if (counter%2==0){
        counter++
        return circle
    } else{
        counter++
        return x
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
    counter = 1
    startGame();
}


startGame();