<template>
  <div class="image-viewer">
    <t-config-provider :global-config="globalConfig">
      <t-image-viewer
          v-model:visible="show"
          :images="previewImageInfo.list"
          :default-index="previewImageInfo.idx"
          :key="previewImageInfo.idx"
          @close="show = false"
      >
      </t-image-viewer>
      <TDesignDark/>
    </t-config-provider>
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref, watch } from 'vue'
import { useRoute } from 'vitepress'
import zhConfig from 'tdesign-vue-next/es/locale/zh_CN'

import TDesignDark from './TDesignDark.vue'

// 处理 TDesign 的国际化
const route = useRoute()
const globalConfig = ref<typeof zhConfig >(zhConfig)
watch(
    () => route.path,
    () => {
      globalConfig.value = zhConfig
    },
    {
      immediate: true,
    },
)

// 处理图片预览
const show = ref(false)
const previewImageInfo = reactive<{ url: string; list: string[]; idx: number }>(
    {
      url: '',
      list: [],
      idx: 0,
    },
)

function previewImage (e: Event) {
  console.log("11111");
  const target = e.target as HTMLElement
  const currentTarget = e.currentTarget as HTMLElement
  console.log("2222");
  if (target.tagName.toLowerCase() === 'img') {
    const imgs = currentTarget.querySelectorAll<HTMLImageElement>(
        '.content-container .main img',
    )
    const idx = Array.from(imgs).findIndex((el) => el === target)
    console.log(idx,"333");
    const urls = Array.from(imgs).map((el) => el.src)

    console.log(urls,"8888");
    const url = target.getAttribute('src')
    previewImageInfo.url = url!
    previewImageInfo.list = urls
    previewImageInfo.idx = idx
    console.log(url,"666");

    // 兼容点击 main 之外的图片
    if (idx === -1 && url) {
      console.log("777");
      previewImageInfo.list.push(url)
      previewImageInfo.idx = previewImageInfo.list.length - 1
    }
    console.log("555");
    show.value = true
    console.log("444");
  }
}

onMounted(() => {
  console.log("onMounted");
  if (typeof document !== 'undefined') {
    console.log("typeof document !== 'undefined'");
    // 使用document的代码
    const docDomContainer = document.querySelector('#VPContent')
    console.log("docDomContainer");
    docDomContainer?.addEventListener('click', previewImage)
    console.log("docDomContainer?.addEventListener");
  }
})

onUnmounted(() => {
  console.log("onUnmounted");
  if (typeof document !== 'undefined') {
    // 使用document的代码
    const docDomContainer = document.querySelector('#VPContent')
    docDomContainer?.removeEventListener('click', previewImage)
  }
})
console.log("0000000000");
</script>
<style>
/* 不提供下载功能，隐藏下载按钮，tdesign 下载有问题 */
.t-image-viewer__modal-icon:nth-child(7) {
  display: none !important;
}
</style>
