<template>
   <transition mode="in-out">
    <div class="more">
      <mt-header fixed>
        <div slot="left" class="aa">
          <router-link to="/" >
          <mt-button icon="back"></mt-button>
          </router-link>
          <router-link tag="div" to="/more/like" class="min"
            >我的歌单</router-link
          >
          <router-link tag="div" to="/more/mine" class="mine">我的</router-link>
        </div>
      </mt-header>
     
      <router-view></router-view>
      
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "more",
  data() {
    return {};
  },
  created() {
    // 实例被创建之后执行代码
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    
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
.v-enter{
  opacity: 0;
  transform: translateX(180px);
}
//v-enter-active 【入场动画的时间段】
//v-leave-active 【离场动画的时间段】
.v-enter-active {
  transition: all 1s ease;
}
.active{
  color: #fff;
}
.mint-header {
  background: #d44439;
  color: #fff;
}
.aa {
  display: flex;
  .min {
    margin-left: 80px;
    height: 40px;
    line-height: 40px;
  }
  .mine {
    margin-left: 80px;
    height: 40px;
    line-height: 40px;
  }
}
</style>