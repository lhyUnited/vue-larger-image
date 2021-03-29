# vue-larger-image
一个vue插件，view读音同vue，点一点，查看大图
  

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
  src="https://img.yzcdn.cn/upload_files/2021/01/08/FotbYZAKI4w0iJOFd7LXGV6HLxJW.png">
</vue-larger-image>
```

### 姿势二：
以**Web-component**的方式引入
```html
<script src="./vue-larger-image.min.js"></script>
```
在需要使用的地方：
```html
<vue-larger-image
	width="200"
	bgColor="rgb(0,0,0,.2)"
	height="auto"
	alt="hello"
  src="https://img.yzcdn.cn/upload_files/2021/01/08/FotbYZAKI4w0iJOFd7LXGV6HLxJW.png">
</vue-larger-image>
```

关于Web-component，请查看[https://cli.vuejs.org/zh/guide/build-targets.html#web-components-%E7%BB%84%E4%BB%B6](https://cli.vuejs.org/zh/guide/build-targets.html#web-components-%E7%BB%84%E4%BB%B6)

### 可选参数
| options | 类型 | 默认值 | 说明|
|--|--|--|--|
| src | String | https://static.tomluvjerry.cn/files/lhyUnited/2236da75b7fba3b3ff6380242166e9b3.jpg |
| width | String | 200 |
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
	"wc": "rm -rf ./output/wc/* && vue-cli-service build --target wc --name vue-larger-image --dest output/wc VueLargerImage/src/index.vue",
	"lib": "rm -rf ./output/lib/* && vue-cli-service build --target lib --name vue-larger-image --dest output/lib ./VueLargerImage/index.js",
	"build": "rm -rf ./output/* && npm run wc && npm run lib"
},
/** 
* wc: 打包成Web-component类型
* lib: 打包成umd通用类型
*/
```
