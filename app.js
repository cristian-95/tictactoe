const grid = document.querySelectorAll('.cell')
const cross = '❌'
const circle = '⭕'
let counter = 0

grid.forEach(element => {
    element.addEventListener('click', ()=>{
        element.innerHTML = play()
    })
})


function play(){
    if (counter%2== 0){
        counter++
        return cross
    } else {
        counter++
        return circle
    }

}




function fillBoard (){
    let i = 0
    grid.forEach(element => {
        if ( i%2===0){
            element.innerHTML = cross            
        } else {
            element.innerHTML = circle            
        }
    i++
    });
}




