## 使用环境

> `Vue`的版本为：`3.2.36`，
>
> `vue-router`的版本为：`4.0.16`
>
> `vue-i18n`的版本为：`9.2.0-beta.40`

几乎都最新版本了

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/39a8484eb3d06ca3c791910e2524d01b.png#pic_center =700x500)


## 问题复现

使用的`element-plus`框架进行项目的搭建，在登陆的时候在全局路由中进行密码的校验，如果密码错误或正确使用`element-plus`中的提示组件登录的提示，但是提示的内容要根据选择的语言进行分别的提示

这个似乎很正常的需求，但是因为使用的`vue3`中的`setup`，并且在路由中是使用的`ts`，所以不能使用this，并且像`vue`文件中使用的引入方式：
```js
const { t, d, n, locale } = useI18n()
```

这种方式也是不行的，因为执行顺序的前后问题，在路由加载时`useI18n()`还没有引入执行，所以这种方式的引入会直接报错的

## 问题解决

因为在`.vue`文件中会使用对应的方法将对应的内容引入，但是当执行路由时这个内容并没有加载，但是这个代码一定是存在并且可以直接运行的，所以可以通过其他方式直接手动将对应需要的代码引入，而不使用提供的方法

当在创建对应的i18n时，会先将对应的内容进行创建和导出：

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/41d7a0dd1e001dff0cdc90824cd4a5c4.png#pic_center =800x600)


在这个文件中创建了i18n，并且对特定的配置项进行了指定，但是导出的这个i18n中有什么？

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/df27f14f4ea749627077c95169c280d3.png#pic_center =900x800)


在配置的文件中已经存在了要使用的方法，也就是导出的：`t`,`d`,`n`等，要使用的方法也在这里面

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/0f553c0064f09f20bd80cd22090c691e.png#pic_center =900x700)


在这个`global`中存在了对应的全局的方法，不需要通过i18n指定的方法进行引入执行，可以直接使用，所以这个就是要手动引入的内容

## 解决

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c891798bb88738be6f9720255427d656.png#pic_center)


使用这种方法问题得到解决，不过在尝试过程中，这种两种方式使用的i18n也是有区别的

在引入的过程中，因为方式不同，所以引入的方法其实也不是同一个

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5ff67187219ee8afdbb23ffe27c4b99b.png#pic_center)



不过在对应的注释中也能略微看出二者的区别

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/bdbd1233e2788a14e07686524723ed8c.png#pic_center)


使用方法引入的‘t’应当也有特有的内容，这里只进行列举，不继续深入探讨。

