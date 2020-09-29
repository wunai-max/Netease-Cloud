<template>
  <div class="login">
    <div class="account-in">
      <h2>MONRYMUSIC</h2>
      <div class="acc-in">
        <span class="iconfont icon-yonghu"></span>
        <input type="text" placeholder="请输入手机号" v-model="phone" />
      </div>
      <div class="acc-in">
        <span class="iconfont icon-fankui"></span
        ><input type="password" placeholder="请输入密码" v-model="password" />
      </div>
      <mt-button type="primary" size="large" @click.native="login()"
        >登录</mt-button
      >
    </div>
  </div>
</template>

<script>
import { getToken ,setId,setToken} from "../../utils/auth"
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "login",
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  created() {
    // 实例被创建之后执行代码
    this.get()
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
     get(){
         if(getToken()){
            this.$router.push({
              path: "/recommend",
            });
         }
     }, 
    // 方法
    login() {
      this.$http
        .get(
          `/login/cellphone?phone=${this.phone}&password=${this.password}`
        )
        .then((res) => {
          // console.log(res);
          if (res.data.code == 200) {
            const id=res.data.account.id;
            setId(id)
            const Tid=res.data.token;
            console.log(Tid)
            setToken(Tid)
            this.$router.push({
              path: "/recommend",
            });
          }
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
.login {
  position: relative;
  height: 650px;
  background: #d44439;
  color: #fff;
}
.account-in {
  position: absolute;
  top: 220px;
  left: 90px;
  h2{
      text-align: center;
      margin-bottom:10px ;
    }
  .acc-in {
    margin-bottom: 10px;
    width: 200px;
    
    input {
      width: 170px;
      height: 25px;
      border: 1px solid #cecece;
    }
  }
  .denglu {
    height: 30px;
    margin-top: 20px;
    background: b;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
  }
}
</style>