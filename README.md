# my_blog

> personal blog

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## about dpr

设备像素比简称dpr,其定义了物理像素和设备独立像素的对应关系
设备像素比 = 物理像素 / 设备独立像素 在js中可以通过window.devicePixelRatio获取到当前设备的dpr
在css中,可以通过-webkit-device-pixel-ratio , -webkit-min-device-pixel-ratio和-webkit-max-device-pixel-ratio
进行媒体查询,对不同dpr的设备,做一些样式适配。