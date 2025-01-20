---
layout: doc
title: VitePress 笔记使用
date: 2025-01-20
tags:
  - 学习
  - VitePress
editLink: false
lastUpdated: 2025-01-20T10:09:34
---

## 内部链接
内部链接将转换为单页导航的路由链接。此外，子目录中包含的每个 `index.md` 都会自动转换为 `index.html`，并带有相应的 URL `/`。
[VitePress 链接跳转](./VitePress%20链接跳转.md) <!-- 可以添加 .md -->
```html
[VitePress 链接跳转](./VitePress 链接跳转.md)
```

## YAML front matter
任何包含 [YAML](https://yaml.org/) front matter 块的文件都将是 由 Jekyll 作为特殊文件处理。前言必须是第一件事 ，并且必须采用在三短划线 线。下面是一个基本示例：

``` markdown
---
layout: post
title: Blogging Like a Hacker
---
```

### frontmatter 配置

示例：
``` markdown
--- 
title: Docs with VitePress 
editLink: true 
---
```
可以通过 Vue 表达式中的 `$frontmatter` 全局变量访问 frontmatter 数据：

``` Vue
{{ $frontmatter.title }}
```

> 该内容由 Vue 渲染： **{{ $frontmatter.title }}**


## head

- 类型：`HeadConfig[]`

指定要为当前页面注入的额外 head 标签。将附加在站点级配置注入的头部标签之后。

yaml

``` markdown
---
head:
  - - meta
    - name: description
      content: hello
  - - meta
    - name: keywords
      content: super duper SEO
---
```


## layout

- 类型：`doc | home | page`
- 默认值：`doc`

指定页面的布局。

- `doc`——它将默认文档样式应用于 markdown 内容。
- `home`——“主页”的特殊布局。可以添加额外的选项，例如 `hero` 和 `features`，以快速创建漂亮的落地页。
- `page`——表现类似于 `doc`，但它不对内容应用任何样式。当想创建一个完全自定义的页面时很有用。


``` yaml
---
layout: doc
---
```


## navbar

- 类型：`boolean`
- 默认值：`true`

是否显示导航栏。

``` yaml
---
navbar: false
---
```

## sidebar

- 类型：`boolean`
- 默认值：`true`

是否显示 侧边栏

```
---
sidebar: false
---
```

## aside

- 类型：`boolean | 'left'`
- 默认值：`true`

定义侧边栏组件在 `doc` 布局中的位置。

将此值设置为 `false` 可禁用侧边栏容器。  
将此值设置为 `true` 会将侧边栏渲染到右侧。  
将此值设置为 `left` 会将侧边栏渲染到左侧。

```yaml
---
aside: false
---
```

## lastUpdated

- 类型：`boolean | Date`
- 默认值：`true`

是否在当前页面的页脚中显示最后更新时间的文本。如果指定了日期时间，则会显示该日期时间而不是上次 git 修改的时间戳。

``` yaml
---
lastUpdated: false
---
```


> [!TIP]
> 你必须提交 markdown 文件才能看到最后更新时间。

