<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      // res:{}
    };
  },
  mounted(){
    this.getUser();
    this.getCartCount();
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a','user');
    // this.axios.get('/user/login').then((res)=>{
      
    //   this.res = res;
    // })
  },
  methods:{
    getUser(){
      this.axios.get('/user').then(()=>{
        //to-do 保存到vuex里面
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then(()=>{
        //to-do 保存到vuex里面
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import '/assets/scss/base.scss';
@import './assets/scss/config.scss';
@import '/assets/scss/botton.scss';
</style>
