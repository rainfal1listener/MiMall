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
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a','user');
    // this.axios.get('/user/login').then((res)=>{
      
    //   this.res = res;
    // })
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import '/assets/scss/base.scss';
@import './assets/scss/config.scss';
@import '/assets/scss/botton.scss';
</style>
