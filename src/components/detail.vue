<template>
	<div>
		<div style="height:0px;">			
			<sticky>
				<tab :line-width="3" offset="40" default-color="#797979" bar-active-color="#333" active-color="#333" custom-bar-width="0px" :scroll-threshold="5" style="z-index:110;" id="tab" :style="{opacity:show}">
					<tab-item disabled>
						<img src="../assets/back.png" style="width:25px;height:25px;margin-top:7px" @click="back">
					</tab-item>
          <template v-for="(item, index) in tabs">
            <tab-item style="font-size:16px;" v-if="selectIndex === index"  @on-item-click="click(index)" v-text="item.name" selected/>
            <tab-item style="font-size:16px;" v-if="selectIndex !== index"  @on-item-click="click(index)" v-text="item.name"/>
          </template>
					<tab-item disabled>
						<img src="../assets/share.png" style="width:25px;height:25px;margin-top:7px" @click="share()">
					</tab-item>
				</tab>
			</sticky>
		</div>
		<view-box>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</view-box>
		<div v-transfer-dom style="background:white">
			<popup v-model="isShare">
				<div style="background: white">
					<p class="share-detail" style="padding-top: 20px">分享给好友</p>
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
import { Sticky, Tab, TabItem, ViewBox, TransferDom, Popup, Flexbox, FlexboxItem } from 'vux'
export default {
	data(){
		return{
      selectIndex:0,
			show:0,
			isShare:false,
      tabs: [
        { name: "商品"},
        { name: "详情"},
        { name: "评价"}
      ]
		}
	},
	created(){
		this.width=document.documentElement.clientWidth;
	},
	mounted(){
	  let storage = window.localStorage;
	  let flag = storage.getItem("selectIndex");
	  if (flag !== "" && flag !== null) {
	    this.selectIndex = parseInt(flag);
    } else {
      this.selectIndex = 0;
    }
		switch(this.$route.name) {
			case 'evaluate':
        this.selectIndex = 2;
				this.show=1.0;
				window.removeEventListener('scroll',this.scroll);
				break;
			case 'detail_main':
        this.selectIndex = 0;
				this.show=0;
				window.addEventListener('scroll',this.scroll);
				break;
			case 'details':
        this.selectIndex = 1;
				this.show=1;
				window.addEventListener('scroll',this.scroll);
				break;
		}
	},
	methods:{
		scroll(){
			var tab=document.getElementById("tab");
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			this.show=scrollTop/330;
		},
		click(idx){
      let storage = window.localStorage;
      storage.setItem("selectIndex", idx);
      console.log("idx: " + idx);
			switch(idx) {
				case 0:
					window.addEventListener('scroll',this.scroll);
					this.show=0;
					this.$router.push({path:'/detail'});
					break;
				case 1:
					this.show=1;
					window.removeEventListener('scroll',this.scroll);
					this.$router.push({path:'/detail/details'});
					break;
				case 2:
				  this.show=1.0;
          window.removeEventListener('scroll',this.scroll);
					this.$router.push({path:'/detail/evaluate'});
			}
		},
		back() {
		  let page = this.$route.query.page;
      if (page === "gallery") {
        this.$router.push({path:'/main'});
      } else if (page === "cart") {
        this.$router.push({path:'/main/shop'});
      } else{
        let storage = window.localStorage;
        let index = parseInt(storage.getItem("tabIndex"));
        if (index === 0) {
          this.$router.push({path:'/result/default'});
        } else if (index === 1) {
          this.$router.push({path:'/result/new'});
        }  else if (index === 2) {
          this.$router.push({path:'/result/hot'});
        } else {
          this.$router.push({path:'/result/price'});
        }
      }
		},
		close_share(){
			this.isShare=false;
		},
		share(){
			this.isShare=true;
		}
	},
  components: { 
    Sticky,
    Tab, 
    TabItem,
    ViewBox,
    Popup,
    Flexbox, 
    FlexboxItem
  },
  directives:{
  	TransferDom
  }
}
</script>
<style scoped>
a{
	text-decoration: none;
	color:#797979;
}
.active{
	color:#333;
  selected: selected;
}
img{
	width:100%;
	height:100%;
}
p{
	margin:0px;
}
.share_bar{
	padding:30px;
}
.share_bar p{
	text-align:center;
	margin-top:8px;
	font-size:14px;
}
.share_close{
	width:20px;
	height:20px;
	margin:0 auto;
	margin-bottom:10px;
}
.share-detail{
  text-align:center;
  /*margin-top:10px !important;*/
  margin-bottom:10px;
  color:#797979
}
</style>
