<template>
	<div id="contain" :style="{height:height-50+'px'}">
		<div class="head">
			<Flexbox :gutter="0" style="margin-bottom: 20px">
				<FlexboxItem :span="9">
				</FlexboxItem>
				<FlexboxItem :span="1" class="head_img">
					<img src="../assets/setting.svg" type="image/svg+xml" style="width:20px;height:20px">
				</FlexboxItem>
				<FlexboxItem :span="1">
					
				</FlexboxItem>
				<FlexboxItem :span="1" class="head_img">
					<img src="../assets/notification.svg" type="image/svg+xml" style="width:20px;height:20px">
				</FlexboxItem>
			</Flexbox>
			<Flexbox :gutter="0">
				<FlexboxItem :span="4">
					<p class="name">夏朗拿督</p>
					<p style="font-size:11px;color:#797979">ID:1160299116</p>
				</FlexboxItem>
				<FlexboxItem :span="6"></FlexboxItem>
				<FlexboxItem :span="2">
						<img src="../assets/recommend1.png" style="border-radius: 100px;height:60px;width:60px">
				</FlexboxItem>
			</Flexbox>
			<Flexbox>
				<FlexboxItem :span="3">
					<p class="head_num">1259</p>
					<p class="head_p">积分</p>
				</FlexboxItem>
				<FlexboxItem :span="3">
					<p class="head_num">5</p>
					<p class="head_p">抵用券</p>
				</FlexboxItem>
				<FlexboxItem :span="3">
					<p class="head_num">289</p>
					<p class="head_p">收藏</p>
				</FlexboxItem>
				<FlexboxItem :span="3">
					<p class="head_num">520</p>
					<p class="head_p">足迹</p>
				</FlexboxItem>
			</Flexbox>
		</div>
		<div class="body">
			<Flexbox>
				<FlexboxItem class="body_bar" @click.native="order(1)">
					<img src="../assets/unpayed.svg" type="image/svg+xml"/>
					<p>待付款</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar" @click.native="order(2)">
					<img src="../assets/undelivered.svg" type="image/svg+xml"/>
					<p>待发货</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar" @click.native="order(3)">
					<img src="../assets/unconfirmed.svg" type="image/svg+xml"/>
					<p>待收货</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar" @click.native="order(4)">
					<img src="../assets/uncommented.svg" type="image/svg+xml"/>
					<p>待评价</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar" @click.native="refund()">
					<img src="../assets/refund.svg" type="image/svg+xml"/>
					<p>退换/售后</p>
				</FlexboxItem>
			</Flexbox>
		</div>
		<group>
			<cell title="分享APP" :is-link="true" class="cell_font">
				<img slot="icon" src="../assets/share.svg" type="image/svg+xml" class="icon">
			</cell>
			<cell title="地址管理" :is-link="true" style="height:40px" @click.native="address()" class="cell_font">
				<img slot="icon" src="../assets/address.svg" type="image/svg+xml" class="icon">
			</cell>
			<cell title="我的评价" :is-link="true" class="cell_font">
				<img slot="icon" src="../assets/my_comment.svg" type="image/svg+xml" class="icon">
			</cell>
		</group>
		<div class="bottom">
			<group>
				<cell title="客户服务" :is-link="true" class="cell_font">
					<img slot="icon" src="../assets/client_service.svg" type="image/svg+xml" class="icon">
				</cell>
				<cell title="意见反馈" :is-link="true" class="cell_font">
					<img slot="icon" src="../assets/feedback.svg" type="image/svg+xml" class="icon">
				</cell>
			</group>
		</div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Group, Cell } from 'vux'
export default {
	data(){
		return{
			height:0
		}
	},
	components:{
		Flexbox,
		FlexboxItem,
		Cell,
		Group
	},
	created(){
		document.querySelector('body').setAttribute('style', 'background-color:white');
		this.height=document.documentElement.clientHeight;
	},
	methods:{
		address(){
			this.$router.push({path:'/address'});
		},
		refund(){
			this.$router.push({path:'/refund'});
		},
		order(num){
			this.$router.push({path:'/order',query:{num:num}});
		}
	}
}
</script>
<style scoped>
img{
	width:100%;
	height:100%;
	object-fit: cover;
}
p{
	margin:0px;
}
#contain{
	position:relative;
	width:100%;
}
.head{
	padding:10px;
	box-sizing: border-box;
	background: #f7f7f7;
}
.head_img{
	padding:5px;
	box-sizing: border-box;
}
.head_num{
	font-size:16px;
	font-weight: bold;
	margin-top: 20px;
}
.head_p{
	font-size:12px;
	color:#797979;
	margin-bottom: 10px;
}
.name{
	font-size:20px;
	color:#333;
	font-weight: bold;
	margin-bottom:3px;
}
.body{
	padding-top:10px;
	background:white;
	margin-top:10px;
}
.body p{
	font-size:13px;
}
.body_bar{
	text-align:center;
}
.body_bar img{
	width:20px;
	height:20px;
}
.body_bar p{
	font-size:12px;
}
.icon{
	width:20px;
	height:20px;
	margin-top:5px;
	margin-right:5px;
}
.cell_font{
	height:30px;
	font-size:15px;
}
.bottom{
	position:absolute;
	bottom:0px;
	left:0px;
	width:100%;
}
</style>