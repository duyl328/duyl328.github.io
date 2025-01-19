<template></template>
<script setup lang="ts">
import { useRouter } from 'vitepress'
import autoSidebar from '../../autoSidebar'

const router = useRouter()
const prefix = '/notes/'
    // /notes/Python基础/01python数据模型
let sideBarElement = autoSidebar[prefix]
let sideBarElementElement = sideBarElement[0]
const firstItemLink = sideBarElementElement.items[0].link


const s = firstItemLink.replace(/\.[^/.]+$/, '');

router.go(s)
</script>
<style scoped></style>
