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
   1. 封装goodsList组件 props:goods->list[30]
   2. 封装goodsListItem组件 props:goodsItem->遍历
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
   2. 监听滚动，动态决定tabbcontrol2是否显示
## home记录状态的问题
   1. 让我们的home不要随意销毁 keep-alive
   2. 让home中内容保存原来的位置
    + 离开时，保存一个位置信息
    + 进来时。将位置设置为该位置
## 详情页 
   1. 详情页 头部 轮播图
   2. 详情页 商品信息 商品详情 商品参数 评论信息展示 推荐商品
   3. 详情页mixin使用
   4. 详情页滚动bug
   5. 详情页回到顶部
   6. 详情页联动效果 
    + 在detail中监听标题的点击获取index
    + 滚动到对应的主题
     - 获取所有主题的offsettop
     - 在图片加载完成后高高度才能获取正确 （created（没有渲染元素） mounted（数据还没有获取到）       $nextTick(图片高度没有计算在内)）
     - 
   7. 购物车功能
   8. 滚动内容显示标题
    01.  ``` // if(this.currentIndex!=i&&(i<this.themeTopYs.length-1&&positionY>=this.themeTopYs[i]&&         positionY<this.themeTopYs[i+1])||
        // (i===this.themeTopYs.length-1&&positionY>this.themeTopYs[i])){
        //  this.currentIndex=i;
        //  console.log(this.currentIndex)
        //  this.$refs.ef.currentIndex=this.currentIndex
        // } 
        ``` 
    02. (hack) MAX_VALUE  this.themeTopYs.push(Number.MAX_VALUE);加入一个最大值
        ```  if(this.currentIndex!=i&&(positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
           this.currentIndex=i;
           this.$refs.ef.currentIndex=this.currentIndex
        }
        ``` 
   9. 底部工具栏的封装
   10. 将商品添加到购物车 npm install vuex@3.1.0 --save（安装vuex）