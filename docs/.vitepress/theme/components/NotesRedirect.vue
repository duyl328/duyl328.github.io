<template>
</template>
<script setup lang="ts">
import { useRouter } from 'vitepress'

import { createSideBarZH } from '../utils/createSideBar'

const router = useRouter()

const sideBar = createSideBarZH()

const prefix = '/notes/'
const firstItemLink = sideBar[prefix][0].items[0].link

router.go(firstItemLink)
</script>
<style scoped></style>
