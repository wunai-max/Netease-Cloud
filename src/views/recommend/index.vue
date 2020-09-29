<template>
  <div class="recommend">
    <Header></Header>
    <div class="content">
      <h2>最热歌单</h2>
      <div class="main">
        <dl
          v-infinite-scroll="getMuics"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="20"
          v-for="item in listdata"
          :key="item.id"
          @click="deatil(item.id)"
        >
          <dt><img :src="item.coverImgUrl" alt="" /></dt>
          <dd>{{ item.name }}</dd>
        </dl>
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
      pagesize: 12,
      loading: false,
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.getMuics();
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
      this.loading = true;
      const start = (this.page - 1) * this.pagesize; // 从第几条开始
      const end = this.pagesize;
      this.$http
        .post(
          `/top/playlist?offset=${start}&limit=${end}&order=hot`
        )
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            const list = res.data.playlists;
            this.listdata = list;
            // this.listdata = this.listdata.concat(list);
            // if (this.listdata.length < this.pagesize) {
            //   //判断是不是已经没有数据了
            //   // this.showmore=true;
            // } else {
            //   // this.page = this.page+1; // 还有数据page+1
            //   // console.log(this.page);
            //   this.loading = false; //开关打开
            // }
          }
        });
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
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    dl {
      margin-top: 10px;
      width: 110px;
      img {
        width: 100%;
      }
      dd {
        width: 100%;
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
</style>