<template>
  <div>我是移动端nav</div>
</template>

<script setup>
import { getCategory } from '@/api/category'

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}
getCategoryData()
</script>
