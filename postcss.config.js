module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视图的宽度
      viewportHeight:667,//视图的高度
      unitPrecision:5,//指定‘px’转换的小数个数
      viewportUnit:'vw',//转换视图单位
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],//不需要转换的类
      minPixelValue:1,//小于1px或等于1px不转换
      mediaQuery:false,//允许在多媒体查询中转换
    },
  }
}
