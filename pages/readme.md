## 开发过程中使用的插件和遇到的问题记录

### 一.关于插件的使用

#### 1. markdown
markdown 使用的是mavon-editor  
首先   
> npm install mavon-editor --save

之后在plugins文件夹下新建一个mavon-editor.js文件 

```
import Vue from 'vue'
import mavoneditor from 'mavon-editor'

Vue.use(mavoneditor)
```
在nuxt.config.js中的plugins中加入mavon-editor.js这个文件的配置项

遇到的问题
> ReferenceError: document is not defined

在配置nuxt.config.js的plugins时,在里面加入一个配置ssr: false。并在write.vue中引用该插件时,外层包裹上<no-ssr>标签