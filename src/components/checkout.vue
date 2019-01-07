<template>
  <div>
    <div class="head">
      <img @click="back()" src="../assets/angle_left.svg" type="image/svg+xml">
      <p>结算</p>
    </div>
    <div class="container">
      <Flexbox>
        <FlexboxItem @click="selectAddress()">
          <div class="title">
            <span v-text="address.district"></span>
            <p v-text="`收货人：${address.signerName}`"></p>
            <p v-text="address.signerMobile"></p>
          </div>
          <div class="content">
            <p id="addr">地址:{{address.province}}{{address.city}} {{address.address}}</p>
          </div>
        </FlexboxItem>
      </Flexbox>
      <hr>
      <template v-for="(item, index) in carts">
        <Flexbox>
          <FlexboxItem>
            <div class="box_img">
              <img :src="item.commodity.coverImage">
            </div>
            <div class="box_content">
              <p class="box_title" v-text="item.commodity.name"></p>
              <p class="box_message" v-text="item.detail"></p>
              <span class="box_price">¥{{item.commodity.discountPrice}}</span>
              <span class="box_num">×{{item.number}}</span>
            </div>
          </FlexboxItem>
        </Flexbox>
      </template>
      <div class="footer">
        <span class="all">合计:</span>
        <span class="footer_price">￥{{totalPrice | fixed}}</span>
        <span class="order" @click="confirm()">提交订单</span>
      </div>
    </div>
  </div>
</template>
<script>
import cart from "../js/cart.js";
import { Divider, Flexbox, FlexboxItem, ViewBox } from "vux";

export default {
  data() {
    return {
      address: {},
      addressId: 0,
      cartIds: [],
      carts: [],
      totalPrice: 0,
    };
  },
  beforeCreate() {},
  mounted() {
    this.$nextTick(function() {
      window.self = this;
      self.$http
        .get("/api/address/list/" + localStorage.getItem("userId"))
        .then(function(res) {
          self.address = res.data.data[0];
          self.addressId = res.data.data[0].id
        });
      cart.data.cartIds.forEach(element => {
        self.$http.get("/api/cart/" + element).then(function(res) {
          self.carts.push(res.data.data);
        });
        self.totalPrice = cart.data.totalPrice
      });
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    selectAddress() {},
    confirm() {
      self.$http.post('/api/order/', {"cartIds": cart.data.cartIds, "addressId": self.addressId, "userId": localStorage.getItem("userId")})
      .then(res => {
          if (res.data.code == "ERROR") console.log(res.data.msg);
          console.log("success");
          self.$router.go(-1)
          this.items = res.data.data;
          if (this.item == []) {
          }
        })
        .catch(response => {
          console.log("error");
        });
    }
  },
  components: {
    Flexbox,
    FlexboxItem,
    Divider,
    ViewBox
  }
};
</script>
<style scoped>
@import url(../style/normalize.css);
html, body {
  margin: 0; height: 100%; overflow: hidden;
}
p {
  margin: 0;
}
.head {
  width: 100%;
  height: 50px;
  box-shadow: #c0bfc4 1px 1px 5px;
  position: fixed;
  background: white;
  top: 0;
  backface-visibility: hidden;
}

@-webkit-keyframes .head {
  0% {
    opacity: 0;
    -webkit-transform: scale(.3);
  }

  50% {
    opacity: 1;
    -webkit-transform: scale(1.05);
  }

  70% {
    -webkit-transform: scale(.9);
  }

  100% {
    -webkit-transform: scale(1);
  }
}

.head img {
  margin: 10px 0 0 2px;
  width: 30px;
  height: 30px;
  float: left;
}

.head p {
  margin: 0;
  margin-left: 5px;
  color: #333;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
}

.container {
  margin: 0 10px;
  margin-top: 60px;
  margin-bottom: 55px;
}

.body {
  width: 100%;
  height: 1005;
  background-color: white;
  margin-bottom: 10px;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
}

div.title {
  height: 24px;
}

.title span {
  display: inline-block;
  height: 18px;
  color: #e9967a;
  font-size: 12px;
  background: #eed5b7;
  text-align: center;
  line-height: 18px;
  border: 1px solid #e9967a;
  border-radius: 10px;
  min-width: 28px;
  padding: 0 3px;
}

.title p {
  display: inline-block;
  color: #333;
  font-size: 15px;
  height: 18px;
}

.title p:nth-child(2) {
  font-weight: bold;
  margin-left: 10px;
  height: 18px;
}

.title p:nth-child(3) {
  font-weight: bold;
  float: right;
}

.content {
  height: 50px;
}

.content p {
  margin-top: 5px;
  font-size: 15px;
}

.circle {
  width: 18px;
  height: 18px;
  border-radius: 20px;
  float: left;
  border: 1px solid #aaa;
  box-sizing: border-box;
  margin-top: 2px;
  margin-right: 10px;
}

.bottom p,
img {
  float: right;
  font-size: 15px;
  color: #797979;
}

.bottom img {
  width: 20px;
  height: 20px;
}

.bottom p:nth-child(2) {
  float: none;
  display: inline-block;
}

.clicked {
  border: 0px;
}

.add {
  width: 100%;
  position: fixed;
  bottom: 10px;
  left: 0;
  height: 50px;
}

.add_button {
  margin: 0px 10px;
  background-color: #ff4013;
  border-radius: 30px;
  height: 50px;
  color: white;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
  font-size: 16px;
}

hr {
  height: 12px;
  border: 0;
  box-shadow: inset 0 6px 12px -12px rgba(0, 0, 0, 0.5);
  margin: -10px;
}

.box_content {
  width: 80%;
}

.box_message {
  color: #797979;
  margin-left: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 12px;
  margin-top: 4px;
  padding: 3px 0 3px 0;
}

.box_title {
  color: black;
  margin-left: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 15px;
  font-family: sans-serif;
  font-weight: 800;
  margin-top: 16px;
}

.box_content {
  height: 110px;
  float: left;
}

.box_price {
  margin-top: 10px;
  margin-left: 10px;
  font-size: 16px;
  color: #ff4013;
  font-weight: bold;
}

.box_img {
  height: 78px;
  width: 78px;
  background-color: #eee;
  float: left;
  margin-top: 16px;
  overflow: hidden;
}
.box_img img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.box_num {
  float:right;
  font-weight: bold;
}
p#addr {
  font-weight: bold;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  display: block;
  border-top: #eee 1px solid;
  background: white;
  position: fixed;
}
.footer_price {
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
  color: #ff4013;
}
.order {
  background: #ff4013;
  color: white;
  outline: none;
  border: 0px;
  width: 80px;
  height: 50px;
  font-size: 15px;
  padding: 15px;
  margin-right: 10px;
}
</style>
