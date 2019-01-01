<template class="template">
  <section class="container">
    <el-card width="600px" height="800px" shadow="always">
      <div slot="header">
        <span>个人资料</span>
      </div>
      <el-row style="text-align: center">
        <div class="avatar">
          <img src="../assets/img/avatar.jpg"/>
          <div class="profile-avatar-uploder">
            <span>上传头像</span>
          </div>
        </div>
      </el-row>
      <el-row :gutter="24">
        <el-col :span="6">用户名</el-col>
        <el-col :span="10">徐莹莹</el-col>
        <el-col :span="8">  
          <el-button style="padding: 3px 0" type="text"><i class="el-icon-edit"></i>修改</el-button>
        </el-col>
      </el-row>
       <el-row :gutter="24">
        <el-col :span="6">邮箱</el-col>
        <el-col :span="10">yingx_xu@163.com</el-col>
        <el-col :span="8">  
          <el-button style="padding: 3px 0" type="text"><i class="el-icon-edit"></i>修改</el-button>
        </el-col>
      </el-row>
       <el-row :gutter="24">
        <el-col :span="6">公司</el-col>
        <el-col :span="10">来肯</el-col>
        <el-col :span="8">  
          <el-button style="padding: 3px 0" type="text"><i class="el-icon-edit"></i>修改</el-button>
        </el-col>
      </el-row>
       <el-row :gutter="24">
        <el-col :span="6">职位</el-col>
        <el-col :span="10">前端菜鸟</el-col>
        <el-col :span="8">  
          <el-button style="padding: 3px 0" type="text"><i class="el-icon-edit"></i>修改</el-button>
        </el-col>
      </el-row>
       <el-row :gutter="24">
        <el-col :span="6">个人介绍</el-col>
        <el-col :span="10">我是一个粉刷匠粉刷本领强</el-col>
        <el-col :span="8">  
          <el-button style="padding: 3px 0" type="text"><i class="el-icon-edit"></i>修改</el-button>
        </el-col>
      </el-row>
    </el-card>
  </section>
</template>
<script>
export default {
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head() {
    return {
      title: `About Page (${this.name}-side)`
    }
  }
}
</script>
<style lang="scss" scoped>
.el-card {
  margin: 0 auto;
  padding: 30px 20px;
  width: 800px;
  margin-top: 20px;
} 
.el-row {
  margin-bottom: 20px;
}
.avatar {
  height: 120px;
  width: 120px; 
  display: inline-block;
  cursor: pointer;
  margin: 15px auto;
  overflow: hidden;
  position: relative;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
  }

  .profile-avatar-uploder {
    display: none;  
    position: absolute;
    bottom: 0;
    width: 120px;
    text-align: center;
    background: rgba(0,0,0,0.75);
    height: 30px;
    color: #fff;
    line-height: 30px;
    border-radius: 2px;
  }

  &:hover .profile-avatar-uploder {
    display: block;
  }
}
.el-button {
  float: right;
}
</style>
