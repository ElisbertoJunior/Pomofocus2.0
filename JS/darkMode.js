import { elements } from './elements.js'

const {
  buttonMode,
  page,
  mooonImage,
  sumImage
} = elements

export function DarkMode() {

  buttonMode.addEventListener('click', () => {
    if (page.classList.toggle('darkMode') == true) {
      page.classList.add('darkMode')
      mooonImage.classList.remove('hide')
      sumImage.classList.add('hide')
      
    } else {
      page.classList.remove('darkMode')
      mooonImage.classList.remove('hide')
      sumImage.classList.remove('hide')
    }

  })


}