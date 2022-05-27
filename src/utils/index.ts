import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '../constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

export const isMobile = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})

export const useRem = () => {
  const MAX_FONT_SIZE = 40

  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontsize = window.innerWidth / 10
    fontsize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontsize
    html.style.fontSize = fontsize + 'px'
  })
}
