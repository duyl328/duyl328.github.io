---
date: '2022-08-25T10:33:58+08:00'
draft: false
title: 'Vue3中的ref为何要用.value进行值的调用？'
keywords: [ 'vue','vue3' ]
tags: [ 'vue3' ]
categories: [ 'skill' ]
---

在`Vue2`中，所有的数据都通过一个Data进行统一的返回，并且在data中对某个组件要用的数据进行统一的管理，常见的使用形式是这样的：

```html
<template>
  <div class="div">
    <todos :Obj="tos" :removeObj="removeObj"></todos>
  </div>
</template>

<script>
import search from '@/components/search'
import todos from '@/components/todos'
import all from '@/components/all'

export default {
  name: 'App',
  data () {
    return {
      tos: [
        { id: '001', value: '第一个', done: true },
        { id: '002', value: '第二个', done: true },
        { id: '003', value: '第三个', done: false },
        { id: '004', value: '第四个', done: true },
      ],
    }
  },
  computed: { },
  components: {
    search, todos, all,
  },
  methods: {
    removeObj (obj) {
      console.log(obj.id)
      this.tos = this.tos.filter(item => item.id !== obj.id)
      console.log(this.tos)
    },
  },
}
</script>

<style scoped>
// 样式
</style>
```

可以看出来这里定义的内容都在一个数组中进行，或者是一个函数，将要使用的数据返回出来，这里无论怎么进行操作处理，最终进行数据代理的时候得到的都是一个对象，Vue2中直接通过`defineProperty`进行处理，并绑定对应的监听事件进行响应式的处理。

而Vue3中，数据的定义可以是单独的，Vue可以让我们随时需要随时定义，这也就带来了另一个问题，我需要的一个数据可能不是对象

```js
<script lang="ts" setup>

let str = ref('响应式字符串')
let obj = reactive({
  name: '张三',
  age: 10,
})

</script>
```

如果要定义的数据不是对象，还需要代理会怎么样？

在Vue2中数据的定义都在对象中统一进行，也就不会出现这种情况，如果一定要代理一个单独的数据呢？

Vue2中的数据代理通过`defineProperty`进行实现，也就是说我们要让`defineProperty`代理一个普通的数据，而不是一个对象，在`defineProperty`的MDN的文档中是这样定义的：

> **`Object.defineProperty()`** 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

通过这个可以明确看出，只能进行对象的代理，不能进行普通数据的代理，如果使用普通数据类型会直接报以下错误[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-p1Lm0OSJ-1661407967498)(Vue3中的ref为何要用.value进行值的调用？.assets/image-20220825094409254.png)]

	在Vue3中数据代理可以使用单一数据了，并且也改进了数据代理的方式，使用的是`Peoxy`完成了数据代理，而MDN中对`Proxy`也进行了定义：

> **Proxy** 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

可以看出，`Proxy`依然是为对象服务，而不是普通的内容，这样问题似乎就解决了

本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

可以看出，`Proxy`依然是为对象服务，而不是普通的内容，这样问题似乎就解决了

> 即使是Vue3中使用的`Proxy`的代理方式也不能进行普通数据的代理，所以当调用`Ref`的时候其实仍然创建了一个`Proxy`对象，并且Vue帮你给这个对象了一个`value`属性，属性值就是你定义的内容，改变的时候监视的改变依然是通过`Proxy`的数据劫持来进行响应式的处理，而模板中使用的时候`Vue`会默认调用对应的`value`属性，从而完成模板中的内容的直接调用
