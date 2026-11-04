//part 1
console.log('Cozy Cafe JavaScript is connected!');

const mainTitleEl = document.querySelector('#main-title')
mainTitleEl.textContent = 'Welcome to the Cozy Cafe'

//part 2
const highlightTitleEls = document.querySelectorAll('.highlight-title')
highlightTitleEls.forEach((Els) => {
    console.log(Els.textContent)
    Els.style['font-style'] = 'italic'
});

const qotd = document.querySelector('#quote-of-the-day')
qotd.textContent = "It's not always the tear that measures the pain. Sometimes it's the SMILE we fake"
qotd.classList.add('featured')

//part 3
const mainphoto = document.querySelector('#main-photo') 
console.log(mainphoto.getAttribute('src'))
mainphoto.setAttribute('src', './assets/berry-cake.jpg')
mainphoto.setAttribute('alt', 'A berry cake served at the cafe')

//part 4
const bgbtn = document.querySelector('#bg-color-btn')
const body = document.querySelector('body')
//this is extra on the assignment (linking arrays to a button)
// const color = ['lightsteelblue','bisque','lavender','darkgray'] // not used
function handleBackgroundChange() {
    let x  = Math.floor(Math.random()* 256); let y = Math.floor(Math.random()* 256) ;let z = Math.floor(Math.random()* 256)
    let colorIndex = `rgb(${x}, ${y}, ${z})`
    body.style.backgroundColor = colorIndex
    console.log(colorIndex)
    // colorIndex = (colorIndex + 1) % color.length  //(removed)
}

bgbtn.addEventListener('click',(handleBackgroundChange))

//part 5
const Ele = [
    document.getElementById('rose-latte'),
    document.getElementById('croissant'),
    document.getElementById('cheesecake')
]
const specialityStatus = document.querySelectorAll('.specialty-status')
const availability = ['Available','Sold Out','Available']
const SoBtns = document.querySelectorAll('.sold-out-btn')
const restockBtn = document.getElementById('restock-croissants-btn')

function render() {
    availability.forEach((status, index) => {
        Ele[index].textContent = status
    })
}

function markSoldOut(index) {
    availability[index] = 'Sold Out'
    render()
}

SoBtns.forEach((button, index) => {
    button.addEventListener('click', () => markSoldOut(index))
})
render()
//not part of the project
restockBtn.addEventListener('click', () => {
    availability[1] = 'Available'
    render()
})