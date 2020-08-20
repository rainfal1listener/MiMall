<template>
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        小米8
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述</a><span>|</span>
        <a href="javascript:;">参数</a><span>|</span>
        <a href="javascript:;">用户评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'nav-bar',
  data(){
    return{
      isFixed:false
    }
  },
  mounted(){
    window.addEventListener('scroll',this.initHeight)
  },
  methods:{
    initHeight(){//判断当前页面滚动是否超出152
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop>152?true:false;
    }
  },
  destroyed(){
    window.addEventListener('scroll',this.initHeight,false)//true捕获 false 冒泡
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
  .nav-bar{
    z-index:10;
    height:70px;
    line-height: 70px;
    border-top:1px solid $colorH;
    background-color: $colorG;
    &.is_fixed{
      position:fixed;
      top:0;
      width:100%;
      box-shadow: 0 5px 5px $colorE;//x y 阴影 颜色
    }
    .container{
      @include flex();
      .pro-title{
        font-size: $fontH;
        color:$colorB;
        font-weight: bold;
      }
      .pro-param{
        font-size: $fontJ;
        span{
          margin:0 10px;
        }
        a{
          color:$colorC;
        }
      }
    }
  }
</style>