---
layout: doc
title: 如何在Vue3的Store中使用i18n
date: 2022-06-27
tags:
  - 编程
  - 工作
  - 学习
  - vue
  - JavaScript
  - i18n
  - BUG
  - Blog
  - 原创
head:
  - - meta
    - name: description
      content: 使用的`element-plus`框架时，i18n 的前置初始化
  - - meta
    - name: keywords
      content: vue vue3 i18n js javascript
editLink: false
lastUpdated: 2025-01-20T10:08:00
---

# {{ $frontmatter.title }}

>  :black_nib: 文章摘要
<!-- DESC SEP -->

这篇文章讨论了在 Vue3 环境下使用 vue-i18n 和 element-plus 处理多语言提示时遇到的问题及解决方案。具体来说，文章描述了在使用
setup 函数的路由中，因 useI18n() 在加载时未准备好，导致无法直接使用 t、d 等翻译方法的问题。为了绕过这个问题，文章提供了解决方案，通过手动引入已配置的
i18n 方法，而不是依赖 useI18n()。

总结来说，Vue3 中的 setup 和 ts 环境在路由中使用多语言时会遇到时序性问题，解决方法是手动导入已配置的 i18n
实例，直接调用翻译方法，避免了在路由中使用 useI18n() 时的顺序问题。这种方法可以确保在路由和组件中都能正确地显示多语言提示信息。

<!-- DESC SEP -->

## 使用环境

> `Vue`的版本为：`3.2.36`，
>
> `vue-router`的版本为：`4.0.16`
>
> `vue-i18n`的版本为：`9.2.0-beta.40`

几乎都最新版本了

![在这里插入图片描述](../../../public/posts/2022/06/img-1.png)

## 问题复现

使用的`element-plus`框架进行项目的搭建，在登陆的时候在全局路由中进行密码的校验，如果密码错误或正确使用`element-plus`
中的提示组件登录的提示，但是提示的内容要根据选择的语言进行分别的提示

这个似乎很正常的需求，但是因为使用的`vue3`中的`setup`，并且在路由中是使用的`ts`，所以不能使用this，并且像`vue`文件中使用的引入方式：

```js
const { t, d, n, locale } = useI18n()
```

这种方式也是不行的，因为执行顺序的前后问题，在路由加载时`useI18n()`还没有引入执行，所以这种方式的引入会直接报错的

## 问题解决

因为在`.vue`文件中会使用对应的方法将对应的内容引入，但是当执行路由时这个内容并没有加载，但是这个代码一定是存在并且可以直接运行的，所以可以通过其他方式直接手动将对应需要的代码引入，而不使用提供的方法

当在创建对应的i18n时，会先将对应的内容进行创建和导出：

![在这里插入图片描述](../../../public/posts/2022/06/img-2.png)

在这个文件中创建了i18n，并且对特定的配置项进行了指定，但是导出的这个i18n中有什么？

![在这里插入图片描述](../../../public/posts/2022/06/img-3.png)

在配置的文件中已经存在了要使用的方法，也就是导出的：`t`,`d`,`n`等，要使用的方法也在这里面

![在这里插入图片描述](../../../public/posts/2022/06/img-4.png)

在这个`global`中存在了对应的全局的方法，不需要通过i18n指定的方法进行引入执行，可以直接使用，所以这个就是要手动引入的内容

## 解决

![在这里插入图片描述](../../../public/posts/2022/06/img-5.png)

使用这种方法问题得到解决，不过在尝试过程中，这种两种方式使用的i18n也是有区别的

在引入的过程中，因为方式不同，所以引入的方法其实也不是同一个

![在这里插入图片描述](../../../public/posts/2022/06/img-6.png)

不过在对应的注释中也能略微看出二者的区别

![在这里插入图片描述](../../../public/posts/2022/06/img-7.png)

使用方法引入的‘t’应当也有特有的内容，这里只进行列举，不继续深入探讨。

