<template>
  <el-container class="default">
      <el-header height="80px;" class="header">
        Ying's Blog
        <div class="avatar" style="float: right;height: 100%">
          <el-dropdown>
             <img src="../assets/img/avatar.jpg" class="avatar">
             <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
             </el-dropdown-menu>
          </el-dropdown>
          
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="navbar">
          <el-menu :default-active="activeIndex"  class="el-menu-demo" @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <i class="iconfont icon-edit"></i>
                <span>控制面板</span>
              </template>
              <el-menu-item index="1-0">文章统计</el-menu-item>
              <el-menu-item index="1-1">文章发布</el-menu-item>
              <el-menu-item index="1-2">文章列表</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="iconfont icon-user"></i>
              <span>个人中心</span>
              </el-menu-item>
            <el-menu-item index="3">
              <i class="iconfont icon-user"></i>
              <span>登录页面test</span>
            </el-menu-item>
          </el-menu>
          <div class="line"></div>
        </el-aside>
        <el-main>
          <nuxt/>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (keyPath[1] === '1-0') {
        this.$router.push('statistics')
      }
      if (keyPath[1] === '1-1') {
        this.$router.push('write')
      }
      if (keyPath[1] === '1-2') {
        this.$router.push('articles')
      }
      if (keyPath[0] === '2') {
        this.$router.push('about')
      }
      if (keyPath[0] === '3') {
        this.$router.push('login')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.default, .el-menu {
  height: 100%;
}
.header {
  background-color: #fff;
  font-size: 25px;
  color: #409EFF;
  line-height: 80px;
  border-bottom: 1px solid #e6e6e6;
}
.collapse-open {
  transition: all 1s cubic-bezier(0.55, 0.09, 0.68, 0.53);
  text-align: right;
  padding-right: 20px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
}
.collapse {
  transition: all 1s  ease-out;
  text-align: left;
  padding-left: 23px;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
}
.el-submenu__title *, .el-menu-item{
  font-size: 18px;
}

.el-menu-item.is-active {
    border-right: 1px solid #409EFF;
}
.navbar {
  margin-top: 20px;
}

.avatar {
  height: 60px;
  width: 60px; 
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 50%;
}
</style>
