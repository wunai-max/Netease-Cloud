<template>
  <div class="singdeatil">
    <mt-header fixed title="歌手">
      <div slot="left" @click="getback">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <div class="content">
      <img :src="singimg" alt="" />
      <p>{{ name }}</p>
    </div>
    <div class="musicList">
      <h2>播放全部</h2>
      <ul>
        <li v-for="item in list" :key="item.id" @click="music(item.id);choose({name:item.name,imgurl:item.al.picUrl})">
          <div class="xuhao">
            <img :src="item.al.picUrl" alt="" />
          </div>
          <div class="name">
            <p>{{ item.name }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "singdeatil",
  data() {
    return {
      singimg: "",
      name: "",
      gelist: "",
      list: [],
    };
  },
  created() {
    // 实例被创建之后执行代码
    const id = this.$route.query.id;
    this.singerde(id);
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    singerde(id) {
     this.$http.post(`/artists?id=${id}`).then((res) => {
        //  console.log(res);
        this.singimg = res.data.artist.img1v1Url;
        this.name = res.data.artist.name;
        this.list = res.data.hotSongs;
      });
    },
    getback() {
      history.back();
    },
    music(id) {
      this.$router.push({
        path: "/play",
        query: {
          id: id,
        },
      });
    },
     ...mapMutations(['choose'])
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
  background: transparent;
  color: #000;
}
.content {
  position: relative;
  background: chartreuse;
  p {
    position: absolute;
    left: 10px;
    bottom: 30px;
    font-size: 20px;
  }
  img {
    width: 100%;
  }
}
.musicList {
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
</style>