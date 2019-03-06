<template>
  <div class="menu-wrap">
    <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">1</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">2</el-menu-item>
      <el-menu-item index="4">3</el-menu-item>
      <el-menu-item index="5">4</el-menu-item>
      <el-menu-item index="6">5</el-menu-item>
      <div class="right-menu">
        <el-button @click="login">登录</el-button>
        <el-button @click="register">注册</el-button>
      </div>
    </el-menu>
    <LoginAndRegister ref="model"/>
    <router-view/>
  </div>
</template>

<script>
import LoginAndRegister from './login-and-register'
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    login(){
      this.$refs.model.init(0);
    },
    register(){
      this.$refs.model.init(1);
    }
  },
  components:{
    LoginAndRegister
  }
};
</script>

<style lang="scss">
.menu-wrap {
  background: #fff;
  .el-menu {
    margin: 0 200px;
    .right-menu {
      float: right;
      .el-button {
        border: none;
        border-radius: 0;
        height: 60px;
      }
    }
  }
}
</style>

