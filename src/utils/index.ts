import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '../constants'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

export const isMobile = computed(() => {
  return width.value < PC_DEVICE_WIDTH
})
