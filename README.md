# vue-larger-image
[English](https://github.com/lhyUnited/vue-larger-image/blob/master/README.md) | [中文简体](https://github.com/lhyUnited/vue-larger-image/tree/master/docs/readme.zh.md)


A plugin based on Vuejs, which provides the function of viewing larger image. As view sounds like Vue, so we call it vue-larger-iamge

[![iamge](https://img.shields.io/badge/github-star-brightgreen)](https://github.com/lhyUnited/vue-larger-image)
[![image](https://img.shields.io/badge/npm-download-yellow)](https://www.npmjs.com/package/vue-larger-image)
## Usage
### Option one：

```shell
# with npm
npm i vue-larger-image

# with yarn
yarn add vue-larger-iamge
```

Register in `main.js`
```js
import VueLargerImage from 'vue-larger-image'
Vue.use(VueLargerImage)
```

In the component you wish to deploy

```html
<vue-larger-image
  width="200"
  bgColor="rgb(0,0,0,.2)"
  height="auto"
  alt="hello"
  src="https://static.tomluvjerry.cn/files/lhyUnited/2236da75b7fba3b3ff6380242166e9b3.jpg">
</vue-larger-image>
```

### Option two：
import the plugin as **Web-component**
```html
<script src="https://cdn.jsdelivr.net/npm/vue-larger-image@latest/dist/wc/vue-larger-image.min.js"></script>
```
Some place where you wish to deploy：
```html
<vue-larger-image
  width="200"
  bgColor="rgb(0,0,0,.2)"
  height="auto"
  alt="hello"
  src="https://static.tomluvjerry.cn/files/lhyUnited/2236da75b7fba3b3ff6380242166e9b3.jpg">
</vue-larger-image>
```

More about Web-component，please check: [https://cli.vuejs.org/zh/guide/build-targets.html#web-components-%E7%BB%84%E4%BB%B6](https://cli.vuejs.org/zh/guide/build-targets.html#web-components-%E7%BB%84%E4%BB%B6)

### Props
| options | type | default | additional |
|--|--|--|--|
| src | String | https://i.loli.net/2021/03/29/Hcvo57YUtpGmwdq.jpg | **DO NOT** USE RELATIVE PATH |
| width | String | auto | width of image |
| height | String | auto | height of image |
|bgColor|String|rgba(0,0,0,.45)| the background-color of mask |
| alt | String | image | something to show when the image crushed |
| title | String |''|
|srcset| String | '' |

## Develope
### Clone this repo
```shell
git clone git@github.com:lhyUnited/vue-larger-image.git
```

### Start the server
```shell
yarn serve
```

### Build
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
* wc: output expected as Web-component
* lib: output expected as umd
* pp: prepublish
*/
```

## LICENSE
MIT
