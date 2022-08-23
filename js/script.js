const turnOn = document.querySelector('#turnOn')
const turnOff = document.querySelector('#turnOff')
const lamp = document.querySelector('#lamp')
const fix = document.querySelector('#fix')

turnOff.disabled = true


const lampOn = () => {
    lamp.src = './assets/ligada.jpg'
    turnOn.disabled = true
    turnOff.disabled = false
}

const lampOff = () => {
    lamp.src = './assets/desligada.jpg'
    turnOff.disabled = true
    turnOn.disabled = false
}

const broken = () => {
    lamp.src = './assets/quebrada.jpg'
    turnOff.disabled = true
    turnOn.disabled = true
    fix.style.visibility = 'visible'
    fix.style.display = 'inline-block'
}

turnOff.addEventListener('click', lampOff)
turnOn.addEventListener('click', lampOn)
lamp.addEventListener('click', broken)
fix.addEventListener('click', () => {
    lamp.src = './assets/desligada.jpg'
    turnOff.disabled = true
    turnOn.disabled = false
    fix.style.visibility = 'hidden'
    fix.style.display = 'none'
})