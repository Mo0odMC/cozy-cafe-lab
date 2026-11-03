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

function handleBackgroundChange() {
    body.style.backgroundColor = 'lightsteelblue'
}

bgbtn.addEventListener('click',(handleBackgroundChange))