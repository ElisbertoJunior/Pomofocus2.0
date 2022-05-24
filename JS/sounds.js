export default function Sounds() {

  const rain = new Audio("assets/Chuva.wav")
  const tree = new Audio("assets/Floresta.wav")
  const room = new Audio("assets/Cafeteria.wav")
  const fire = new Audio("assets/lareira.wav")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  rain.loop = true
  tree.loop = true
  room.loop = true
  fire.loop = true

  tree.volume = 0.5
  rain.volume = 0.5
  room.volume = 0.5
  fire.volume = 0.5


  function playRain() {
    rain.play()
  }

  function playTree() {
    tree.play()
  }

  function playRoom() {
    room.play()
  }

  function playFire() {
    fire.play()
  }

  
  function pauseMusic() {
    rain.pause()
    tree.pause()
    room.pause()
    fire.pause()
  }

 
  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function volumeTree (value) {
    tree.volume = value
  }

  function volumeRain (value) {
    rain.volume = value
  }

  function volumeRoom(value) {
    room.volume = value
  }

  function volumeFire (value) {
    fire.volume = value
  }

  
  return {
        rain,
        tree,
        room,
        fire,
        playRain,
        playTree,
        playRoom,
        playFire,
        pauseMusic,
        pressButton,
        timeEnd,
        volumeTree,
        volumeRain,
        volumeRoom,
        volumeFire
  }



}