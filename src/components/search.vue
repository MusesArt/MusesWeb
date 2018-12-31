<template>
  <div>
    <div class="container">
      <Flexbox>
        <FlexboxItem :span="10">
          <form action="" method="post">
            <input type="button" class="button" @click="detail()">
            <input type="text" class="text" placeholder="搜索装饰画" v-model="search">
            <img src="../assets/clear.png" class="clear" @click="clear()">
          </form>
        </FlexboxItem>
        <FlexboxItem :span="2">
          <router-link to="/main">
            <p class="back">取消</p>
          </router-link>
        </FlexboxItem>
      </Flexbox>
      <Flexbox>
        <FlexboxItem :span="6">
          <p class="hot">热门搜索</p>
        </FlexboxItem>
      </Flexbox>
      <template v-for="(item,index) in keys">
        <div class="content">
          <p v-text="item.keyword" @click="select(item.keyword)"></p>
        </div>
      </template>
      <div v-show="isShow">
        <Flexbox>
          <FlexboxItem :span="9">
            <p class="hot">历史搜索</p>
          </FlexboxItem>
          <FlexboxItem :span="3">
            <img src="../assets/trash.png" class="img-trash" @click="trash()" style="width:20px;height:20px">
            <p class="p-trash" @click="trash()">清空</p>
          </FlexboxItem>
        </Flexbox>
        <template v-for="(item,index) in historyList">
          <div class="content">
            <p v-text="item.history" @click="select(item.history)"></p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    created: function () {
      this.$http.get("http://localhost:8080/api/hotkey/").then(res => {
        console.log("success")
        if (res.data.code === "OK") {
          this.keys = res.data.data
          console.log(this.keys)
        } else {
          console.log(res.data.code)
          console.log(res.data.msg)
        }
      }).catch(response => {
        console.log("error")
      });
      var storage = window.localStorage;
      var historys = storage.getItem("searchHistory");
      console.log(historys);
      if (historys !== "" && historys != null) {
        console.log("[ " + historys + " ]");
        this.historyList = JSON.parse("[ " + historys + " ]");
        console.log(this.historyList)
      } else {
        this.isShow = false;
      }
    },
    data() {
      return {
        search: '',
        isShow: true,
        keys: '',
        historyList: ''
      }
    },
    methods: {
      clear() {
        this.search = ''
      },
      trash() {
        this.history = '';
        var storage = window.localStorage;
        storage.removeItem("searchHistory");
        this.isShow = false;
      },
      detail() {
        var searchKey = this.search;
        if (searchKey !== "") {
          var storage = window.localStorage;
          storage.setItem("searchKey", searchKey);
          var searchHistory = storage.getItem("searchHistory");
          if (searchHistory !== "" && searchHistory != null) {
            if (searchHistory.search(searchKey) === -1) {
              storage.setItem("searchHistory", searchHistory + ', { "history": "' + searchKey + '" }');
            }
          } else {
            storage.setItem("searchHistory", '{ "history": "' + searchKey + '" }');
          }
          this.$router.push({path:'/result'})
        }
      },
      select(key) {
        this.search = key;
        this.detail();
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
    }
  }
</script>
<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #707070;
    font-size: 14px;
  }

  p {
    margin: 0px;
  }

  .container {
    margin: 0 10px;
    margin-top: 7px;
  }

  form {
    float: left;
    padding: 3px 10px;
    border-radius: 20px;
    width: 98%;
    background: #f6f6f6;
    margin-top: 5px;
  }

  .button {
    float: left;
    width: 20px;
    height: 20px;
    margin-top: 2px;
    margin-right: 10px;
    outline: none;
    background: url(../assets/search.png);
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
    height: 20px;
    width: 82%;
    font-size: 12px;
    line-height: 20px;
    border: 0px;
    outline: none;
    background: #f6f6f6;
  }

  .back {
    margin-left: 20px;
    font-size: 12px;
  }

  .hot {
    font-weight: bold;
    font-size: 21px;
    margin-top: 40px;
    margin-bottom: 10px;
  }

  .content {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 5px 12px;
    float: left;
    color: #333333;
    font-size: 14px;
    background: #F6F6F6;
    border-radius: 30px;
  }

  .img-trash {
    float: right;
    margin-top: 30px;
    margin-right: 10px;
  }

  .p-trash {
    color: #707070;
    font-size: 12px;
    float: right;
    margin-top: 33px;
    margin-right: 5px;
  }
</style>
