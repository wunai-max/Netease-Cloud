<template>
  <div class="deatil">
    <mt-header fixed title="歌单">
      <div slot="left" @click="getback">
        <mt-button icon="back">返回</mt-button>
      </div>
    </mt-header>
    <div class="tu">
      <h3>{{title}}</h3>
      <img :src="imgurl" alt="">  
    </div>
    <div class="musicList">
        <h2>播放全部</h2>
        <ul>
            <li v-for="(item ,index) in musicList" :key="item.id" @click="geturl(item.id);choose({name:item.name,imgurl:item.al.picUrl})">
                <div class="xuhao">{{index+1}}</div>
                <div class="name">
                    <p>{{item.name}}</p>
                    <span>{{item.ar[0].name}}</span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
import {getDid, setDid} from  "../../utils/auth"
export default { 
  props: {
    // 父辈向子辈传参
  },
  name: "deatil",
  data() {
    return {
        imgurl:"",
        title:"",
        musicList:"",
    };
  },
  created() {
    // 实例被创建之后执行代码
   const id=this.$route.query.id
    this.did=id
    this.getlist(id)
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
    getlist(id){
        this.$http7
        .post(
          `/playlist/detail?id=${id}`
        ).then(res=>{
          //  console.log(res)
            if(res.data.code==200){
                this.imgurl=res.data.playlist.coverImgUrl;
                this.title=res.data.playlist.name;
                this.musicList=res.data.playlist.tracks;
            }
        })
    },
    geturl(id){
       this.$router.push({
        path: "/play",
         query: {
            id: id,
          },
      });
    },
     getback(){
      history.back()
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
.mint-header{
    background: transparent;
    color: #000;
}
.tu{

    position: relative;
    height: 250px;
    background: cadetblue;
    img{
        width: 100%;
        height:100%;
    }
    h3{
        position: absolute;
        bottom: 20px;
        left: 10px;
    }
}
.musicList{
    h2{
        height: 40px;
        border-bottom:1px solid #cecece ;
        line-height: 40px;
        padding-left:10px ;
    }
    ul{
        li{
            display: flex;
            border-bottom:1px solid #cecece ;
            height: 50px;
            .xuhao{
                height: 50px;
                width: 50px;
                font-size:18px ;
                text-align: center;
                line-height: 50px;
                 color: #333;
            }
            .name{
                p{
                  font-size:16px ;  
                  height: 30px;
                  line-height: 30px;
                  color: #333;
                  width: 200px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                }
                span{
                     color: #333;
                }
            }
        }
    }
}
</style>