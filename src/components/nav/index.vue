<template>
  <div>
    <nav-mobile v-if="isMobile" :list="categoryList"></nav-mobile>
    <nav-pc v-else></nav-pc>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isMobile } from '@/utils/'
import { getCategory } from '@/api/category'
import NavMobile from './mobile.vue'
import NavPc from './pc.vue'

const categoryList = ref([])
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryList.value = categorys
}

getCategoryData()
</script>
