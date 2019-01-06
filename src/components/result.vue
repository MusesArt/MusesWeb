<template>
  <div style="margin:0 10px">
    <Flexbox>
      <FlexboxItem :span="10">
        <form action="" method="post">
          <img alt="search" src="../assets/search.png" class="search">
          <input type="text" class="text" v-model="search" @click="back()" @keydown.enter.prevent="">
        </form>
      </FlexboxItem>
      <FlexboxItem :span="2">
        <router-link to="/search">
          <p class="back">取消</p>
        </router-link>
      </FlexboxItem>
    </Flexbox>
    <tab active-color="#333" default-color="#333" custom-bar-width="30px" style="margin-bottom: 5px" ref="tab">
      <tab-item @on-item-click="click(1)" class="tab" selected>综合</tab-item>
      <tab-item @on-item-click="click(2)" class="tab">最新</tab-item>
      <tab-item @on-item-click="click(3)" class="tab">最热</tab-item>
      <tab-item @on-item-click="click(4)" class="tab">价格</tab-item>
    </tab>
    <view-box :style="{height:height+'px'}">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </view-box>
  </div>
</template>
<script>
  import {Flexbox, FlexboxItem, Tab, TabItem, ViewBox} from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      ViewBox,
      Tab,
      TabItem
    },
    data() {
      return {
        height: 0,
        search: '',
        tabIndex: 1
      }
    },
    created() {
      this.height = document.documentElement.clientHeight;
      let storage = window.localStorage;
      this.search = storage.getItem("searchKey");
    },
    methods: {
      clear() {
        this.search = '';
      },
      click(index) {
        switch (index) {
          case 1:
            this.$router.push({path: '/result/default'});
            break;
          case 2:
            this.$router.push({path: '/result/new'});
            break;
          case 3:
            this.$router.push({path: '/result/hot'});
            break;
          case 4:
            this.$router.push({path: '/result/price'});
            break;
        }
      },
      back() {
        this.$router.push({
          name: 'search',
          params: {
            key: this.search
          }
        });
      }
    }
  }
</script>
<style scoped>
  a {
    text-decoration: none;
    color: #707070;
    font-size: 14px;
  }

  form {
    float: left;
    padding: 3px 10px;
    border-radius: 20px;
    width: 98%;
    background: #f6f6f6;
    height: 25px;
    margin-top: 10px;
  }

  .search {
    float: left;
    width: 22px;
    height: 22px;
    margin-top: 3px;
    margin-right: 6px;
    outline: none;
    background-size: 100% 100%;
    background-position: 50% 50%;
    border: 0;
  }

  .clear {
    width: 12px;
    height: 12px;
    margin-top: 5px;
    float: right;
  }

  .text {
    float: left;
    color: #707070;
    height: 25px;
    width: 82%;
    font-size: 14px;
    line-height: 25px;
    border: 0px;
    outline: none;
    background: #f6f6f6;
  }

  .back {
    margin-left: 20px;
    font-size: 13px;
    background-size: 100% 100%;
    background-position: 50% 50%;
    border: 0;
  }

  .head {
    color: #333333;
    font-size: 13px;
    font-weight: bold;
    text-align: center;
    margin-right: 25px;
  }

  .tab {
    font-weight: bold;
  }
</style>
