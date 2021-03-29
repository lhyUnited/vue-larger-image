# vue-larger-image
一个vue插件，view读音同vue，点一点，查看大图

[![iamge](https://img.shields.io/badge/github-star-brightgreen)](https://github.com/lhyUnited/vue-larger-image)
[![image](https://img.shields.io/badge/npm-download-yellow)](https://www.npmjs.com/package/vue-larger-image)
## 使用
### 姿势一：

在`main.js`中注册
```js
import VueLargerImage from 'vue-larger-image'
Vue.use(VueLargerImage)
```

在要使用的组件内

```html
<vue-larger-image
  width="200"
  bgColor="rgb(0,0,0,.2)"
  height="auto"
  alt="hello"
  src="https://static.tomluvjerry.cn/files/lhyUnited/2236da75b7fba3b3ff6380242166e9b3.jpg">
</vue-larger-image>
```

### 姿势二：
以**Web-component**的方式引入
```html
<script src="https://cdn.jsdelivr.net/npm/vue-larger-image@latest/dist/wc/vue-larger-image.min.js"></script>
```
在需要使用的地方：
```html
<vue-larger-image
  width="200"
  bgColor="rgb(0,0,0,.2)"
  height="auto"
  alt="hello"
  src="https://static.tomluvjerry.cn/files/lhyUnited/2236da75b7fba3b3ff6380242166e9b3.jpg">
</vue-larger-image>
```

关于Web-component，请查看[https://cli.vuejs.org/zh/guide/build-targets.html#web-components-%E7%BB%84%E4%BB%B6](https://cli.vuejs.org/zh/guide/build-targets.html#web-components-%E7%BB%84%E4%BB%B6)

### 可选参数
| options | 类型 | 默认值 | 说明|
|--|--|--|--|
| src | String | https://i.loli.net/2021/03/29/Hcvo57YUtpGmwdq.jpg | 不能使用相对路径 |
| width | String | auto |
| height | String | auto |
|bgColor|String|rgba(0,0,0,.45)|遮罩层的背景颜色 |
| alt | String | image |图片加载出错显示的文字|
| title | String |''|
|srcset| String | '' |

## 开发
### 拉取本仓库代码
```shell
git clone git@github.com:lhyUnited/vue-larger-image.git
```

### 本地起服务
```shell
yarn serve
```

### 打包
```json
"scripts": {
  "serve": "vue-cli-service serve",
  "lint": "vue-cli-service lint",
  "wc": "rm -rf ./dist/wc/* && vue-cli-service build --target wc --name vue-larger-image --dest dist/wc VueLargerImage/src/index.vue",
  "lib": "rm -rf ./dist/lib/* && vue-cli-service build --target lib --name vue-larger-image --dest dist/lib ./VueLargerImage/index.js",
  "build": "rm -rf ./dist/* && npm run wc && npm run lib",
  "pp": "npm run wc && npm run lib && npm publish --registry http://registry.npmjs.org"
},
/** 
* wc: 打包成Web-component类型
* lib: 打包成umd通用类型
* pp: prepublish
*/
```

## LICENSE
MIT
