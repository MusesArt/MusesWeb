<template>
	<div>
		<div class="head">
			<img src="../assets/angle_left.svg" type="image/svg+xml" @click="back()">
			<p>结算</p>
		</div>
		<div class="container">
			<Flexbox>
				<FlexboxItem @click="">
					<div class="title">
						<span v-text="address.district"></span>
						<p v-text="`收货人：${address.signerName}`"></p>
						<p v-text="address.signerMobile"></p>
					</div>
					<div class="content">
						<p>地址:{{address.province}}{{address.city}} {{address.address}}</p>
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
			address: {}
		}
	},
	beforeCreate () {
	},
	mounted(){
		this.$nextTick(function(){
			let self=this;
			self.$http.get('/api/address/list/' + localStorage.getItem("userId")).then(function(res){
				self.address = res.data.data[0];
				console.log(res.data.data[0])
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
	margin:10px 0 0 2px;
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

a{
	text-decoration: none;
}
p{
	margin:0px;
}
hr{
	margin-bottom:10px;
}
.container{
	margin:0 10px;
}
.body{
	width:100%;
	height:137px;
	background-color: white;
	margin-bottom:10px;
	box-sizing: border-box;
	padding:10px;
	border-radius: 10px;
}
div.title {
	height: 18px;
}
.title span{
	display:inline-block;
	height:18px;
	color:#e9967a;
	font-size:12px;
	background:#eed5b7;
	text-align:center;
	line-height:18px;
	border:1px solid #e9967a;
	border-radius: 10px;
	min-width: 28px;
	padding:0 3px;
}
.title p{
	display:inline-block;
	color:#333;
	font-size:15px;
	height: 18px;
}
.title p:nth-child(2){
	font-weight:bold;
	margin-left:10px;
	height: 18px;
}
.title p:nth-child(3){
	font-weight:bold;
	float: right;
}
.content{
	height:50px;
}
.content p{
	margin-top:5px;
	font-size:15px;
}
.circle{
	width:18px;
	height:18px;
	border-radius: 20px;
	float:left;
	border:1px solid #aaa;
	box-sizing: border-box;
	margin-top:2px;
	margin-right:10px;
}
.bottom p,img{
	float:right;
	font-size:15px;
	color:#797979;
}
.bottom img{
	width:20px;
	height:20px;
}
.bottom p:nth-child(2){
	float:none;
	display:inline-block;
}
.clicked{
	border:0px;
}
.add{
	width:100%;
	position:fixed;
	bottom:10px;
	left:0;
	height:50px;
}
.add_button{
	margin:0px 10px;
	background-color: #ff4013;
	border-radius: 30px;
	height:50px;
	color: white;
	text-align: center;
	line-height: 50px;
	box-sizing: border-box;
	font-size: 16px;
}
</style>