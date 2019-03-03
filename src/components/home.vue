<template>
  <div class="home">
    <div class="publish-article-wrap">
      <el-button type="primary">发表文章</el-button>
    </div>
    <div class="content">
      <el-row :gutter="20">
        <el-col span="18" class="article-list-wrap">
            <div v-for="item in articleList" :key="item.id">
                <div class="article-item">
                    <img width="45" height="45" src="../assets/logo.png"/>
                    <div class="article-descript">
                        <div><el-tag type="danger">标签五</el-tag>标题</div>
                        <div class="acticle-time">
                            <div><span>admin</span><span>2019-03-03</span></div>
                            <div><i class="el-icon-document"></i>0</div>
                        </div>
                    </div>
                </div>
            </div>
        </el-col>
        <el-col span="6">公告</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
        articleList:[{
            id:'000001',
        },{
            id:'000002',
        }]
    };
  }
};
</script>

<style lang="scss">
.home {
    background: #f2f2f2;
  .publish-article-wrap {
    padding: 4px 200px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
  }
  .content {
    padding: 20px 200px;
    .article-list-wrap{
        .article-item{
            display: flex;
            align-items: center;
            padding: 15px;
            border-bottom: 1px solid #f2f2f2;
            .article-descript{
                display: flex;
                flex: 1;
                flex-direction: column;
                align-items: flex-start;
                padding-left: 10px;
            .acticle-time{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #888;
                padding-top: 8px;
            }
            }
        }
        background: #fff;
    }
  }
}
</style>

