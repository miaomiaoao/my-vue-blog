<template>
    <div class="article">
        <menu-component></menu-component>
        <div class="header">
            <div class="article-title">
                <h3>vuex的相关知识</h3>
                <p>vue</p>
            </div>
        </div>
        <div class="main">
            <div v-marked class="markdown">
### hello
[百度](www.baidu.com)
``` javascript
    var x=1;
    for(var i=0;i < 5;i++){

    }
    if(x == 1){}
```
> xxxfwer[eor[p[]]]
            </div>
        </div>
    </div>
</template>
<script>
import MenuComponent from "./../components/menu.vue";
export default {
  components: {
    MenuComponent
  }
};
</script>
<style lang="scss" scoped>
.article {
  height: 100%;
  width: 100%;
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: url("./../assets/image/homepagebg.png") repeat;
    background-size: contain;
    background-position: top left;
    z-index: -1;
  }
  .main {
    position: relative;
    display: inline-block;
    width: 900px;
    min-height: 100vh;
    left: 50%;
    font-size: 20px;
    line-height: 2;
    color: #555;
    background: rgba(255, 255, 255, 0.8);
    transform: translate3d(-50%, 0, 0) scale(1);
  }
  .header {
    padding-bottom: 35%;
    background: url("./../assets/image/articlecover15.jpg");
    background-size: 100% 100%;
    position: relative;
    .article-title {
      bottom: 50px;
      transform: translate3d(-50%, 0, 0) scale(1);
      width: 900px;
      left: 50%;
      position: absolute;
      color: white;

      h3 {
        font-weight: 600;
        font-size: 36px;
      }
      p {
        font-size: 18px;
      }
    }
  }
}
</style>
