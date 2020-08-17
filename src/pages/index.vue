<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+item.id"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
      </div>
      <div class="banner">
      </div>
    </div>
    <div class="product-box">
    </div>
    <service-bar></service-bar>
  </div>
</template>
<script>
  import ServiceBar from './../components/ServiceBar'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default{
    name:'index',
    components:{
      swiper,
      swiperSlide,
      ServiceBar,
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,//自动播放
          loop:true,//循环
          effect:'cube',//动画效果
          cubeEffect: {
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {//分页器
            el: '.swiper-pagination',
            clickable:true//swiper下方点击跳页
          },
          navigation: {//左右导航按钮
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-1.jpg'
          }
        ],
        menuList:[
          [
            {
              id:30,
              img:'/imgs/item-box-1.png',
              name:'小米CC9',
            },{
              id:31,
              img:'/imgs/item-box-2.png',
              name:'小米8青春版',
            },{
              id:32,
              img:'/imgs/item-box-3.jpg',
              name:'Redmi K20 Pro',
            },{
              id:33,
              img:'/imgs/item-box-4.jpg',
              name:'移动4G专区',
            }
          ],
          [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
        ],
        adsList:[
          {
            id:33,
            img:'/imgs/ads/ads-1.png'
          },{
            id:48,
            img:'/imgs/ads/ads-2.jpg'
          },{
            id:45,
            img:'/imgs/ads/ads-3.png'
          },{
            id:47,
            img:'/imgs/ads/ads-4.jpg'
          }
        ],
        phoneList:[],
        showModal:false
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
        this.axios.get('/products',{
          params:{
            categoryId:100012,
            pageSize:14
          }
        }).then((res)=>{
          res.list = res.list.slice(6,14);
          this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
        })
      },
      addCart(id){
        this.axios.post('/carts',{
          productId:id,
          selected: true
        }).then((res)=>{
          this.showModal = true;
          this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
        });
      },
      goToCart(){
        this.$router.push('/cart');
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index{
    .swiper-box{
      .swiper-container{
        height: 451px;
        img{
          width:100%;
          height: 100%;
        }
      }
    }
  }
</style>