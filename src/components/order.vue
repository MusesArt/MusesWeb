<template>
	<div class="contain" style="background: #eee">
		<div id="head">
			<img src="../assets/back2.png" @click="back()">
			<p>我的订单</p>
			<img src="../assets/search.png">
		</div>
		<tab :scroll-threshold="5" bar-active-color="#ff7f42" active-color="#ff7f42">
			<tab-item :selected="select==0" @on-item-click="click(0)" style="background:#ededed">全部</tab-item>
			<tab-item :selected="select==1" @on-item-click="click(1)" style="background:#ededed">待付款</tab-item>
			<tab-item :selected="select==2" @on-item-click="click(2)" style="background:#ededed">待发货</tab-item>
			<tab-item :selected="select==3" @on-item-click="click(3)" style="background:#ededed">待收货</tab-item>
			<tab-item :selected="select==4" @on-item-click="click(4)" style="background:#ededed">待评价</tab-item>
		</tab>
		<view-box>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</view-box>
	</div>
</template>
<script>
import { Tab, TabItem, ViewBox } from 'vux'

export default {
	data(){
		return{
			select:0
		}
	},
	created(){
		if(localStorage.getItem("selected")!=null){
			this.select=localStorage.getItem("selected");
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.select = this.$route.query.num;
			console.log("success"+this.select);
			this.$router.push({path:'/order',query:{num:this.select}});
		})
	},
	methods:{
		click(num){
			this.select=num;
			localStorage.setItem("selected",num);
			this.$router.push({path:'/order',query:{num:num}});
		},
		back(){
			this.$router.push({path:'/main/my'});
		}
	},
	components: {
		Tab,
		TabItem,
		ViewBox
	}
}
</script>
<style scoped>
p{
	margin:0px;
}
img{
	width:100%;
	height:100%;
}
.contain{
	background-color: #efefef;
  height: 100%;
}
#head{
	height:50px;
	box-sizing: border-box;
	text-align:center;
}

#head img{
	width:30px;
	height:30px;
	margin-top: 10px;
}
#head img:nth-child(1){
	float:left;
	margin-left:10px;
}
#head img:nth-child(3){
	float:right;
	margin-right:10px;
}
#head p{
	line-height: 50px;
	display: inline-block;
}
body{
  background: #eee !important;
}
</style>
