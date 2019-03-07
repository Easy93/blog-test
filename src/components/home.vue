<template>
  <div class="home">
    <div class="article-list-wrap">
      <div v-for="item in articleList" :key="item.id" @click="goDetail()">
        <div class="article-item">
          <img width="45" height="45" src="../assets/logo.png">
          <div class="article-descript">
            <div>
              <el-tag type="danger">vue</el-tag>标题
            </div>
            <div class="acticle-time">
              <div>
                <span>admin</span>
                <span>2019-03-03</span>
              </div>
              <div>
                <i class="el-icon-document"></i>
                <span>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination-wrap">
        <el-pagination background layout="prev, pager, next" :page-size="pageSize" :total="100"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      pageSize: 5,
      articleList: [
        {
          id: "000001"
        },
        {
          id: "000002"
        }
      ]
    };
  },
  methods:{
    goDetail(item){
      this.$router.push({
        name:'article-detail',
        params:item
      })
    }
  }
};
</script>

<style lang="scss">
.home {
  .article-list-wrap {
    background: #fff;
    .article-item {
      display: flex;
      align-items: center;
      padding: 15px;
      border-bottom: 1px solid #f2f2f2;
      .article-descript {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 10px;
        .el-tag {
          background: #ff5722;
          color: #fff;
          padding: 0 4px;
          font-size: 10px;
          height: 24px;
          line-height: 24px;
          margin-right: 6px;
        }
        .acticle-time {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #888;
          padding-top: 8px;
          span {
            padding: 0 4px;
          }
        }
      }
    }
    .pagination-wrap {
      padding: 30px 0;
    }
  }
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
</style>

