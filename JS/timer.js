import Sounds from "./sounds.js"
const sound = Sounds()

export function Timer({
  minutesDisplay,
  secondsDisplay
  }) {

    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    let timerTimeOut

  
function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
  timerTimeOut = setTimeout(() => {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    if(isFinished) {
      updateDisplay(minutes, 0)
      sound.timeEnd()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))
    countdown()

  },1000)
}

function stopTimer() {
  clearTimeout(timerTimeOut)
}

function moreMinutes() {
  minutes = minutes + 5
  updateDisplay(minutes, 0)
}

function lessMinutes() {
  minutes = minutes - 5
  if(minutes < 0){
    alert("limite de minimo de tempo atingido!")
  }
  else {
  updateDisplay(minutes, 0)
  }

}

return {
  updateDisplay,
  countdown,
  stopTimer,
  moreMinutes,
  lessMinutes
}


}