<template>
  <div class="rank">
    <Header></Header>
    <div class="content">
      <ul>
        <li v-for="item in list" :key="item.id" @click="detil(item.id)">
          <div class="left">
            <img :src="item.coverImgUrl" alt="" />
          </div>
          <div class="right">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  props: {
    // 父辈向子辈传参
  },
  name: "rank",
  data() {
    return {
      list: [],
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.getRank();
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
    getRank() {
      this.$http.post(`/toplist`).then((res) => {
        // console.log(res);
        this.list = res.data.list;
      });
    },
    detil(id) {
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
  ul {
    li {
      display: flex;
      border: 1px solid #cecece;
      padding: 5px;
      .left {
        width: 120px;
        img {
          width: 100%;
        }
      }
      .right {
        width: 200px;
        margin-left: 10px;
        h3 {
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 900;
          color: #333;
        }
        p {
          text-indent: 1em;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }
  }
}
</style>