# component-exercise

> 李云翔的Vue项目架构

## Build Setup

``` bash
# 下载依赖
npm install

# 在本地localhost:9000运行
npm run dev

# 项目打包
npm run build

# 生产环境打包
npm run build --report

# 目录架构
stydycenter-yx
├── build        // webpack公共配置
├── config      // vue配置
├── src
│   ├── assets       // 静态资源
│   ├── components   // 公共组件
│   ├── direcive     // 公用指令
│   ├── demo         // 练习Demo
│   ├── filters      // 公共过滤器
│   ├── mixins       // 全局Mixin
│   ├── plugins      // 插件配置
│   ├── router       // 路由配置
│   ├── store        // vuex目录
│   ├── style        // 公共样式
│   ├── views        // 页面目录
│   ├── App.vue      // app入口
│   ├── main.js      // 入口文件
│   └── store.js     // vuex配置
├── .gitignore       // git 忽略目录配置
├── .editorconfig    // 代码风格配置
├── .eslintignore    // eslint 忽略目录配置
├── .eslintrc        // eslint 配置
├── package.json     // package.json
└── README.md        // 项目说明
```
