<template>
  <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose" v-if="dialogVisible">
    <Login :tabIndex="tabIndex" @handleClose="handleClose"/>
  </el-dialog>
</template>

<script>
import Login from "./login"
export default {
  data() {
    return {
      tabIndex:0,
      dialogVisible: false
    };
  },
  methods: {
    init(tabIndex) {
      this.dialogVisible = true;
      this.tabIndex = tabIndex;
    },
    handleClose(done) {
      this.dialogVisible = false;
    }
  },
  components:{
      Login
  }
};
</script>

<style lang="scss">
</style>

