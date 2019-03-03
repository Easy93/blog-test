<template>
  <div>
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
        <el-button>登录</el-button>
        <el-button>注册</el-button>
      </div>
    </el-menu>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss">
.el-menu {
    margin: 0 200px;
  .right-menu {
    display: flex;
    justify-content: flex-end;
    .el-button {
      border: none;
      border-radius: 0;
      height: 60px;
    }
  }
}
</style>

