<!--suppress JSUnresolvedVariable -->
<template>
  <div>
    <scroller :on-infinite="infinite" ref="Scroll">
      <div>
        <ul>
          <template v-for="(item,index) in items">
            <li :class="{'right':index % 2 === 1}" @click="select(item.id)">
              <img :src="item.coverImage" alt="src" style="width: 180px; height: 180px">
              <p v-text="item.name.substr(0, 12) + '...'" class="title"></p>
              <p v-text="item.brief.substr(0, 14) + '...'" class="content"></p>
              <p v-text="'￥'+item.discountPrice" class="price"></p>
            </li>
          </template>
        </ul>
      </div>
    </scroller>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        items: [],
        search: '',
        size: 6, //每次请求每页数量
        sortType: 4, //默认搜索
        currentPage: 0, //当前页面
        totalPages: 1, //总页数
        totalNum: 0, //总商品数
      }
    },
    methods: {
      select(id) {
        this.$router.push({
          path: '/detail/',
          query: {
            id: id
          }
        })
      },
      infinite(done) {
        if (this.currentPage >= this.totalPages) {//当没有更多数据的时候结束加载
          setTimeout(() => {
            console.log("load end");
            done && done(true);
          }, 1000);
        } else {
          setTimeout(() => {
            this.loadMore();
            this.$nextTick(() => {
              self.$refs.Scroll.resize();
              self.$refs.Scroll.finishPullUp()
            });
            done();
          }, 1500)

        }
      },
      loadMore() {
        let self = this;
        let storage = window.localStorage;
        let nextPage = self.currentPage + 1;
        self.$http({
          method: "post",
          url: "http://192.168.4.236:8080/api/commodity/page/" + nextPage,
          data: {
            size: self.size,
            sortType: self.sortType,
            asc: true,
            keyword: storage.getItem("searchKey")
          }
        }).then(res => {
          if (res.data.code === "OK") {
            let data = res.data.data;
            console.log(data);
            self.currentPage = data.currentPage;
            self.totalPages = data.pageCount;
            self.totalNum = data.totalNum;
            for (let i = 0; i < data.dataList.length; i++) {
              self.items.push(data.dataList[i]);
            }
            console.log("load more");
          } else {
            console.log("DATA ERROR IN RESULT DEFAULT")
          }
        }).catch(() => {
          console.log("NETWORK ERROR IN RESULT DEFAULT");
        });

      },
      clear() {
        this.search = '';
      },
    },
  }
</script>
<style scoped>
  p {
    margin: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    display: inline-block;
  }

  ul {
    clear: both;
  }

  li {
    float: left;
    width: 50%;
    padding-right: 5px;
    box-sizing: border-box;
  }

  .right {
    padding-left: 5px;
    padding-right: 0px;
  }

  li img {
    width: 100%;
    border-radius: 5px;
  }

  .title {
    color: #333333;
    font-size: 14px;
    margin-top: 3px;
    font-weight: bold;
  }

  .content {
    color: #707070;
    font-size: 11px;
    min-height: 20px;
  }

  .price {
    color: red;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
  }

</style>
