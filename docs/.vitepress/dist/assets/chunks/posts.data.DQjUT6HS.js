const e=JSON.parse('[{"title":"中西文混排时汉字与拉丁字母之间差异","url":"/posts/2024/08/中西文混排时汉字与拉丁字母之间差异","excerpt":"<p>这篇文章讨论了中英文混排时，是否应在汉字与拉丁字母之间加入空格的争议。研究和实践表明，虽然专业排版软件如Adobe InDesign通常会自动调整汉字与西文之间的间距，但许多普通用户常常手动插入半角空格以保证文本的可读性和美观。文章介绍了“空格派”在排版中的一些习惯，阐述了何时应该加空格、何时不加空格，并引用了刘昕等人关于中英文混排的标准，最后强调了空格的使用对提高文本阅读体验的重要性。</p>\\n","date":{"time":1723032000000,"string":"2024/08/07","year":"2024年","monthDay":"08/07"},"tags":["编程","学习","设计"]},{"title":"登录功能的思考","url":"/posts/2024/08/登录功能的思考","excerpt":"<p>这篇文章介绍了如何安全地存储用户数据，包括用户名、密码哈希、邮箱等，强调使用 bcrypt 加密密码和唯一盐来提升安全性。它还详细解释了 HTTPS 如何通过加密、身份验证和数据完整性保护来确保通信安全，并探讨了前端加密与 HTTPS 的配合使用。此外，文章还讨论了如何管理 SSL/TLS 证书、Token 存储和安全性防护策略，如防止 XSS 和 CSRF 攻击。</p>\\n","date":{"time":1722859200000,"string":"2024/08/05","year":"2024年","monthDay":"08/05"},"tags":["编程","学习"]},{"title":"TypeScript 应该被放弃吗","url":"/posts/2024/08/TypeScript 应该被放弃吗","excerpt":"<p>文章讨论了关于是否放弃 TypeScript 的问题，尤其是在一些大牛和社区项目的选择上。重点聚焦于两篇文章的观点：</p>\\n<p>Turbo 8 放弃 TypeScript：作者认为 TypeScript 的类型检查反而增加了开发中的负担，并且声明类型复杂化代码，减少了开发效率。这个观点在 Reddit 和知乎引发了激烈讨论，部分评论指出 Turbo 8 并不具备广泛影响力，且作者习惯发表反向意见。</p>\\n<p>TypeScript 的额外成本：第二篇文章提到，在某些场景下，TypeScript 的类型体操带来不必要的复杂度，尤其是对于小型项目，编写精确的类型定义可能比核心逻辑代码更为冗长。然而，TypeScript 相比于 JavaScript 在维护性和可扩展性上具有优势，尤其是对于框架和类库的开发者而言，尽管带来一些额外的维护成本。</p>\\n<p>总体来看，放弃 TypeScript 的选择多见于小型或开源项目的维护者，而对于大多数开发者来说，TypeScript 提供的类型系统和可维护性仍然是更受欢迎的选择。</p>\\n","date":{"time":1722772800000,"string":"2024/08/04","year":"2024年","monthDay":"08/04"},"tags":["编程","学习","思考"]},{"title":"Vue还是React?","url":"/posts/2024/08/Vue还是React","excerpt":"<p>这篇文章探讨了 Vue、React 和 Next.js 之间的选择，并深入分析了 React 的一些优缺点。作者指出，虽然 Vue 在国内市场占据主导地位，React 在国外仍然保持强大的活力。但与此同时，React 面临不少批评，特别是其逐渐显现的技术债务和性能问题。文章引用了一些反对 React 的观点，强调 React 已显老化，且与其他框架相比，存在着难以兼容和过度依赖自定义模块的问题。同时，文章还提到其他框架如 Svelte 的优越性，认为它能提供类似 React 的功能，但更加简洁和高效。</p>\\n<p>如果你对前端框架的选择和 React 未来的方向感兴趣，这篇文章将为你提供一些新的视角，帮助你做出更明智的决策。</p>\\n","date":{"time":1722772800000,"string":"2024/08/04","year":"2024年","monthDay":"08/04"},"tags":["编程","学习","思考"]},{"title":"主流网站主页布局展示内容及渲染方式调研","url":"/posts/2024/08/主流网站主页布局展示内容及渲染方式调研","date":{"time":1722686400000,"string":"2024/08/03","year":"2024年","monthDay":"08/03"},"tags":["设计"]},{"title":"JavaScript和Vue中实现表格(table)固定表头和首列","url":"/posts/2022/08/JavaScript和Vue中实现表格(table)固定表头和首列【提供Vue和原生代码】","excerpt":"<p>这篇文章介绍了如何在 JS 或 Vue 中实现表格的列和表头固定功能，适用于不同的开发环境（如原生\\nJavaScript、Vue、React、小程序等）。文章详细展示了实现这一功能的思路和具体步骤，包括使用 Vue3 和 TypeScript 结合 Less\\n来完成样式和功能的实现。</p>\\n","date":{"time":1661515200000,"string":"2022/08/26","year":"2022年","monthDay":"08/26"},"tags":["编程","学习"]},{"title":"Vue3中的ref为何要用.value进行值的调用？","url":"/posts/2022/08/Vue3中的ref为何要用.value进行值的调用？","excerpt":"<p>这篇文章对比了 Vue2 和 Vue3 中的数据响应式处理方式，特别是如何定义和代理数据。在 Vue2 中，所有数据都通过一个统一的 data 对象进行管理，使用 Object.defineProperty 来实现响应式绑定。而在 Vue3 中，数据定义变得更加灵活，允许直接使用单一的数据类型，通过 ref 和 reactive 来创建响应式数据。虽然 ref 看似代理了普通数据，但实际上 Vue3 使用了 Proxy 技术对数据进行处理，这使得响应式机制变得更加高效和灵活。</p>\\n<p>总结来说，Vue3 引入了更强大的数据代理机制，通过 Proxy 改善了响应式数据的管理，允许更复杂的数据类型和更加灵活的数据操作，而 Vue2 依赖于传统的对象代理方式。这些变化使得 Vue3 在处理响应式数据时更具优势，尤其是在开发大型项目时。</p>\\n<p>如果你对 Vue3 中的响应式机制和数据代理的工作原理感兴趣，这篇文章会带你深入了解背后的技术细节。</p>\\n","date":{"time":1661428800000,"string":"2022/08/25","year":"2022年","monthDay":"08/25"},"tags":["编程","学习"]},{"title":"Vue3新属性 — css中使用v-bind（v-bind in css）","url":"/posts/2022/08/Vue3新属性 — css中使用v-bind（v-bind in css）","excerpt":"<p>这篇文章介绍了在 Vue3 中如何使用 v-bind() 来动态绑定 CSS 样式，尤其是在 CSS、LESS 和 SCSS 文件中的应用。</p>\\n<p>关键内容总结：\\n背景：文章解释了 Vue3 中 v-bind() 在样式绑定中的新用法，展示了在不同样式表语言（CSS、LESS、SCSS）中的常见应用场景。\\n实际示例：\\nCSS：展示了通过 v-bind() 绑定直接使用的值、拼接值、对象调用和组合使用四种方式。\\nLESS：与 CSS 类似，使用变量和 v-bind() 绑定数据，但在 LESS 中出现了拼接使用的问题。\\n问题分析：\\n拼接使用问题：在 LESS 中，某些拼接方式无法正常工作，导致变量无法正确转换为带单位的值，甚至会导致错误。\\n错误提示：解释了因 LESS 在拼接操作时报错，导致绑定失败的问题。</p>\\n","date":{"time":1660219200000,"string":"2022/08/11","year":"2022年","monthDay":"08/11"},"tags":["编程","学习"]},{"title":"在JavaScript获取Promise的状态","url":"/posts/2022/08/在JavaScript获取Promise的状态","excerpt":"<p>这篇文章讨论了如何同步地获取 JavaScript Promise 对象的状态。通过一个 Stack Overflow 上的解决方案，文章介绍了如何使用\\nPromise.race() 方法判断 Promise 的状态。</p>\\n<p>关键内容总结：\\n问题：如何在执行过程中同步地检查一个 Promise 的状态？\\n解决方案：文章通过 Promise.race() 方法对 Promise 和一个额外的 target 对象进行竞赛（race）。根据返回的对象，判断 Promise 是否处于\\npending（待定）、fulfilled（已完成）或 rejected（已拒绝）状态。\\n代码分析：\\n通过创建一个 target 对象，Promise.race() 在 Promise 和 target 中最先完成的会决定返回值。\\n如果 Promise 未完成，则返回 pending；如果已完成且无错误，则返回 fulfilled；如果发生错误，则返回 rejected。\\n注意事项：Promise.race() 中的顺序很重要，确保 promise 在前，否则可能会影响结果。\\n这个方法利用了 Promise.race() 的特性，巧妙地判断了 Promise 的状态。</p>\\n","date":{"time":1660046400000,"string":"2022/08/09","year":"2022年","monthDay":"08/09"},"tags":["编程","学习"]},{"title":"如何在Vue3的Store中使用i18n","url":"/posts/2022/06/如何在Vue3的Store中使用i18n","excerpt":"<p>这篇文章讨论了在 Vue3 环境下使用 vue-i18n 和 element-plus 处理多语言提示时遇到的问题及解决方案。具体来说，文章描述了在使用\\nsetup 函数的路由中，因 useI18n() 在加载时未准备好，导致无法直接使用 t、d 等翻译方法的问题。为了绕过这个问题，文章提供了解决方案，通过手动引入已配置的\\ni18n 方法，而不是依赖 useI18n()。</p>\\n<p>总结来说，Vue3 中的 setup 和 ts 环境在路由中使用多语言时会遇到时序性问题，解决方法是手动导入已配置的 i18n\\n实例，直接调用翻译方法，避免了在路由中使用 useI18n() 时的顺序问题。这种方法可以确保在路由和组件中都能正确地显示多语言提示信息。</p>\\n","date":{"time":1656331200000,"string":"2022/06/27","year":"2022年","monthDay":"06/27"},"tags":["编程","工作","学习"]}]');export{e as d};
