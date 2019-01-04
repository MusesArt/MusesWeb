<template>
	<div>
		<div style="height:0px;">			
			<sticky>
				<tab :line-width="3" offset="40" default-color="#797979" bar-active-color="red" active-color="#333" custom-bar-width="30px" :scroll-threshold="5" style="z-index:110;" id="tab" :style="{opacity:show}">
					<tab-item disabled>
						<img src="../assets/back.png" style="width:25px;height:25px;margin-top:7px" @click="back">
					</tab-item>
					<tab-item style="font-size:16px;" :selected="selected1" @on-item-click="click(1)">
						商品
					</tab-item>
					<tab-item style="font-size:16px;" :selected="selected2">详情</tab-item>
					<tab-item style="font-size:16px;" :selected="selected3" @on-item-click="click(2)">
						评价
					</tab-item>
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
				<div>
					<p style="text-align:center;margin-top:5px;margin-bottom:10px;color:#797979">分享给好友</p>
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
import { Sticky, Tab, TabItem, ViewBox, TransferDom, Popup, Flexbox, FlexboxItem } from 'vux'
export default {
	data(){
		return{
			selected1:false,
			selected2:false,
			selected3:false,
			show:0,
			isShare:false
		}
	},
	created(){
		this.width=document.documentElement.clientWidth;
	},
	mounted(){
		this.selected1=true;
		if(this.$route.name=='evaluate'){
			this.selected1=false;
			this.selected2=false;
			this.selected3=true;
			this.show=1.0;
			window.removeEventListener('scroll',this.scroll);
		}
		else if(this.$route.name=='detail_main'){
			this.selected1=true;
			this.selected2=false;
			this.selected3=false;
			this.show=0;
			window.addEventListener('scroll',this.scroll);
		}
	},
	methods:{
		scroll(){
			var tab=document.getElementById("tab");
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			this.show=scrollTop/330;
		},
		click(idx){
			if(idx==1){
				this.$router.push({path:'/detail'});
				window.addEventListener('scroll',this.scroll);
				this.show=0;
			}
			else{
				this.$router.push({path:'/detail/evaluate'});
				this.show=1.0;
				window.removeEventListener('scroll',this.scroll);
			}

		},
		back(){
			this.$router.push({path:'/result/default'});
      // this.$router.go(-1)
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
</style>
