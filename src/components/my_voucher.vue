<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png">
			<p>抵用券</p>
		</div>
		<tab default-color="#797979" bar-active-color="red" custom-bar-width="55px" active-color="#333"> 
			<tab-item :selected="selected1" @on-item-click="select1" active-class="active">
					未使用({{no_length}})
			</tab-item>
			<tab-item :selected="selected2" @on-item-click="select2" active-class="active">
					已使用/过期({{used_length}})			
			</tab-item>
		</tab>
		<view-box>
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</view-box>
		<div class="bottom">
			<input type="button" class="button" value="兑换更多抵用券">
		</div>
	</div>
</template>
<script>
import { Tab, TabItem, ViewBox } from 'vux'
export default {
	data(){
		return{
			selected1:true,
			selected2:false,
			no_length:0,
			used_length:1
		}
	},
	created(){
		if(this.$router.name=='no_used'){
			this.selected1=true;
			this.selected2=false;
		}
		else if(this.$router.name=='used'){
			this.selected1=false;
			this.selected2=true;
		}
	},
	mounted(){
		this.$nextTick(function(){
			let self=this;
			self.$http.get('../static/no_used.json').then(function(res){
				self.no_length=res.data.no_used.length;
			})
		})
	},
	methods:{
		select1(){
			this.$router.push('/my_voucher');
		},
		select2(){
			this.$router.push('/my_voucher/used')
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
a{
	text-decoration: none;
	color:#333;
}
.head{
	width:100%;
	height:50px;
	background:white;
/*	border:1px solid #aaa;*/
}
.head img{
	margin:10px 0 0 10px;
	float:left;
	width:30px;
	height:30px;
}
.head p{
	text-align:center;
	margin-right:40px;
	color:#333;
	font-size:18px;
	font-weight: bold;
	line-height:50px;
}
.bottom{
	position:fixed;
	bottom:0px;
	left:0px;
	width:100%;
	box-sizing: border-box;
	padding:0 10px;
	background:white;
	padding:8px 10px;
	box-sizing: border-box;
}
.active{
	color:#333;
	font-weight:bold;
}
.button{
	width:100%;
	height:50px;
	background:#ff4013;
	color:white;
	border:0px;
	outline:none;
	border-radius: 30px;
	font-size:16px;
}
</style>