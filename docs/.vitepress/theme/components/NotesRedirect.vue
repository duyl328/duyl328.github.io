<template>
  <h1>无内容</h1>
</template>
<script setup lang="ts">
import { useRouter } from 'vitepress'
import autoSidebar from '../../autoSidebar'

const router = useRouter()
console.log("111111111111111");
const prefix = '/notes/'
    // /notes/Python基础/01python数据模型
let sideBarElement = autoSidebar[prefix]
let sideBarElementElement = sideBarElement[0]
console.log(sideBarElementElement);
const firstItemLink = sideBarElementElement.items[0].link


const s = firstItemLink.replace(/\.[^/.]+$/, '');

router.go(s)
</script>
<style scoped></style>
