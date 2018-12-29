<template>
	<div>
		<div class="head">
			<img src="../assets/back.png">
			<p>我的订单</p>
		</div>
		<div class="container">
			<tabbar style="position:relative;height:70px;width:100%;background:white">
				<tabbar-item selected>
					<img slot="icon" @click="click('gallery')" style="width:23px;height:23px" src="../assets/00.png">
					<img slot="icon-active" @click="click('gallery')" style="width:23px;height:23px" src="../assets/01.png">		
					<span slot="label" @click="click('gallery')">全部</span>
				</tabbar-item>
				<tabbar-item>
					<img slot="icon" @click="click('gallery')" style="width:23px;height:23px" src="../assets/00.png">
					<img slot="icon-active" @click="click('gallery')" style="width:23px;height:23px" src="../assets/01.png">
					<span slot="label" @click="click('create')">待付款</span>
				</tabbar-item>
				<tabbar-item>
					<img slot="icon" @click="click('gallery')" style="width:23px;height:23px" src="../assets/00.png">
					<img slot="icon-active" @click="click('gallery')" style="width:23px;height:23px" src="../assets/01.png">
					<span slot="label" @click="click('shop')">待发货</span>
				</tabbar-item>
				<tabbar-item>
					<img slot="icon" @click="click('gallery')" style="width:23px;height:23px" src="../assets/00.png">
					<img slot="icon-active" @click="click('gallery')" style="width:23px;height:23px" src="../assets/01.png">
					<span slot="label" @click="click('my')">待收货</span>
				</tabbar-item>
				<tabbar-item>
					<img slot="icon" @click="click('gallery')" style="width:23px;height:23px" src="../assets/00.png">
					<img slot="icon-active" @click="click('gallery')" style="width:23px;height:23px" src="../assets/01.png">		
					<span slot="label" @click="click('gallery')">待评价</span>
				</tabbar-item>
			</tabbar>
		</div>
	</div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
	data(){
		return {
			src1:require("../assets/00.png"),
			src1_active:require("../assets/01.png"),
			src2:require("../assets/10.png"),
			src2_active:require("../assets/11.png"),
			src3:require("../assets/20.png"),
			src3_active:require("../assets/21.png"),
			src4:require("../assets/30.png"),
			src4_active:require("../assets/31.png")
		}
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	components: {
		Tabbar,
		TabbarItem
	}
}
</script>
<style scoped>
p{
	margin:0px;
}
.head{
    width:100%;
	height:50px;
	margin-bottom:10px;
	/*border:1px solid #aaa;*/
}
.head img{
	margin:10px 0 0 10px;
	width:30px;
	height:30px;
	float:left;
}
.head p{
	text-align:center;
	color:#333;
	font-size:16px;
	font-weight: bold;
	line-height:50px;
}
.container{
	margin:0 10px;
}
</style>