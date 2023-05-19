const headerSpan = document.querySelector('header span'),
content = document.querySelector('.content'),
showBtn = document.querySelector('.show-content button'),
closeBtn = document.querySelector('svg'),
dragContainer = document.querySelector('.drag-container')

let drag = false

showBtn.addEventListener('click', () => {
    dragContainer.classList.toggle('show')
})

closeBtn.addEventListener('click', () => {
    dragContainer.classList.remove('show')
})

headerSpan.addEventListener('mousedown', (e) => {
    drag = true

})

window.document.addEventListener('mouseup', (e) => {
    drag = false
})

document.querySelector('body').addEventListener('mousemove', (e) => {
    if(!drag) return
    console.log(e.pageY)
    if(e.pageY > 600 + 30) return
    if(e.pageY < 5 + 32)  content.style.borderRadius = '0px'
    else content.style.borderRadius = '2rem 2rem 0 0'
    
    content.style.height = `${window.innerHeight - e.pageY + 32}px`
    
})