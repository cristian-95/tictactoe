const grid = document.querySelectorAll('.cell')
const arr = ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X', 'X']


function fillBoard (){
    let i = 0
    grid.forEach(element => {
    element.innerHTML = arr[i]
    console.log(element)
    i++
    });
}

fillBoard()