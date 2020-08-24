module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',//vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 
  // indexPath:'index.html',//指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // filenameHashing:true,//默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存。然而，这也要求 index 的 HTML 是被 Vue CLI 自动生成的。如果你无法使用 Vue CLI 生成的 index HTML，你可以通过将这个选项设为 false 来关闭文件名哈希。
  // lintOnSave:true,//eslint开关
  productionSourceMap:false,//如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  chainWebpack:(config)=>{//删除预加载prefetch
    config.plugins.delete('prefetch');
  }
}