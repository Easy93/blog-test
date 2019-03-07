<template>
  <div>
    <div class="article-detail-wrap">
      <h2>标题</h2>
      <div class="sub-title">
        <span>作者</span>
        <span>发表于：时间</span>
        <span>分类：类别</span>
      </div>
      <div class="article-detail">内容</div>
    </div>

    <div class="comments-wrap">
      <div class="comment-title">评论</div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 10, maxRows: 15}"
        placeholder="请输入内容"
        v-model="textarea"
      ></el-input>
      <div class="submit-btn-wrap">
        <el-button type="primary">立即发表</el-button>
      </div>
      <div class="comment-list">
        <div class="comment-item-wrap">
          <div class="comment-item-info-wrap">
            <div>
              <img width="50" height="50" src="../assets/logo.png">
            </div>
            <div class="comment-item-info">
              <div class="username">用户名</div>
              <div class="comment-item-time">2018-03</div>
            </div>
          </div>
          <div class="comment-item-detail">评论内容</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetail",
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
      ],
      textarea: ""
    };
  }
};
</script>

<style lang="scss">
.article-detail-wrap {
  padding: 25px;
  background: #fff;
  .sub-title {
    line-height: 40px;
    & > span {
      padding: 0 10px;
    }
  }
  .article-detail {
    padding: 25px;
    overflow: auto;
    max-height: calc(100vh-300px);
  }
}
.comments-wrap {
  margin-top: 20px;
  padding: 25px;
  background: #fff;
  .comment-title {
    line-height: 60px;
    font-size: 20px;
  }
  .submit-btn-wrap {
    padding: 16px 0;
    display: flex;
    justify-content: flex-start;
  }
  .comment-list {
    .comment-item-wrap {
      border-top: 1px solid #f2f2f2;
      padding: 10px 0;
      .comment-item-info-wrap{
        display: flex;
        padding-bottom: 10px;
        .comment-item-info{
          padding-left: 10px;
          .username{
            color: #01aaed
          }
          .comment-item-time{
            color: #bbb;
            font-size: 14px;
          }
        }
      }
      .comment-item-detail{
        text-align: left;
      }
    }
  }
}
</style>

