<template xmlns:flexbox-item="http://www.w3.org/1999/html">
  <div>
    <div class="head">
      <Flexbox>
        <FlexboxItem :span="4">
          <p class="head_left">创作</p>
        </FlexboxItem>
        <FlexboxItem :span="6"></FlexboxItem>
        <FlexboxItem :span="2">
        </FlexboxItem>
      </Flexbox>
    </div>
    <div class="filters">
      <template v-for="category in categories">
        <div align="center" class="item">
          <div class="item-area">
            <img :src=category.image class="image">
            <div class="content" v-text="category.categoryName"></div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
  import { Flexbox, FlexboxItem, Swiper } from 'vux'

export default {
  data() {
    return {
      categories: [{
        image:"https://s2.ax1x.com/2019/01/06/FbCHyD.png",
        categoryName:"经典"
      },{
        image:"https://s2.ax1x.com/2019/01/06/Fb9OP0.png",
        categoryName:"现代"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPkwj.png",
        categoryName:"素描"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPnpV.png",
        categoryName:"马赛克"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPulT.png",
        categoryName:"迷幻"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPhng.png",
        categoryName:"印象派"
      },{
        image:"https://s2.ax1x.com/2019/01/06/Fb9sDH.png",
        categoryName:"油画"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbCNLQ.png",
        categoryName:"抽象"
      },{
        image:"https://s2.ax1x.com/2019/01/06/Fb9orQ.png",
        categoryName:"中国风"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPlm4.png",
        categoryName:"最新"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPdXD.png",
        categoryName:"我的滤镜"
      },{
        image:"https://s2.ax1x.com/2019/01/06/FbPRc8.png",
        categoryName:"自定义滤镜"
      }
      ]
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Swiper
  }
}
</script>
<style>
  .head .head_left {
    font-size: 24px;
    margin-top: 20px;
    margin-left: 20px;
    font-weight: 400;
  }
  .title .title_left{
    font-size: 16px;
    margin-top: 5px;
    margin-left: 20px;
    font-weight: 400;
  }
  .image {
    width: 100%;
    height: 100%;
  }
  .item{
    float:left;
    width:28%;
    box-sizing: border-box;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  .item-area{
    width: 110px;
    height: 100px;
    position: relative;
  }
  .filters {
    margin-left: 10px;
    margin-right: 10px;
  }
  .content {
    position: absolute;
    left: 0px;
    bottom: 0px;
    height: 20px;
    background: rgba(255,255,255,0.8);
    width: 100%;
    font-size: 14px;
    text-align: center;
    vertical-align: middle;
    padding-top: 2px;
    padding-bottom: 2px;
  }

</style>
