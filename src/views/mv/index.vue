<template>
  <div class="mv">
    <mt-header fixed :title="mvdesc.name">
      <div slot="left" @click="goback">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <div class="content">
      <video controls width="250" autoplay :src="url">  
      </video>
      <div class="desc">
        <h2>歌手</h2>
        <ul>
          <li v-for="item in mvdesc.artists" :key="item.id">
            <div class="xuhao">
              <img :src="item.img1v1Url" alt="" />
            </div>
            <div class="name">
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
        <h4>{{mvdesc.name}}</h4>
        <p>{{mvdesc.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "mv",
  data() {
    return {
        url:"",
        mvdesc:[]
    };
  },
  created() {
    // 实例被创建之后执行代码
    const id = this.$route.query.id;
    this.getmv(id);
    this.geturl(id);
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getmv(id) {
      this.$http.post(`/mv/detail?mvid=${id}`).then((res) => {
        
        this.mvdesc=res.data.data
      });
    },
    geturl(id) {
      this.$http.post(`/mv/url?id=${id}`).then((res) => {
       console.log(res);   
       this.url=res.data.data.url
      });
    },
    goback() {
      history.back();
    },
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  },
};
</script>
<style scoped lang='scss'>
.mint-header {
  background: #d44439;
}
.content {
  margin-top: 40px;
  video {
    width: 100%;
  }
  .desc {
    h2 {
      height: 40px;
      border-bottom: 1px solid #cecece;
      line-height: 40px;
      padding-left: 10px;
    }
    ul {
        margin-bottom: 30px;
      li {
        display: flex;
        border-bottom: 1px solid #cecece;
        height: 50px;
        
        .xuhao {
          height: 50px;
          width: 50px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          p {
            margin-left: 20px;
            font-size: 16px;
            height: 50px;
            line-height: 50px;
            color: #333;
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    h4{
       font-size:16px ;
       font-weight: 900;
       text-align: center;
       margin-bottom:20px ;
    }
    p{ 
        font-size:16px ;
        text-indent: 2em;
    }
  }
}
</style>