# supermall-a

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
## homeFeatureView 封装
## tabBarControl封装
   1. 独立组件的封装
   2. props->titles
   3. div>根据titles v-for遍历div-span{{titles}}
   4. css
   5. 选中tab 颜色改变 currentIndex
## 首页商品数据的请求
   1. 设计数据结构，用于保存数据 pop:page/list new:page/list sell:page/list
   2. 发送请求数据 
      1. 在home.js中，封装getHomeGoods（type，page）方法
      2. 在home methods中 getHomeGoods（type）获取数据
      3. 调用getHomeGoods('pop') getHomeGoods('new') getHomeGoods('sell') page：动态的获取对应的page
      4. 获取到的数据：res
         1. this.goods[type].push(...res.data.list)
         2. this.goods[type].page+=1
## 对商品数据进行展示
   # 封装goodsList组件 props:goods->list[30]
   # 封装goodsListItem组件 props:goodsItem->遍历
## 对滚动进行重构
   # const bscroll=new BScroll('$refs.name',{pageType:0/1/2/3(只要是滚动)}) bscroll.on('scroll',(positon)=>{})
   # 上拉加载
     1. pullUpLoad:true
     2. bscroll.on('pullingUp',()=>{})
     3. click:false
   # 对better-scroll封装
     1. home将probeType设置为3
     2. $emit发送事件
## 回到顶部backtop
 # 6.1 对backtop组件的封装
 # 6.2 如何监听组件的点击
   1. 监听back-top点击 须加@click.native
   2. 回到顶部 scroll.scrollTo(0,0,500)
 # 6.3 backtop 组件的显示和隐藏
   isBackTopShow：fasle
   监听滚动位置 position.y>1000->isBackTopShow:true
   isBackTopShow=position.y>1000
## 解决首页better-scroll可滚动区域的问题
   # better-scroll在决定有多少区域是可滚动时，是根据scrollHeight舒属性决定，
   1. scrollHeight属性是根据better-scroll的content中的子组件的高度决定
   2. 但是我们的首页中，刚开始在计算scrollHeight属性时，是没有将图片计算在内
   3. 所以，计算出来的是错误的
   4. 后来图片加载有新高度，scrollHeight没有更新，所以滚动出现问题
   5. 监听每一张图片加载完成 imageLoad：function 调用scroll的refresh $bus（非父子组件）传递事件需用事件总线
   6. bus->Vue.prototype.$bus=new Vue()->this.$bus.$emit('name')->this.$bus.on('name',参数)
   7. 防抖
## tabconrol的吸顶效果
   1. 了解滚动到多少有效果 用 offsetTop ,$el获取组件的元素，需监听图片加载完成后加载
   2. 监听滚动，动态改变样式 
