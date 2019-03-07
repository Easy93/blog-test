<template>
  <div class="main-wrap">
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
    </div>

    <LoginAndRegister ref="model"/>

    <div v-if="$route.name=='home'" class="publish-article-wrap">
      <el-button type="primary">发表文章</el-button>
    </div>
    <div class="content">
      <el-row :gutter="30">
        <el-col :span="18" class="article-list-wrap">
          <router-view/>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>公告</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">{{'列表内容 ' + o }}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import LoginAndRegister from "./login-and-register";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push({
        name:'home'
      })
    },
    login() {
      this.$refs.model.init(0);
    },
    register() {
      this.$refs.model.init(1);
    }
  },
  components: {
    LoginAndRegister
  }
};
</script>

<style lang="scss">
.main-wrap {
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
  .publish-article-wrap {
    padding: 4px 200px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
  }
  .content {
    padding: 20px 200px;
  }
}
</style>

