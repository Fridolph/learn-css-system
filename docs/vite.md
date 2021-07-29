## 编译打包原理

1. 构建了一个本地服务器（处理源代码成 es6+代码，转发给浏览器）
2. vite1 koa -> vite2 Connect   基于esModule 所以很快
3. 预构建 pre-building

### ESBuild解析

特点：

- 超快的构建速度，且不需要缓存
- 支持ES6和CommonJS的模块化
- 支持ES6的Tree Shaking
- 支持Go、JS的API
- 支持TS、JSX等语法编译
- 支持SourceMap
- 支持代码压缩
- 支持扩展其他插件

ESBuild为什么快？

- 使用Go语言编写，可直接转换为机器代码，无需经过字节码
- ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行
- ESBuild所有内容都是从零编写，而不是第三方，所以一开始就可以考虑各种性能问题
