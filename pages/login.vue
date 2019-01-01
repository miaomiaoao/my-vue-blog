<template>
  <div class="login">
    <el-card shadow="always">
      <div slot="header" class="clearfix">
        <span>博客管理系统</span>
      </div>
      <el-row>
        <el-form :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input :type="password" v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
      </el-row>
      <el-row>
         <el-button type="primary">登陆</el-button>
      </el-row>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-card {
  width: 600px;
  margin: 0 auto;
  text-align:center;
  font-size: 20px;
  color: #409EFF;
  font-weight: bold;
}
.login {
  background: url('../assets/img/login.png');
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-button {
  width: 400px;
}
</style>
