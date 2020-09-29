<template>
  <div class="play">
    <mt-header fixed :title="$store.state.name">
      <div slot="left" @click="goback">
        <mt-button icon="back" >返回</mt-button>
      </div>
    </mt-header>
    <div class="musicDiv" :style="classobj">
      <img :src="$store.state.imgurl" alt="">
    </div>

    <audio
      :src='url'
      controls
      autoplay='autoplay'
      id="music"
      @play="onplayMusic()"
      @pause="onpauseMusic()"
    ></audio>
    <img :src="$store.state.imgurl" alt="">
    <div class="zhe"></div>
  </div>
</template>

<script>

export default {
  props: {
    // 父辈向子辈传参
  },
  name: "play",
  data() {
    return {
        classobj:{animationPlayState:'paused'},
        url:"",
    };
  },
  created() {
    // 实例被创建之后执行代码
    const id = this.$route.query.id;
    this.getge(id);
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getge(id) {
      this.$http.get(`/song/url?id=${id}`).then((res) => {
        // console.log(res);
        this.url=res.data.data[0].url;
      });
    },
    onpauseMusic() {
         this.classobj.animationPlayState="paused"
    },
    onplayMusic() {
        this.classobj.animationPlayState="running"
    },
    goback(){
      history.back()
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
.mint-header{
    background: transparent;
    color: #000;
    position: absolute;
    z-index: 5;
}
.play{
    height: 650px;
    background: #999;
    position: relative;
    .zhe{
      position: absolute;
      left: 0;
      top: 0;
      height: 650px;
      background: rgba($color: #fff, $alpha: .5);
      width: 100%;
      z-index: 1;
    }
    img{
      position: absolute;
      width: 100%;
      height: 100%;
    }

}
@keyframes musicDiv {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
.musicDiv {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 12px solid #eee;
  z-index: 5;
  img{
    width: 100%;
  }
  position: absolute;
  left: 100px;
  top: 200px;
  // background-image: url("../../assets/logo.png");
  background-size: cover;
  /* `cover` 填充整个背景 */
  animation: musicDiv 15s linear infinite;
//   animation-play-state:paused
  /* 定义默认动画是否执行 暂停 */
}
#music{
    width: 100%;
    position: absolute;
    bottom: 20px;
    z-index: 5;
}
</style>