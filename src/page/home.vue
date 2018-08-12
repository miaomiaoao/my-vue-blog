<template>
    <div class="home" @click="init" @touchmove="init">
      <div class="wrapper">
          <h1>一个人的小世界</h1>
          <h3>努力学习前端的小菜鸟</h3>
          <router-link tag="a" to="blog"> Blog</router-link>
          <router-link tag="a" to="category">Category</router-link>
          <router-link tag="a" to="about">About</router-link>
      </div>
      <canvas ref="canvas"></canvas>

       
        <!--router-link的几种写法>
        1.<router-link to="home"></router-link>
        2.使用v-bind的js表达式
        <router-link :to="'home'"></router-link>
        3.:to里面添加参数
        <router-link :to="{path: 'home'}"></router-link>
        4.:to里面添加路由名称
        <router-link :to="{name: 'home', params: {userId: 123}}"></router-link>
        5.带查询参数
        <router-link :to="{path: 'home'， query: {plan: 'private'}}"></router-link>

        使用replace属性,点击时会调用router.replace() 而不是router.push() 于是导航不会留下history记录
        设置append属性,则在当前路径前面添加基路径
        tag表示想渲染成某种标签
        active-class 设置链接激活时使用的css类名。默认值可以通过路由的构造选项 linkActiveClass来全局卑职
        <!-->
    </div>
</template>
<script>
export default {
  data() {
    return {
      RIBBON_WIDE: 90,
      r: 0,
      PI_2: Math.PI * 2,
      cos: Math.cos,
      random: Math.random
    };
  },
  mounted() {
    this.canvasRibbon = this.$refs.canvas;
    this.ctx = this.canvasRibbon.getContext("2d");
    this.dpr = window.devicePixelRatio || 1;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvasRibbon.width = this.width * this.dpr;
    this.canvasRibbon.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);
    this.ctx.globalAlpha = 0.6;
    this.init();
  },

  methods: {
    init() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.path = [
        { x: 0, y: this.height * 0.7 + this.RIBBON_WIDE },
        { x: 0, y: this.height * 0.7 - this.RIBBON_WIDE }
      ];
      while (this.path[1].x < this.width + this.RIBBON_WIDE) {
        this.draw(this.ctx, this.path[0], this.path[1]);
      }
    },
    draw(ctx, start, end) {
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      let nextX = end.x + (Math.random() * 2 - 0.25) * this.RIBBON_WIDE,
        nextY = this.geneY(end.y);
      ctx.lineTo(nextX, nextY);
      ctx.closePath();
      this.r -= this.PI_2 / -50;
      ctx.fillStyle =
        "#" +
        (
          ((this.cos(this.r) * 127 + 128) << 16) |
          ((this.cos(this.r + this.PI_2 / 3) * 127 + 128) << 8) |
          (this.cos(this.r + this.PI_2 / 3 * 2) * 127 + 128)
        ).toString(16);
      ctx.fill(); // 根据当前样式填充路径
      this.path[0] = this.path[1]; // 起点更新为当前终点
      this.path[1] = { x: nextX, y: nextY }; // 更新终点
    },
    // 获取下一路径终点的y坐标值
    geneY(y) {
        var temp = y + (Math.random() * 2 - 1.1) * this.RIBBON_WIDE;
        return (temp > this.height || temp < 0) ? this.geneY(y) : temp
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  background: #ffffff;
  position: relative;
  overflow: hidden;
  height: 100%;
  a {
    display: block;
    color: #999;
    font-size: 18px;
    line-height: 2em;
    transition: color .2s ease;
    &:hover {
      color:rgb(55, 150, 240)
    }
  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 30%;
    width: 300px;
    margin: -150px 0 0 -150px;
    text-align: center;
  }

  h3 {
    color: #999;
    font-weight: normal;
    font-size: 15px;
    letter-spacing: .12em;
    margin-bottom: 30px;
    left: 3px;
  }
}
</style>
