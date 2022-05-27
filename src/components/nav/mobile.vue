<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="wrapRef"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <li
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <li
        class="fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white z-20 shadow-l-white"
      >
        <m-svg-icon @click="isVisible = true" class="w-1.5 h-1.5" name="menu" />
      </li>
      <li
        v-for="(item, index) in list"
        :key="item.id"
        class="flex-shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :class="{ 'text-zinc-100': index === currentSelectedIndex }"
        :ref="selectItemRef"
        @click="selectedItem($event, index)"
      >
        {{ item.name }}
      </li>
    </ul>

    <m-popup v-model="isVisible">
      <m-menu :list="list" @onSelected="handleMenuSelected" />
    </m-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import MMenu from '@/components/menu/index.vue'

defineProps({
  list: {
    type: Array,
    required: true
  }
})

const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})

const isVisible = ref(false)
const currentSelectedIndex = ref(0)
const wrapRef = ref(null)
const { x: wrapScrollLeft } = useScroll(wrapRef)

const selectItemRef = (el) => {
  console.log('list el', el)
}

const selectedItem = (e, index) => {
  const dom = e.target
  currentSelectedIndex.value = index
  const { left, width } = dom.getBoundingClientRect()
  sliderStyle.value = {
    transform: `translateX(${wrapScrollLeft.value + left - 10}px)`,
    width: width + 'px'
  }
}

const handleMenuSelected = (index) => {
  currentSelectedIndex.value = index
}

// onBeforeUpdate(() => {})
</script>
