<template>
  <div class='singer'>
       <Header></Header>
       <div class="cntent">
         <ul>
           <li v-for="item in singer" :key="item.id" @click="gosinger(item.id)">
             <div class="left">
               <img :src="item.img1v1Url" alt="">
             </div>
             <div class="right">
                <p>{{item.name}}</p>
             </div>
           </li>
         </ul>
         <router-view></router-view>
       </div>
  </div>
</template>

<script>
import Header from "../../components/Header";

export default {
  props: { // 父辈向子辈传参
  },
  name: 'singer',
  data () {
    return {
      singer:[]
    }
  },
  created () { // 实例被创建之后执行代码
  this.getsinger()
    },
  computed: { // 计算属性

    },
  components: { // 组件的引用
     Header,
    },
  methods: { // 方法
    getsinger(){
      this.$http
        .post(
          `/top/artists?offset=0&limit=30`
        ).then(res=>{
         this.singer=res.data.artists;
        })
    },
   gosinger(id){
     this.$router.push({
        path: "/singDeatil",
         query: {
            id: id,
          },
      });
   }
    },
  mounted () { // 页面进入时加载内容

    },
  watch: { // 监测变化

    }
}
</script>
<style scoped lang='scss'>
.cntent{
  margin-top:85px ;
  ul{
    li{
      display: flex;
      border-bottom: 1px solid #cecece;
      .left{
        width: 100px;
        
        padding:10px ;
        img{
          width: 60px;
        }
      }
      .right{
        p{
          height: 65px;
          font-size: 18px;
          line-height: 65px;
        }
      }
    }
  }
}
</style>