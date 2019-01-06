<template>
  <div>
    <div style="position:relative">
      <img src="../assets/back.png" class="back">
      <img src="../assets/share.png" class="share" @click="changeShare">
      <div class="number">
        <p>
          {{indexs}}/{{len}}
        </p>
      </div>
      <swiper :show-dots="false" loop class="swiper" height="330px" v-model="index" @on-index-change="change">
        <template v-for="(item,index) in images.imageUrls">
          <swiper-item>
            <img :src="item">
          </swiper-item>
        </template>
      </swiper>
    </div>
    <div class="head">
      <p v-text="images.name"></p>
      <p v-text="images.brief"></p>
      <p>￥{{images.discountPrice}}
        <small class="old">￥{{images.originalPrice}}</small>
      </p>
    </div>
    <div class="border">
      <div class="bar">
        <div class="top">
          <div class="left">
            <p class="small">促销</p>
          </div>
          <div class="right">
            <div class="right_bar">
              <input type="button" value="领券" class="get">
              <p class="get_text">10元现金券 满200减30</p>
            </div>
            <div class="right_bar">
              <input type="button" value="领券" class="get">
              <p class="get_text">全场满188包邮</p>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <p class="small font">参数</p>
          </div>
          <div class="right">
            <p class="explain font">查看产品相关信息</p>
          </div>
        </div>
      </div>
    </div>
    <div class="border">
      <div class="bar">
        <div class="bottom">
          <div class="left">
            <p class="small font">款式</p>
          </div>
          <div class="right">
            <p class="explain font">查看产品相关信息</p>
          </div>
        </div>
        <div class="footer_bottom">
          <div class="footer_bar">
            <img src="../assets/true.png">
            <p class="small" style="float:left">7天无理由退货</p>
            <img src="../assets/true.png" style="margin-left:30px">
            <p class="small" style="float:left">15天质量问题包退换</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <p>产品评价</p>
    </div>
    <div class="assess_body">
      <scroller lock-y :scrollbar-x=false>
        <div :style="{width:width2+'px'}">
          <template v-for="(item,index) in images_assess">
            <div class="assess_box" :style="{width:width*0.92+'px'}">
              <div class="assess_box_top">
                <div class="box_head">
                  <div class="head_image">
                    <img :src="item.head">
                  </div>
                </div>
                <div class="box_name">
                  <p v-text="item.username"></p>
                  <p v-text="item.date"></p>
                </div>
                <div class="box_active">
                  <div class="box_active_left">
                    <img src="../assets/trash.png">
                    <p>{{item.praise}}</p>
                  </div>
                  <div class="box_active_left">
                    <img src="../assets/trash.png">
                    <p>{{item.message}}</p>
                  </div>
                </div>
              </div>
              <div class="assess_box_center">
                <p v-text="item.content"></p>
              </div>
              <div class="assess_box_bottom">
                <template v-for="image in item.images" class="test">
                  <div class="bottom_img">
                    <img :src="image">
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </scroller>
    </div>
    <div class="all_assess">
      <p>查看全部评论 ></p>
    </div>
    <div class="container">
      <p>为你推荐</p>
    </div>
    <div class="recommend_box">
      <template v-for="(item,index) in foryou">
        <div :class="index%2==0? 'recommend_bar_left' : 'recommend_bar_right'">
          <div class="recommend_image">
            <img :src="item.coverImage">
          </div>
          <div class="recommend_title">
            <p v-text="item.name"></p>
          </div>
          <div class="recommend_price">
            <p>￥{{item.discountPrice}}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="all_assess">
      <p>查看全部为你推荐 ></p>
    </div>
    <div class="end">
      查看图文详情
    </div>
    <div class="footer">
      <div class="footer_left">
        <img src="../assets/heart-regular.svg" type="image/svg+xml">
        <p>收藏</p>
      </div>
      <div class="footer_left">
        <img src="../assets/client_service.svg" type="image/svg+xml">
        <p>客服</p>
      </div>
      <div class="footer_left">
        <img src="../assets/21.png">
        <p>购物车</p>
      </div>
      <div class="hide_button">
        <input type="button" class="buy_button left_button" value="加入购物车" @click="buying">
        <input type="button" class="buy_button right_button" value="立即购买" @click="buying">
      </div>
    </div>
    <div v-transfer-dom>
      <popup v-model="isShow">
        <div class="popup_box">
          <div class="popup_bar" style="height:110px">
            <div class="popup_img">
              <img :src="currentImage">
            </div>
            <div class="popup_head">
              <p>￥{{images.discountPrice}}
              </p>
              <div>
                已选:
                <template v-for="(item,index) in current">
                  {{item}}
                </template>
              </div>
            </div>
            <div class="popup_close" @click="close">
              <img src="../assets/clear.png">
            </div>
          </div>
          <template v-for="(item1,index1) in images.attributes">
            <p class="color" v-text="item1.name"></p>
            <div class="popup_bar">
              <template v-for="(item2,index2) in item1.parameters">
                <input type="button" class="popup_color" :class="{'selected':item2.value==current[index1+1]}"
                       :value="item2.value" @click="changeColor(index1,index2,item1,item2)">
              </template>
            </div>
          </template>
          <p class="color">数量</p>
          <div class="popup_bar">
            <input type="button" value="-" class="popup_add popup_button" @click="numchange(-1)">
            <input type="text" v-model="num" class="popup_text">
            <input type="button" value="+" class="popup_button popup_decrease" @click="numchange(1)">
          </div>
          <div class="popup_bar" style="width:100%;height:40px">
            <input type="button" class="buy_button left_button" value="加入购物车" style="width:50%;height:40px">
            <input type="button" class="buy_button right_button" value="立即购买" style="width:50%;height:40px">
          </div>
        </div>
      </popup>
    </div>
    <div v-transfer-dom>
      <popup v-model="isShare" style="background:white">
        <div>
          <p style="text-align:center;margin-top:15px;margin-bottom:10px;color:#797979">分享给好友</p>
          <Flexbox>
            <FlexboxItem>
              <div class="share_bar">
                <img src="../assets/qq.png">
                <p>qq好友</p>
              </div>
            </FlexboxItem>
            <FlexboxItem>
              <div class="share_bar">
                <img src="../assets/weixin.png">
                <p>微信好友</p>
              </div>
            </FlexboxItem>
            <FlexboxItem>
              <div class="share_bar">
                <img src="../assets/weibo.png">
                <p>微博好友</p>
              </div>
            </FlexboxItem>
          </Flexbox>
          <Flexbox style="margin-top:-20px">
            <FlexboxItem>
              <div class="share_bar">
                <img src="../assets/qq.png">
                <p>qq好友</p>
              </div>
            </FlexboxItem>
            <FlexboxItem>
              <div class="share_bar">
                <img src="../assets/weixin.png">
                <p>微信好友</p>
              </div>
            </FlexboxItem>
            <FlexboxItem>
              <div class="share_bar">
                <img src="../assets/weibo.png">
                <p>微博好友</p>
              </div>
            </FlexboxItem>
          </Flexbox>
          <Flexbox>
            <div class="share_close" @click="close_share">
              <img src="../assets/clear.png">
            </div>
          </Flexbox>
        </div>
      </popup>
    </div>
  </div>
</template>
<script>
  import {Swiper, SwiperItem, Scroller, Sticky, Tab, TabItem, Popup, TransferDom, Flexbox, FlexboxItem} from 'vux'
  import detail from '../js/detail.js' 

  export default {
    data() {
      return {
        currentImage: '',
        images: [],
        images_assess: [],
        current: [],
        num: 1,
        isShare: false,
        indexs: 1,
        index: 0,
        scroll: "false",
        len: 0,
        width: 0,
        isShow: false,
        foryou: []
      }
    },
    beforeCreate() {
      document.querySelector('body').setAttribute('style', 'background-color:white')
    },
    created() {
      this.width = document.documentElement.clientWidth;
    },
    mounted() {
      this.$nextTick(function () {
        let self = this;
        var id = this.$route.query.id;
        self.$http.get('http://localhost:8080/api/commodity/' + id).then(function (res) {
          if (res.data.code == "OK") {
            self.images = res.data.data;
            self.len = self.images.imageUrls.length;
            self.currentImage = self.images.coverImage;
            self.current.push(self.images.commoditySN);
            for (var i = 0; i < self.images.attributes.length; i++) {
              self.current.push(self.images.attributes[i].parameters[0].value);
            }
            detail.set(res.data.data.description)
          } else {
            console.log(res.data.code);
            console.log(res.data.msg);
          }
        }).catch(function (error) {
          console.log(error);
        })
        self.$http.get("http://localhost:8080/api/comment/" + id + "/1/", {
          params: {
            size: 10
          }
        }).then(function (res) {
          if (res.data.code == "OK") {
            self.images_assess = res.data.data.dataList;
            console.log(self.images_assess);
          } else {
            console.log(res.data.code);
            console.log(res.data.msg);
          }
        });
        self.$http.get('http://localhost:8080/api/commodity/1', {
          params: {
            size: 4,
            sortType: 4,
            isASC: true,
            keyword: ""
          }
        }).then(function (res) {
          if (res.data.code == "OK") {
            self.foryou = res.data.data.dataList;
            console.log(self.foryou);
          } else {
            console.log(res.data.code);
            console.log(res.data.msg);
          }
        }).catch(function (error) {
          console.log(error);
        })
      })
    },
    methods: {
      buying() {
        this.isShow = true;
      },
      change(index) {
        this.indexs = index + 1;
      },
      close() {
        this.isShow = false;
      },
      numchange(way) {
        let self = this;
        if (way < 0) {
          self.num--;
          if (self.num < 1) {
            self.num = 1;
          }
        } else {
          self.num++;
        }
      },
      changeColor(index1, index2, item1, item2) {
        this.current[index1 + 1] = item2.value;
        if (item1.imageFlag == true)
          this.currentImage = item2.image;
        this.$forceUpdate();
      },
      changeShare() {
        this.isShare = true;
      },
      close_share() {
        this.isShare = false;
      }
    },
    components: {
      Swiper,
      SwiperItem,
      Scroller,
      Sticky,
      Tab,
      TabItem,
      Popup,
      Flexbox,
      FlexboxItem
    },
    directives: {
      TransferDom
    },
    computed: {
      width2: function () {
        return this.assess_len * (this.width * 0.96);
      }
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

  p {
    margin: 0px;
  }

  .container {
    margin: 0 auto;
    width: 92%;
  }

  .container p {
    margin-top: 30px;
    font-weight: bold;
    font-size: 23px;
    margin-bottom: 16px;
  }

  .swiper {
    position: relative;
    margin: 0px;
  }

  .back {
    position: absolute;
    top: 11px;
    left: 25px;
    width: 25px;
    height: 25px;
    z-index: 100;
  }

  .share {
    position: absolute;
    top: 11px;
    right: 25px;
    width: 25px;
    height: 25px;
    z-index: 100;
  }

  .number {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    color: white;
    background: #999;
    font-size: 13px;
    font-weight: lighter;
    font-family: 微软雅黑;
    border-radius: 10px;
    padding: 0px 10px;
    overflow: hidden;
    width: 20px;
  }

  .active {
    font-weight: bold;
  }

  .head {
    margin: 0 auto;
    margin-top: 10px;
    width: 92%;
    position: relative;
  }

  .head p:nth-child(1) {
    color: #333;
    font-weight: bold;
    font-size: 17px;
  }

  .head p:nth-child(2) {
    font-size: 14px;
    color: #797979;
    margin-top: 10px;
  }

  .head p:nth-child(3) {
    font-size: 23px;
    color: #ff0000;
    font-weight: bold;
    margin-top: 12px;
  }

  .old {
    font-size: 14px;
    color: #797979;
    font-weight: normal;
    text-decoration: line-through;
  }

  .border {
    margin: 0 auto;
    background: #f6f6f6;
    width: 92%;
    margin-top: 15px;
    border-radius: 10px;
  }

  .bar {
    margin: 0 10px;
    height: 100%;
  }

  .top {
    float: left;
    width: 100%;
    border-bottom: 1px dashed #aaa;
    padding-top: 20px;
  }

  .bottom {
    width: 100%;
    clear: both;
    height: 45px;
  }

  .left {
    float: left;
    width: 15%;
  }

  .right {
    float: left;
    width: 85%;
  }

  .small {
    color: #797979;
    font-size: 13px;
  }

  .right_bar {
    clear: both;
    width: 100%;
  }

  .get {
    float: left;
    border: 1px solid red;
    border-radius: 15px;
    color: red;
    font-size: 10px;
    margin-right: 5px;
  }

  .get_text {
    float: left;
    margin-bottom: 20px;
    color: #333;
    font-size: 13px;
  }

  .explain {
    color: #333;
    font-size: 14px;
  }

  .font {
    line-height: 45px;
    display: inline;
  }

  .footer_bar {
    clear: both;
    border-top: 1px dashed #aaa;
    height: 30px;
    padding-top: 15px;
  }

  .footer_bar img {
    width: 20px;
    height: 20px;
    float: left;
  }

  .assess {
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
  }

  .assess_box {
    background: #eee;
    float: left;
    margin-left: 10px;
    padding-bottom: 20px;
  }

  .assess_box_top {
    height: 80px;
  }

  .box_head {
    width: 60px;
    height: 100%;
    float: left;
  }

  .head_image {
    margin-top: 15px;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 40px;
    overflow: hidden;
  }

  .box_name {
    width: 100px;
    height: 100%;
    float: left;
  }

  .box_name p:first-child {
    color: #333;
    font-weight: bold;
    margin-top: 18px;
    margin-left: 10px;
    font-size: 15px;
  }

  .box_name p:last-child {
    color: #797979;
    margin-left: 10px;
    font-size: 14px;
  }

  .box_active {
    width: 120px;
    height: 100%;
    float: right;
  }

  .box_active_left {
    width: 58px;
    float: left;
    height: 100%;
  }

  .box_active_left img {
    width: 16px;
    height: 16px;
    margin-top: 30px;
    margin-left: 5px;
    float: left;
  }

  .box_active_left p {
    float: left;
    margin-top: 28px;
    color: #797979;
    font-size: 14px;
  }

  .assess_box_center {
    min-height: 30px;
  }

  .assess_box_center p {
    margin-left: 13px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #333;
  }

  .bottom_img {
    width: 90px;
    height: 50px;
    margin-top: 10px;
    float: left;
    margin-left: 15px;
    border-radius: 5px;
    overflow: hidden;
  }

  .all_assess {
    color: #ff4013;
    margin-left: 15px;
    margin-top: 15px;
    font-size: 13px;
    margin-bottom: 20px;
    clear: left;
  }

  .recommend {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-left: 10px;
  }

  .recommend_box {
    width: 100%;
    padding-left: 10px;
    clear: both;
  }

  .recommend_bar_left {
    float: left;
    width: 46%;
  }

  .recommend_bar_right {
    float: left;
    width: 46%;
    margin-left: 10px;
  }

  .recommend_image {
    width: 100%;
    overflow: hidden;
    height: 150px;
    border-radius: 5px;
  }

  .recommend_title p {
    margin-top: 5px;
    font-size: 15px;
    color: #333;
    font-weight: bold;
  }

  .recommend_price p {
    color: #ff0000;
    font-weight: bold;
    margin-top: 5px;
    font-size: 17px;
    margin-bottom: 10px;
  }

  .end {
    margin: 0 auto;
    width: 100px;
    height: 30px;
    border: 1px solid #aaa;
    color: #333;
    font-weight: bold;
    line-height: 30px;
    border-radius: 20px;
    margin-bottom: 50px;
    font-size: 14px;
    text-align: center;
    padding: 0 10px;
  }

  .footer {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0px;
    background-color: white;
    bottom: 0px;
  }

  .hide_button {
    float: right;
    margin-right: 20px;
    margin-top: 10px;
  }

  .buy_button {
    color: white;
    border: 0px;
    outline: none;
    margin: 0px;
    float: left;
    width: 85px;
    height: 30px;
  }

  .left_button {
    background: #333;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }

  .right_button {
    background: #ff4013;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .footer_left {
    width: 50px;
    float: left;
    height: 100%;
    font-size: 13px;
  }

  .footer_left img {
    width: 25px;
    height: 25px;
  }

  .popup_box {
    padding: 10px;
    background: white;
  }

  .popup_bar {
    width: 100%;
    clear: both;
    position: relative;
  }

  .popup_img {
    width: 100px;
    height: 100px;
    float: left;
  }

  .popup_head {
    height: 50px;
    float: left;
    width: 200px;
    padding-top: 40px;
    padding-left: 8px;
  }

  .popup_head div {
    font-size: 14px;
    float: left;
  }

  .popup_head p:nth-child(1) {
    color: #ff0000;
    font-size: 17px;
    font-weight: 550;
  }

  .color {
    clear: both;
    margin-top: 10px;
    color: #797979;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .popup_close {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .popup_color {
    min-width: 65px;
    background: #eee;
    text-align: center;
    margin-right: 10px;
    font-size: 14px;
    border: 0px;
    height: 30px;
    border-radius: 15px;
    outline: none;
    padding: 5px 10px;
    margin-bottom: 8px;
  }

  .popup_button {
    width: 40px;
    height: 30px;
    outline: none;
    border: 0px;
    font-size: 20px;
    float: left;
  }

  .popup_add {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  .popup_decrease {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .popup_text {
    width: 20px;
    height: 28px;
    border: 0px;
    font-size: 16px;
    padding-left: 10px;
    background-color: #eee;
    outline: none;
    float: left;
    margin-bottom: 15px;
  }

  .selected {
    color: #ff6461;
    border: 1px solid #ff6461;
    background: rgba(255, 100, 97, 0.2);
  }

  .share_bar {
    padding: 30px;
  }

  .share_bar p {
    text-align: center;
    margin-top: 8px;
    font-size: 14px;
  }

  .share_close {
    width: 20px;
    height: 20px;
    margin: 0 auto;
    margin-bottom: 10px
  }
</style>
