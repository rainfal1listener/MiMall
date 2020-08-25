# vue全家桶仿小米商城
#### 前言：本来打算学完vue自己做一个个人博客，但是担心自己学的不够扎实，所以还是找了个比较涉及知识面比较广的商城系统来做，非常喜欢小米商城的UI简洁，所以选择仿小米商城。



***




项目预览:http://mi.futurefe.com/ 

项目地址:https://musing-varahamihira-bd268a.netlify.app/（没钱买服务器暂时放在netlify上，速度比较慢,建议打开上面那个别人做的，除了消息提示基本相同）



#### 项目涉及到的知识(待整理)











##css3 animation transition transform 

##mock

##模块化 

##跨域 代理

##cookies  session storage

##过滤器filters

##swiper组件

## node_module bug 

 Error: EBUSY: resource busy or locked, symlink 
可能是因为缓存问题，用node cache clear --force清缓存解决

##vue-lazyload

##video

##float clearfix 几种清楚浮动的方式：

1.后面加一个清除浮动；
2.父元素伪类：建议用scss封装
`.clearfix::before,.clearfix::after{`
  `content:'';`
  `display:table;`
`}`
`.clearfix:after{`
  `clear:both;`
`}`

##单选按钮组实现



<div class="phone fl" :class="{'checked':version==1}" @click="version=1">6GB+64GB 全网通</div>
            <div class="phone fr" :class="{'checked':version==2}" @click="version=2">4GB+64GB 移动4G</div>

![image-20200820101432897](C:\Users\85245\AppData\Roaming\Typora\typora-user-images\image-20200820101432897.png)

![image-20200820101512154](C:\Users\85245\AppData\Roaming\Typora\typora-user-images\image-20200820101512154.png)

## vue生命周期

## filter

## vue列表渲染不渲染的问题



keep alive ；this.$set

## every