<template>
  <el-dialog :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <Login :tabIndex="tabIndex" />
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
      this.tabIndex = tabIndex;
      this.dialogVisible = true;
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

