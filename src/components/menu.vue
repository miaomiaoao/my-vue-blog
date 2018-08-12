<template>
  <div :class="[isMenuNavShow? 'on': '', 'menu']" >
    <div class="menu-toggle" @click="openMenu" ></div>
    <div class="menu-nav">
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            isMenuNavShow: false
        }
    },
    methods: {
        openMenu() {
            this.isMenuNavShow = !this.isMenuNavShow
        }
    }
};
</script>
<style lang="scss"  scoped>

.menu-nav {
    width: 100%;
    height: 100%;
    background: #000;
    position: absolute;
    z-index: 999;
    transform: translate3d(100%, 0, 0);
    transition: transform .5s cubic-bezier(0.4, 0, 1, 1); // 此处因为最开始加了display: none 所以无动画效果
    // 去掉display: none 之后动画效果就好用了
}
.on .menu-nav {
    transform: translate3d(0, 0, 0);
}
.menu-toggle {
  position: fixed;
  height: 40px;
  width: 40px;
  right: 28px;
  top: 28px;
  color: initial;
  background: #333;
  cursor: pointer;
  z-index: 1000;
  &::before,
  &::after {
    display: inline-block;
    position: absolute;
    content: "";
    width: 16px;
    height: 2px;
    left: 12px;
    top: 0;
    box-shadow: 0 12px #fff, 0 12px #fff, 0 19px #fff, 0 19px #fff, 0 19px #fff,
      0 26px #fff, 0 26px #fff;
    transition: all 0.13s ease-in-out 0s;
  }
  &:hover {
    &::after,
    &::before {
      width: 12px;
      height: 1px;
      left: 14px;
      box-shadow: 0 19px #00c9bf, 0 10px #87c70f, 0 28px #ed1c0d, 0 13px #ed7300,
        0 25px #3d8cde, 0 16px #ffa3b5, 0 22px #ffbf0f;
    }
  }
}

.on .menu-toggle {
    &::before, &::after {
        width: 20px;
        box-shadow: 0 19px #fff, 0 19px #fff, 0 19px #fff, 0 19px #fff,
        0 19px #fff, 0 19px #fff, 0 19px #fff;
    }

    &::before {
        transform: rotate(-45deg) translate(-15px,-7px);
    }

    &::after {
        transform: rotate(45deg) translate(12px,-4px);
    }
}
</style>
