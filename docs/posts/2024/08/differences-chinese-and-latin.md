---
layout: doc
title: 中西文混排时汉字与拉丁字母之间差异
date: 2024-08-07
tags:
  - 编程
  - 学习
  - 设计
  - Blog
  - 原创
head:
  - - meta
    - name: description
      content: 这篇文章讨论了中英文混排时，是否应在汉字与拉丁字母之间加入空格的争议。研究和实践表明，虽然专业排版软件如Adobe InDesign通常会自动调整汉字与西文之间的间距，但许多普通用户常常手动插入半角空格以保证文本的可读性和美观。文章介绍了“空格派”在排版中的一些习惯，阐述了何时应该加空格、何时不加空格，并引用了刘昕等人关于中英文混排的标准，最后强调了空格的使用对提高文本阅读体验的重要性。
  - - meta
    - name: keywords
      content: 文字排版 布局
editLink: false
lastUpdated: 2025-01-20T10:10:00
---
# {{ $frontmatter.title }}

>  :black_nib: 文章摘要
<!-- DESC SEP -->

这篇文章讨论了中英文混排时，是否应在汉字与拉丁字母之间加入空格的争议。研究和实践表明，虽然专业排版软件如Adobe InDesign通常会自动调整汉字与西文之间的间距，但许多普通用户常常手动插入半角空格以保证文本的可读性和美观。文章介绍了“空格派”在排版中的一些习惯，阐述了何时应该加空格、何时不加空格，并引用了刘昕等人关于中英文混排的标准，最后强调了空格的使用对提高文本阅读体验的重要性。

<!-- DESC SEP -->

>
> 有研究显示，打字的时候不喜欢在中文和英文之间加空格的人，感情路都走得很辛苦，有七成的比例会在 34 岁的时候跟自己不爱的人结婚，而其余三成的人最后只能把遗产留给自己的猫。毕竟爱情跟书写都需要适时地留白。与大家共勉之。
>
> ​	——[vinta/paranoid-auto-spacing](https://github.com/vinta/pangu.js)



### 参考1

> [中西文混排时汉字与拉丁字母之间是否要有空格？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/19587406/answer/12298128)

Adobe InDesign、Microsoft Word 等对中文与西文（这里用「西文」来泛指用空格分词的外文）混合排版支持较好的软件，都默认增大汉字和西文的间距。InDesign 的默认设置是 1/4 的[全角空格](https://www.zhihu.com/search?q=全角空格&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})宽度（遵从 JIS），也就是约等于一个半角空格。

但大多数情况下我们没有这样专业[排版软件](https://www.zhihu.com/search?q=排版软件&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})的支持，只能手动控制。这种时候，比较在意文字设计（typography，又译「字体排印」）的团队或个人往往都在操作系统界面或网站中的汉字和西文之间插入一个半角空格。

包括许多的

- 公司：苹果、微软、Google、Adobe……
- 团队：Apple4us、Type is Beautiful、[爱范儿](https://www.zhihu.com/search?q=爱范儿&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})……
- 个人：@刘昕、@江疆……

但这些确实是绝对的少数。大多数人都不/不喜欢/不愿意在汉字和[西文](https://www.zhihu.com/search?q=西文&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})之间加空格。毕竟加空格要考虑的东西太多了，而且加空格也会带来一些问题（见后面给出的在 public-html-ig-zh@w3.org 进行的讨论）。

总的来说，「[空格派](https://www.zhihu.com/search?q=空格派&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})」的习惯就是在汉字和西文之间留一个半角空格。但因为在中西文关系上有一些让人不好决定的特例，他们使用空格的方式有一些变数。

根据一般都「加」空格到一般「不加」空格的顺序，大致可以排出来：

- 内部有空格的西文短语（iPod touch）
- 独立的西文单词（iPhone）
- 全大写字母的西文缩写（HTML）
- 单个的西文字母（X）
- [阿拉伯数字](https://www.zhihu.com/search?q=阿拉伯数字&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})（7）和[西文标点](https://www.zhihu.com/search?q=西文标点&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})（/）

西文和汉字和标点三者相遇的时候问题更复杂（汗……「三体」），大家的习惯也有差异。

\- - -

以上是现状，下面是个人观点：

中文与西文混排时，不一定要有空格字符，但一定要有间距。

使用专业排版软件时，交由软件处理间距问题（Adobe Creative Suite 把这个事归入「[标点挤压](https://www.zhihu.com/search?q=标点挤压&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})」）；纯文本写作时，插入半角空格。具体在上面列出的那五种情况下合适加空格，何时不加，至今还没有什么共识。

关注文字设计的朋友其实可以编写自己的 Manual of Style，最终或许能在[百家争鸣](https://www.zhihu.com/search?q=百家争鸣&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})中诞生中文互联网的一份事实标准。

我的空格习惯基本上是受[@刘昕](https://www.zhihu.com/people/455b06074c9e37df07146f86294f6373)

影响而建立的。因为这篇日志：

《中文 Web 阅读体验》：

[http://www.livid.cn/doc_view.php?doc_id=5332](https://link.zhihu.com/?target=http%3A//www.livid.cn/doc_view.php%3Fdoc_id%3D5332)

（原站已关闭，这里是存档：

[中文 Web 阅读体验](https://link.zhihu.com/?target=http%3A//web.archive.org/web/20110716090934/http%3A//www.livid.cn/doc_view.php%3Fdoc_id%3D5332)

）

在看过这篇日志后，我意识到、并至今坚定维护着空格的必要性。刘昕在文中的这句话解释了基本的空格使用规则：

> 中文正文及标题中出现的英文及数字应该使用[半角](https://www.zhihu.com/search?q=半角&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra={"sourceType"%3A"answer"%2C"sourceId"%3A12298128})方式输入，并且在左右各留一个半角空格。如果这些这些半角英文及数字的左边或者右边紧接着任何的中文全角括号或者其他标点符号的话，则不需要加入半角空格。





### 中英文混排参考规范

- 英文和数字使用半角字符
- 中文文字之间不加空格
- 中文文字与英文、阿拉伯数字及 @ # $ % ^ & * . ( ) 等符号之间加空格
- 中文标点之间不加空格
- 中文标点与前后字符（无论全角或半角）之间不加空格
- 如果括号内有中文，则使用中文括号，如果括号中的内容全部都是英文，则使用半角英文括号
- 当半角符号 / 表示“或者”之意时，与前后的字符之间均不加空格



##### 中英文之间需要增加空格

正确：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。

错误：

> 在LeanCloud上，数据存储是围绕`AVObject`进行的。
>
> 在 LeanCloud上，数据存储是围绕`AVObject` 进行的。

完整的正确用法：

> 在 LeanCloud 上，数据存储是围绕 `AVObject` 进行的。每个 `AVObject` 都包含了与 JSON 兼容的 key-value 对应的数据。数据是 schema-free 的，你不需要在每个 `AVObject` 上提前指定存在哪些键，只要直接设定对应的 key-value 即可。

例外：「豆瓣FM」等产品名词，按照官方所定义的格式书写。

中文与数字之间需要增加空格



正确：

> 今天出去买菜花了 5000 元。

错误：

> 今天出去买菜花了 5000元。
>
> 今天出去买菜花了5000元。



##### 数字与单位之间需要增加空格

正确：

> 我家的光纤入屋宽带有 10 Gbps，SSD 一共有 20 TB

错误：

> 我家的光纤入屋宽带有 10Gbps，SSD 一共有 20TB

例外：度数／百分比与数字之间不需要增加空格：

正确：

> 角度为 90° 的角，就是直角。
>
> 新 MacBook Pro 有 15% 的 CPU 性能提升。

错误：

> 角度为 90 ° 的角，就是直角。
>
> 新 MacBook Pro 有 15 % 的 CPU 性能提升。



##### 全角标点与其他字符之间不加空格

正确：

> 刚刚买了一部 iPhone，好开心！

错误：

> 刚刚买了一部 iPhone ，好开心！
>
> 刚刚买了一部 iPhone， 好开心！



##### 用 `text-spacing` 来挽救？

CSS Text Module Level 4 的 [`text-spacing`](https://www.w3.org/TR/css-text-4/#text-spacing-property) 和 Microsoft 的 [`-ms-text-autospace`](https://msdn.microsoft.com/library/ms531164(v=vs.85).aspx) 可以实现自动为中英文之间增加空白。不过目前并未普及，另外在其他应用场景，例如 macOS、iOS、Windows 等用户界面目前并不存在这个特性，所以请继续保持随手加空格的习惯。



#### 标点符号

##### 不重复使用标点符号

虽然中国大陆的标点符号用法允许重复使用标点符号，但是这么做会破坏句子的美观性。

正确：

> 德国队竟然战胜了巴西队！
>
> 她竟然对你说「喵」？！

错误：

> 德国队竟然战胜了巴西队！！
>
> 德国队竟然战胜了巴西队！！！！！！！！
>
> 她竟然对你说「喵」？？！！
>
> 她竟然对你说「喵」？！？！？？！！



#### 全角和半角

不明白什么是全角（全形）与半角（半形）符号？请查看维基百科条目『[全角和半角](https://zh.wikipedia.org/wiki/全形和半形)』。



##### 使用全角中文标点

正确：

> 嗨！你知道嘛？今天前台的小妹跟我说「喵」了哎！
>
> 核磁共振成像（NMRI）是什么原理都不知道？JFGI！

错误：

> 嗨! 你知道嘛? 今天前台的小妹跟我说 "喵" 了哎！
>
> 嗨!你知道嘛?今天前台的小妹跟我说"喵"了哎！
>
> 核磁共振成像 (NMRI) 是什么原理都不知道? JFGI!
>
> 核磁共振成像(NMRI)是什么原理都不知道?JFGI!

例外：中文句子内夹有英文书籍名、报刊名时，不应借用中文书名号，应以英文斜体表示。



##### 数字使用半角字符

正确：

> 这个蛋糕只卖 1000 元。

错误：

> 这个蛋糕只卖 １０００ 元。

例外：在设计稿、宣传海报中如出现极少量数字的情形时，为方便文字对齐，是可以使用全角数字的。



#### 遇到完整的英文整句、特殊名词，其内容使用半角标点

正确：

> 乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
>
> 推荐你阅读 *Hackers & Painters: Big Ideas from the Computer Age*，非常地有趣。

错误：

> 乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
>
> 推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。



#### 名词

##### 专有名词使用正确的大小写

大小写相关用法原属于英文书写范畴，不属于本 wiki 讨论内容，在这里只对部分易错用法进行简述。

正确：

> 使用 GitHub 登录
>
> 我们的客户有 GitHub、Foursquare、Microsoft Corporation、Google、Facebook, Inc.。

错误：

> 使用 github 登录
>
> 使用 GITHUB 登录
>
> 使用 Github 登录
>
> 使用 gitHub 登录
>
> 使用 gｲんĤЦ8 登录
>
> 我们的客户有 github、foursquare、microsoft corporation、google、facebook, inc.。
>
> 我们的客户有 GITHUB、FOURSQUARE、MICROSOFT CORPORATION、GOOGLE、FACEBOOK, INC.。
>
> 我们的客户有 Github、FourSquare、MicroSoft Corporation、Google、FaceBook, Inc.。
>
> 我们的客户有 gitHub、fourSquare、microSoft Corporation、google、faceBook, Inc.。
>
> 我们的客户有 gｲんĤЦ8、ｷouЯƧquﾑгє、๓เςг๏ร๏Ŧt ς๏гק๏гคtเ๏ภn、900913、ƒ4ᄃëв๏๏к, IПᄃ.。

注意：当网页中需要配合整体视觉风格而出现全部大写／小写的情形，HTML 中请使用标淮的大小写规范进行书写；并通过 `text-transform: uppercase;`／`text-transform: lowercase;` 对表现形式进行定义。



##### 不要使用不地道的缩写

正确：

> 我们需要一位熟悉 TypeScript、HTML5，至少理解一种框架（如 React、Next.js）的前端开发者。

错误：

> 我们需要一位熟悉 Ts、h5，至少理解一种框架（如 RJS、nextjs）的 FED。
