import Vue from "vue";
import Vuex from "vuex";
import Cookies from "js-cookie";
import { stat } from "fs";
// import {clearLoginInfo} from '@/libs/tool.js'
// import {info} from '../api/user'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: Cookies.get("username"),
    hasLogin: Cookies.get("username") ? true : false,
    avatar: "",
    role: ""
  },
  mutations: {
    setUsername(state, val) {
      state.username = val;
      Cookies.set("username", val);
    },
    setHasLogin(state, val) {
      state.hasLogin = val;
    },
    setLogout(state) {
      Cookies.remove("username");
      state.username = "";
      state.hasLogin = false;
    }
  },
  actions: {}
});

export default store;
