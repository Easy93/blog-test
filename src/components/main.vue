<template>
  <div class="main-wrap">
    <div class="menu-wrap">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">1</el-menu-item>
        <el-menu-item index="3">2</el-menu-item>
        <el-menu-item index="4">3</el-menu-item>
        <el-menu-item index="5">4</el-menu-item>
        <el-menu-item index="6">5</el-menu-item>
        <div v-if="hasLogin" class="right-menu">
          <el-button @click="goPersonalCenter">个人中心</el-button>
          <el-submenu index="7">
            <template slot="title">{{username}}</template>
            <el-menu-item index="logout">退出登录</el-menu-item>
          </el-submenu>
        </div>
        <div v-else class="right-menu">
          <el-button @click="login">登录{{username}}</el-button>
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
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  computed: {
    ...mapState({
      username: state => state.username,
      hasLogin: state => state.hasLogin,
      avatar: state => state.avatar
    })
  },
  methods: {
    ...mapMutations({
      setLogout:'setLogout'
    }),
    handleSelect(key, keyPath) {
      if(key=='logout'){
        this.setLogout();
      }else{
        this.$router.push({
          name: "home"
        });
      }
    },
    login() {
      this.$refs.model.init(0);
    },
    register() {
      this.$refs.model.init(1);
    },
    goPersonalCenter() {
      console.log("跳转个人中心");
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
        display: flex;
        align-items: center;
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
    .box-card {
      text-align: left;
      .text {
        font-size: 14px;
      }
      .item {
        margin-bottom: 18px;
      }
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both;
      }
    }
  }
}
</style>

