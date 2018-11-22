<template>
  <!-- <div>
    <nuxt/>
    <my-footer/>
  </div> -->
  <el-container>
      <el-header height="80px;" class="header">
        Blog
      </el-header>
      <el-container>
        <el-aside width="200px" class="navbar">
          <el-row :class="[isCollapse? 'collapse': 'collapse-open']">
            <i class="iconfont" @click="onCollapseClick">&#xe62f;</i>
          </el-row>
          <el-menu :default-active="activeIndex" :collapse="isCollapse" class="el-menu-demo" @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-edit"></i>
                <span>文章管理</span>
              </template>
              <el-menu-item index="1-1">文章发布</el-menu-item>
              <el-menu-item index="1-2">文章列表</el-menu-item>
              <el-menu-item index="1-3">草稿箱</el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-star-off"></i>
              <span>标签管理</span>
              </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span>个人中心</span>
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
      activeIndex2: '1',
      isCollapse: true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (keyPath[1] === '1-1') {
        this.$router.push('write')
      }
      if (keyPath[1] === '1-2') {
        this.$router.push('articles')
      }
      if (keyPath[1] === '1-3') {
        this.$router.push('tags')
      }
    },
    onCollapseClick() {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #409EFF;
  font-size: 25px;
  color: #fff;
  line-height: 80px;
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
.navbar {
  margin-top: 20px;
}
</style>
