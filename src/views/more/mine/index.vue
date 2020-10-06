<template>
  <div class="mine">
    <div class="content">
      <div class="back">
        <img :src="list.backgroundUrl" alt="" />
        <div class="head">
          <img :src="list.avatarUrl" alt="" />
        </div>
        <div class="describe">
          <h1>{{ list.nickname }}</h1>
          <p>
            关注<span>{{ list.follows }}</span
            >&nbsp;&nbsp;|&nbsp;&nbsp;粉丝<span>{{ list.followeds }}</span>
          </p>
        </div>
      </div>
      <div class="down">
        <h2>MV排行</h2>
        <ul>
          <li v-for="item in mv" :key="item.id" @click="godetil(item.id)">
            <div class="xuhao">
              <img :src="item.cover" alt="" />
            </div>
            <div class="name">
              <p>{{item.name}}</p>
            </div>
          </li>
        </ul>
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
  name: "mine",
  data() {
    return {
      list: [],
      mv:[]
    };
  },
  created() {
    // 实例被创建之后执行代码
    const id = getId();
    console.log(id);
    this.getuser(id);
    this.getSong();
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getuser(id) {
      this.$http.get(`/user/detail?uid=${id}`).then((res) => {
        // console.log(res)
        this.list = res.data.profile;
      });
    },
    getSong() {
      this.$http.get(`/top/mv?limit=20`).then((res) => {
        console.log(res);
        this.mv=res.data.data;
      });
    },
    godetil(id){
       this.$router.push({
        path: "/mv",
        query: {
          id: id,
        },
      });
    }
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
  height: 300px;
  .back {
    position: relative;
    height: 300px;
    // background: chartreuse;
    img {
      width: 100%;
      height: 100%;
    }
    .head {
      position: absolute;
      left: 30px;
      bottom: 100px;
      width: 80px;
      height: 80px;
      // background: coral;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .describe {
      position: absolute;
      left: 30px;
      bottom: 40px;
      color: #fff;
      h1 {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
  .down {
    h2 {
      height: 40px;
      border-bottom: 1px solid #cecece;
      line-height: 40px;
      padding-left: 10px;
    }
    ul {
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
  }
}
</style>