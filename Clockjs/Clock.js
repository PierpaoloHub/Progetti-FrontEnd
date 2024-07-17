setInterval(setClock, 1000)
const sec = document.querySelector('[secondi]')
const ore = document.querySelector('[ore]')
const min = document.querySelector('[minuti]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getMinutes()) / 12

    setRotation(sec, secondsRatio)
    setRotation(min, minutesRatio)
    setRotation(ore, hoursRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
