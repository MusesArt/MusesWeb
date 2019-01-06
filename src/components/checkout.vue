<template>
	<div>
		<div class="head">
			<img src="../assets/angle_left.svg" type="image/svg+xml" @click="back()">
			<p>结算</p>
		</div>
		<div class="container">
			<Flexbox>
				<FlexboxItem>
					<div class="title">
						<span v-text="item.district"></span>
						<p v-text="item.signerName"></p>
						<p v-text="item.signerMobile"></p>
					</div>
					<div class="content">
						<p>地址:{{item.province}}{{item.city}} {{item.address}}</p>
					</div>
				</FlexboxItem>
			</Flexbox>
		</div>
	</div>
</template>
<script>
import { Flexbox, FlexboxItem } from 'vux'
export default{
	data(){
		return {
			length:0,
			refund:[],
			height1:"120px",
			height2:"80px"
		}
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	mounted(){
		this.$nextTick(function(){
			let self=this;
			self.$http.get('../static/refund.json').then(function(res){
				self.length=res.data.refund.length;
				for(var i=0;i<self.length;i++){
					self.refund.push(res.data.refund[i]);
				}
			})
		})
	},
	methods:{
		back() {
			this.$router.go(-1)
		}
	},
	components: {
      Flexbox,
      FlexboxItem
    }
}
</script>
<style scoped>
p{
	margin:0px;
}
hr{
	margin:2px 0px;
}
.head{
    width:100%;
	height:50px;
	/*border:1px solid #aaa;*/
}
.head img{
	margin:10px 0 0 10px;
	width:30px;
	height:30px;
	float:left;
}
.head p{
	margin-left: 5px;
	color:#333;
	font-size:16px;
	font-weight: bold;
	line-height:50px;
}
.container{
	margin:0 10px;
}
.body_head{
	clear:both;
	height:30px;
}
.body_head p{
	font-size:14px;
	color:#333;
	font-weight:bold;
}
.body{
	width:100%;
	background:white;
	padding:10px;
	box-sizing: border-box;
	margin-bottom:10px;
	border-radius: 10px;
}
.body_content{
	width:100%;
/*	border:1px solid #aaa;*/
	padding:10px 0;
}
.box{
	width:100%;
	/*border:1px solid #aaa;*/
	position:relative;
}
.box_bar{
	margin-bottom:20px;
	position:relative;
	height:70px;
}
.left{
	height:70px;
	width:70px;
	float:left;
	/*border:1px solid #aaa;*/
}
.center{
	height:70px;
	/*border:1px solid #aaa;*/
	width:100%;
	box-sizing: border-box;
	padding-left:80px;
}
.center p:nth-child(1){
	font-size:15px;
	color:#333;
	font-weight:bold;
}
.center p:nth-child(2){
	font-size:14px;
	color:#797979;
	margin-top:3px;
}
.center p:nth-child(3){
	font-size:16px;
	color:red;
	font-weight:bold;
	margin-top:10px;
}
.body_bottom{
	width:100%;
	height:40px;
}
.button{
	float:right;
	border:1px solid #797979;
	margin-right:10px;
	margin-top:10px;
	background:white;
	padding:3px 8px;
	border-radius: 10px;
}
.selected{
	color:red;
	border:1px solid red;
}
</style>