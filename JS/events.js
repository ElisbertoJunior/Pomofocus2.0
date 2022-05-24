
import { elements } from "./elements.js"

const {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonTree,
  buttonRain,
  buttonCoffee,
  buttonFire,
  inputTree,
  inputRain,
  inputRoom,
  inputFire
} = elements

export function Events({
  sound,
  timer
}) {

  buttonPlay.addEventListener('click', () => {
    sound.pressButton()
    timer.countdown()
  })

  buttonStop.addEventListener('click', () => {
    sound.pressButton()
    timer.stopTimer()
  })

  buttonPlus.addEventListener('click', () => {
    sound.pressButton()
    timer.moreMinutes()
  })

  buttonMinus.addEventListener('click', () => {
    sound.pressButton()
    timer.lessMinutes()
  })

  buttonTree.addEventListener('click', () => {
   if (buttonTree.classList.toggle('selected') == true) {
        sound.pauseMusic()
        sound.playTree()

      } else {
        sound.pauseMusic()
        buttonTree.classList.remove('selected')
      }

      buttonRain.classList.remove('selected')
      buttonCoffee.classList.remove('selected')
      buttonFire.classList.remove('selected')
    
  })

  buttonRain.addEventListener('click', () => {
    if(buttonRain.classList.toggle('selected') == true){
      sound.pauseMusic()
      sound.playRain()

    } else {
      sound.pauseMusic()
      buttonRain.classList.remove('selected')
    }

    buttonTree.classList.remove('selected')
    buttonCoffee.classList.remove('selected')
    buttonFire.classList.remove('selected')
  

  })

  buttonCoffee.addEventListener('click', () => {
    if (buttonCoffee.classList.toggle('selected') == true) {
      sound.pauseMusic()
      sound.playRoom()

    } else {
      sound.pauseMusic()
      buttonCoffee.classList.remove('selected')
    }

    buttonTree.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonFire.classList.remove('selected')    
  })

  buttonFire.addEventListener('click', () => {
    if (buttonFire.classList.toggle('selected') == true) {
      sound.pauseMusic()
      sound.playFire()

    } else {
      sound.pauseMusic()
      buttonFire.classList.remove('selected')
    }

    buttonTree.classList.remove('selected')
    buttonRain.classList.remove('selected')
    buttonCoffee.classList.remove('selected')

  })

  inputTree.addEventListener('input', () => {
    let volume = Number(inputTree.value / 100)
    sound.volumeTree(volume)
  })

  inputRain.addEventListener('input', () => {
    let volume = Number(inputRain.value / 100)
    sound.volumeRain(volume)
  })

  inputRoom.addEventListener('input', () => {
    let volume = Number(inputRoom.value / 100)
    sound.volumeRoom(volume)
  })

  inputFire.addEventListener('input', () =>{
    let volume = Number(inputFire.value / 100)
    sound.volumeFire(volume)
  })

}