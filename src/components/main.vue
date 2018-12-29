<template>
	<div>
		<view-box>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</view-box>
		<tabbar style="position:fixed;background:white;height:45px;padding-top: 5px">
			<div @click="click('gallery')" :style="{width:width/4+'px'}">
				<tabbar-item link="/main" selected>
					<img slot="icon" :src="select == 'gallery' ? src1_active : src1" @click="click('gallery')" style="width:23px;height:23px">
					
					<span slot="label" class="label" :class="select == 'gallery' ? 'select' : 'no_select'" @click="click('gallery')">画廊</span>
				</tabbar-item>
			</div>
			<div @click="click('create')" :style="{width:width/4+'px'}">
				<tabbar-item link="/main/create">
					<img slot="icon" :src="select == 'create' ? src2_active : src2" @click="click('create')" style="width:23px;height:23px;">
					<span slot="label" class="label" :class="select == 'create' ? 'select' : 'no_select'" @click="click('create')">创作</span>
				</tabbar-item>
			</div>
			<div @click="click('shop')" :style="{width:width/4+'px'}">
				<tabbar-item link="/main/shop">
					<img slot="icon" :src="select == 'shop' ? src3_active : src3" @click="click('shop')" style="width:23px;height:23px">
					<span slot="label" class="label" :class="select == 'shop' ? 'select' : 'no_select'" @click="click('shop')">购物车</span>
				</tabbar-item>
			</div>
			<div @click="click('my')" :style="{width:width/4+'px'}">
				<tabbar-item link="/main/my">
					<img slot="icon" :src="select == 'my' ? src4_active : src4" @click="click('my')" style="width:23px;height:23px">
					<span slot="label" class="label" :class="select == 'my' ? 'select' : 'no_select'" @click="click('my')">我的</span>
				</tabbar-item>
			</div>
		</tabbar>
	</div>
</template>
<script>
import { Tabbar, TabbarItem, ViewBox } from 'vux'
export default {
	data(){
		return{
			select:"gallery",
			width:0,
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
	created(){
		this.width=document.documentElement.clientWidth;
	},
	mounted(){
		this.select=this.$route.name;
	},
	methods:{
		click:function(value){
			this.select=value;
		}
	},
	components: {
		Tabbar,
		TabbarItem,
		ViewBox
	}
}
</script>
<style scoped>
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.label{
	text-decoration: none;
	border:0px;
	transform: translateY(-17px);
	display:inline-block;
	font-size:10px;
}
.bottom{
	margin-top:-10px;
	font-size:13px;
	text-decoration: none;
}
a{
	text-decoration: none;
}
.no_select{
	color:black;
}
.select{
	color:red;
}
.router-link-exact-active{
	color:blue;
}
</style>