<template>
  <div class="recommend">
    <Header></Header>
    <div class="content">
      <h2>最热歌单</h2>
      <div class="main">
        <ul
          v-infinite-scroll="getMuics"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <li v-for="item in listdata" :key="item.id" @click="deatil(item.id)">
            <div class="dt"><img :src="item.coverImgUrl" alt="" /></div>
            <div class="dd">{{ item.name }}</div>
          </li>
        </ul>
        <mt-spinner
          type="fading-circle"
          class="loading"
          v-if="showloading"
          color="#26a2ff"
        >
        </mt-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import { getToken, getId } from "../../utils/auth";

export default {
  props: {
    // 父辈向子辈传参
  },
  name: "recommend",
  data() {
    return {
      listdata: [],
      page: 1,
      pagesize: 18,
      loading: false,
      showloading: false,
    };
  },
  created() {
    // 实例被创建之后执行代码
    //  this.getMuics();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
    Header,
  },
  methods: {
    // 方法

    //调取推荐热歌单
    getMuics() {
      console.log("ss");
      this.loading = true;
      this.showloading = true;
      const start = (this.page - 1) * this.pagesize; // 从第几条开始
      const end = this.pagesize;
      // setTimeout(() => {
        this.$http
          .post(`/top/playlist?offset=${start}&limit=${end}&order=hot`)
          .then((res) => {
            this.showloading = false;
            // console.log(res);
            const list = res.data.playlists;
            console.log(this.listdata);
            this.listdata = this.listdata.concat(list);
            //
            // if (this.listdata.length < this.pagesize) {
            //   //判断是不是已经没有数据了
            //   // this.showmore=true;
            // } else {
            //   this.page = this.page+1; // 还有数据page+1
            //   // console.log(this.page);
            //   //开关打开
            // }
          });
      // }, 1000);
      this.page = this.page + 1;
      this.loading = false;
    },
    deatil(id) {
      this.$router.push({
        path: "/deatil",
        query: {
          id: id,
        },
      });
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
.content {
  margin-top: 85px;
  h2 {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    font-weight: 900;
    margin-left: 10px;
  }
  .main {
    ul {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      overflow: hidden;
      li {
        margin-top: 10px;
        width: 110px;
        .dt {
          img {
            width: 100%;
          }
        }
        .dd {
          width: 100%;
          text-align: center;
          font-size: 12px;
        }
      }
    }
    .loading {
      display: block;
      padding-left: 160px;
      text-align: center;
    }
  }
}
</style>