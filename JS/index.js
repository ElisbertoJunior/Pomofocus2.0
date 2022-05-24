import Sounds from "./sounds.js"
import { elements } from "./elements.js"
import { Timer } from "./timer.js"
import { Events } from "./events.js"
import { DarkMode } from "./darkMode.js"

const sound = Sounds()

const {
  minutesDisplay,
  secondsDisplay,
} = elements

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

Events({
  sound,
  elements,
  timer
})

DarkMode({
  elements
})

