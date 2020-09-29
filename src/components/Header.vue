<template>
  <div class="Header">
    <mt-header title="VUEMUSIC" fixed>
      <router-link to="/" slot="left">
        <mt-button icon="more"></mt-button>
      </router-link>
      <mt-button icon="search" slot="right"></mt-button>    
    </mt-header>
       <div id="content">
      <div class="movie_menu">
         <router-link tag="div" to="/recommend" class="city_name"> <span>推荐</span> </router-link>
          <router-link tag="div" to="/rank" class="city_name"> <span> 排行</span> </router-link>
          <router-link tag="div" to="/singer" class="city_name"> <span>歌手</span> </router-link>
      </div>
       <!-- 二级路由  三级路由继续嵌套写
      <router-view></router-view> -->
       
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "Header",
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
 .mint-header{
    background:#d44439;
}
#content{
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
}
#content .movie_menu {
  background:#d44439;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  font-size: 16px;
}
.movie_menu .city_name {
  line-height: 45px;
  width: 80px;
  text-align: center;
  color: #eee;
}
.movie_menu .city_name.active {
  color: #fff;
  font-weight: 900;
  span{
    border-bottom: 2px#fff solid;
  }
  
}

</style>