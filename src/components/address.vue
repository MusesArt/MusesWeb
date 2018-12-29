<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png">
			<p>收货地址</p>
		</div>
		<div class="container">
			<template v-for="(item,index) in address">
				<div class="body">
					<div class="title">
						<span v-text="item.home"></span>
						<p v-text="item.name"></p>
						<p v-text="item.phone"></p>
					</div>
					<div class="content">
						<p>地址:{{item.src}}</p>
					</div>
					<hr color="#eee">
					<div class="bottom">
						<div class="circle" @click="click(item)" :class="{'clicked':item.checked}">
							<img src="../assets/true.png" v-if="item.checked" style="width:18px;height:18px;">
						</div>
						<p>设为默认</p>
						<p>删除</p>
						<img src="../assets/trash.png">
						<p style="margin-right:20px">编辑</p>	
						<img src="../assets/trash.png">
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			address:[]
		}
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#eee')
	},
	mounted(){
		this.$nextTick(function(){
			let self=this;
			self.$http.get('../static/address.json').then(function(res){
				for(var i=0;i<res.data.address.length;i++){
					self.address.push(res.data.address[i]);
				}
				self.$set(self.address[0], 'checked', true);
			})
		})
	},
	methods:{
		click(item){
			let self=this;
			if (typeof item.checked === 'undefined') {
				self.$set(item, 'checked', true);
			}
			else{
				item.checked=!item.checked;
			}
		}
	}
}
</script>
<style scoped>
p{
	margin:0px;
}
hr{
	margin-bottom:10px;
}
.head{
    width:100%;
	height:50px;
	margin-bottom:5px;
	background:white;
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
	margin-right:22px;
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
.title span{
	display:inline-block;
	height:16px;
	color:#e9967a;
	font-size:12px;
	background:#eed5b7;
	text-align:center;
	line-height:16px;
	border:1px solid #e9967a;
	border-radius: 10px;
	min-width: 28px;
	padding:0 3px;
}
.title p{
	display:inline-block;
	color:#333;
	font-size:15px;
}
.title p:nth-child(2){
	font-weight:bold;
	margin-left:10px;
}
.title p:nth-child(3){
	font-weight:bold;
	margin-left:30px;
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
</style>