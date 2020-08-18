<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>{{title}}</span>
        <a href="javasript:;" class="icon-close"  @click="$emit('close')"></a>
      </div>
      <div class="modal-body">
        商品已添加到您的购物车！
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <a href="javasript:;" class="btn" v-if="btnType==1"  @click="$emit('submit')">{{sureText}}</a>
      <a href="javasript:;" class="btn-defaut" v-if="btnType==2" >{{cancelText}}</a>
        <!-- <div class="btn-group" v-if="btnType==3">
          <a href="javasript:;" class="btn" :click="$emit('summit')">确定</a>
          <a href="javasript:;" class="btn-defaut" >取消</a>
        </div>     -->
      </div>
    </div>
  </div>
  </transition>

</template>

<script>
export default {
  name:'modal',
  props:{
    //弹框大小：small,middle,large
    modalType:{
      type:String,
      default:'form'
    },
    //弹框标题
    title:String,
    //按钮类型 1：确定 2：取消 3：确定取消
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    cancelText:{
      type:String,
      default:'取消'
    },
    showModal:Boolean,
  }
}
</script>

<style lang="scss">
@import '/../assets/scss/mixin.scss';
@import '/../assets/scss/config.scss';
@import '/../assets/scss/modal.scss';
</style>