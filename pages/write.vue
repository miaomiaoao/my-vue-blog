<template>
  <div class="write">
    <el-form>
      <el-form-item>
        <el-input v-model="title" placeholder="请输入文章标题"></el-input>
      </el-form-item>
      <el-form-item class="tag">
        <el-input v-model="tag" placeholder="标签:如javascript,并用逗号分隔开(ps:最多可添加三个标签)" @focus="toggleTagPanel" @blur="toggleTagPanel"></el-input>
         <transition name="el-zoom-in-top">
          <dl class="tag-panel" v-show="isTagPanelShow">
          <dt class="arrow"></dt>
          <dd>
            <el-tag size="small" closable>小型标签</el-tag>
          </dd>
          </dl>
        </transition>
      </el-form-item>
    </el-form>
    <no-ssr><mavon-editor v-model="value" :subfield="true"  :scrollStyle="true"  :preview="true"> </mavon-editor></no-ssr>
    <el-row>
        <el-button type="primary" class="submit">发布文章</el-button>
    </el-row>
  </div>
</template>
<script>
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
  export default {
    data() {
      return {
        value: '',
        title: '',
        tag: '',
        isTagPanelShow: false
      }
    },
    methods: {
      toggleTagPanel() {
        this.isTagPanelShow = !this.isTagPanelShow
      }
    },
    component: {
      CollapseTransition
    }
    // async asyncData() {
    //   let {status, data: {list}} = await axios.get('http://localhost:5000/city/list')
    //   if (status === 200) {
    //     return {
    //       list
    //     }
    //   }
    // }
  }
</script>
<style lang="scss" scoped>
.write {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.el-input__inner {
  margin-bottom: 15px;
}
.tag {
  position: relative;
}
.tag-panel {
  width: 100%;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  background: white;
  margin: 0;
  padding: 0;
  margin-top: 8px;
  box-sizing: border-box;
  position: absolute;
  z-index: 1501;
}

.arrow {
  margin: 0;
  padding:0;
  position: absolute;
  z-index: 1501;
  border: 6px solid transparent;
  border-bottom-color: #dcdfe6;
  top: -12px;
  left: 20px;
  &::after {
    content: '';
    top: -4px;
    border: 6px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    margin-left: -6px;
    z-index: 1502;
  }
}

.markdown-body {
    flex: 1
}

.submit {
  margin-top: 20px;
  float:right;
}
</style>
