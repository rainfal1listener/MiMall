<template>
  <div>
    <div class="ali-pay">
      <loading v-if="loading"></loading>
      <div class="form" v-html="content"></div>
    </div>
  </div>
  
</template>

<script>

import loading from './../components/Loading'
export default {
  name:'alipay',
  components:{
    loading,
  },
  data(){
    return{
      orderId:this.$route.query.orderNo,
      content:'',
      loading:true,
    }
  },
  mounted(){
    this.paySubmit()
  },
  methods:{
    paySubmit(){
      this.axios.post('/pay',{
        orderId:this.orderId,
        orderName:'Vue高仿小米商城',//扫码支付时订单名称
        amount:0.01,//单位 元
        payType:1//1.支付宝 2.微信
      }).then((res)=>{
        this.content = res.content;
        setTimeout(()=>{
          document.forms[0].submit();
        },100)
      })
    }
  }
}
</script>

<style>

</style>