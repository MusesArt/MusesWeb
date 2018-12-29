<template>
	<div>
		<div class="head">
			<Flexbox :gutter="0" style="margin-bottom: 30px">
				<FlexboxItem :span="9">
				</FlexboxItem>
				<FlexboxItem :span="1" class="head_img">
					<img src="../assets/share.png">
				</FlexboxItem>
				<FlexboxItem :span="1">
					
				</FlexboxItem>
				<FlexboxItem :span="1" class="head_img">
					<img src="../assets/share.png">
				</FlexboxItem>
			</Flexbox>
			<Flexbox :gutter="0">
				<FlexboxItem :span="4">
					<p style="font-size:24px;color:#333;font-weight: bold">夏朗拿督</p>
					<p style="font-size:12px;color:#797979">ID:1160299116</p>
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
				<FlexboxItem class="body_bar">
					<img src="../assets/trash.png">
					<p>待付款</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar">
					<img src="../assets/trash.png">
					<p>待发货</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar">
					<img src="../assets/trash.png">
					<p>待收货</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar">
					<img src="../assets/trash.png">
					<p>待评价</p>
				</FlexboxItem>
				<FlexboxItem class="body_bar" @click.native="refund()">
					<img src="../assets/trash.png">
					<p>退换/售后</p>
				</FlexboxItem>
			</Flexbox>
		</div>
		<group>
			<cell title="分享APP" :is-link="true" style="height:40px">
				<img slot="icon" src="../assets/share.png" class="icon">
			</cell>
			<cell title="地址管理" :is-link="true" style="height:40px" @click.native="address()">
				<img slot="icon" src="../assets/share.png" class="icon">
			</cell>
			<cell title="我的评价" :is-link="true" style="height:40px">
				<img slot="icon" src="../assets/share.png" class="icon">
			</cell>
		</group>
		<group>
			<cell title="分享APP" :is-link="true" style="height:40px">
				<img slot="icon" src="../assets/share.png" class="icon">
			</cell>
			<cell title="地址管理" :is-link="true" style="height:40px">
				<img slot="icon" src="../assets/share.png" class="icon">
			</cell>
		</group>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem, Group, Cell } from 'vux'
export default {
	components:{
		Flexbox,
		FlexboxItem,
		Cell,
		Group
	},
	methods:{
		address(){
			this.$router.push({path:'/address'});
		},
		refund(){
			this.$router.push({path:'/refund'});
		}
	}
}
</script>
<style scoped>
img{
	width:100%;
	height:100%;
}
p{
	margin:0px;
}
.head{
	padding:10px;
	box-sizing: border-box;
	background: #f4f4f4;
}
.head_img{
	padding:5px;
	box-sizing: border-box;
}
.head_num{
	font-size:18px;
	font-weight: bold;
	margin-top: 20px;
}
.head_p{
	font-size:14px;
	color:#797979;
	margin-bottom: 10px;
}
.body{
	padding-top:10px;
}
.body p{
	font-size:13px;
}
.body_bar{
	text-align:center;
}
.body_bar img{
	width:30px;
	height:30px;
}
.icon{
	width:25px;
	height:25px;
	margin-top:5px;
	margin-right:5px;
}
</style>