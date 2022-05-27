<template>
  <div>
    <nav-mobile v-if="isMobile"></nav-mobile>
    <nav-pc v-else></nav-pc>
  </div>
</template>

<script setup>
import { isMobile } from '@/utils/'
import NavMobile from './mobile.vue'
import NavPc from './pc.vue'
</script>
