const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const body = document.querySelector('body')
const img = document.querySelector('.img1')
const btn3 = document.querySelector('#btn3')


btn1.onclick = () => {
  body.classList.toggle('red')
}

btn2.onclick = () => {
  body.classList.remove('red')
}

btn2.onclick = () => {
    img.classList.toggle('hidden')
}

btn3.onclick = () => {
    const maxWidth = window.innerWidth - btn3.offsetWidth 
    const maxHeight = window.innerHeight - btn3.offsetHeight 

    const randomX = Math.floor(Math.random() * maxWidth / 2)
    const randomY = Math.floor(Math.random() * maxHeight / 2)
    console.log(randomX,randomY);

    btn3.style.transform = `translate(${randomX}px, ${randomY}px)`
    
}

const negab = document.querySelector('.negab')
const negri = document.querySelector('.negri')
const shreki = document.querySelector('.shreki')

negab.onclick = () => {
    negri.classList.toggle('negri1')
}

negab.onclick = () => {
    shreki.classList.toggle('shreki1')
}