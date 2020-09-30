<template>
  <div class="like">
    <div class="content">
      <h2>我的歌单</h2>
      <div class="main">
        <dl v-for="item in listdata" :key="item.id" @click="deatil(item.id)">
          <dt><img :src="item.coverImgUrl" alt="" /></dt>
          <dd>{{ item.name }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { getId } from "../../../utils/auth";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "like",
  data() {
    return {
      listdata: [],
    };
  },
  created() {
    // 实例被创建之后执行代码
    const id = getId();
    // console.log(id);
    this.getmine(id);
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getmine(id) {
      this.$http.post(`/user/playlist?uid=${id}`).then((res) => {
        // console.log(res);
        this.listdata = res.data.playlist;
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
  margin-top: 40px;
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