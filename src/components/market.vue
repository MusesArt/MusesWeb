<template>
	<div>
		<div class="head">
			<img src="../assets/back2.png">
			<img src="../assets/trash.png" style="float:right;margin-right:5px">
			<p>券集市</p>
		</div>
		<div style="padding:0 15px">
			<div class="title">
				<img src="../assets/true.png">
				<p class="gray">当前积分:{{total}}</p>
			</div>
			<template v-for="(item,index) in market">
				<div class="content">
					<div style="height:20px">
						<div class="progress_box">
							<div class="progress_bar" :style="{width:item.percent*80/100+'px'}">
								
							</div>
						</div>
						<p class="gray" style="font-size:13px">已领取{{item.percent}}%</p>
					</div>
					<div class="content_bar">
						<p class="gray" v-text="item.title"></p>
						<p v-text="item.content"></p>
						<hr color="#eee">
						<p :class="{'empty':item.empty=='已兑完'}">{{item.integral}}积分</p>
						<p :class="{'empty':item.empty=='已兑完'}">{{item.empty}}></p>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
<script>

	export default{
		data(){
			return{
				total:0,
				market:[]
			}
		},
		beforeCreate(){
			document.querySelector('body').setAttribute('style', 'background-color:#ededed')
		},
		mounted(){
			this.$nextTick(function(){
				let self=this;
				self.$http.get('../static/market.json').then(function(res){
					self.total=res.data.total;
					for(var i=0;i<res.data.markets.length;i++){
						self.market.push(res.data.markets[i]);
					}
				})
			})
		}
	}
</script>
<style scoped>
p{
	margin:0px;
}
img{
	float:left;
	width:30px;
	height:30px;
}
.gray{
	color:#797979;
	font-size:15px;
}
.empty{
	color:#797979!important;
}
.head{
	width:100%;
	height:50px;
	/*border:1px solid #aaa;*/
}
.head img{
	margin:10px 0 0 10px;
}
.head p{
	text-align:center;
	color:#333;
	font-size:16px;
	font-weight: bold;
	line-height:50px;
}
.title{
	background:white;
	width:100%;
	height:40px;
	border-radius: 10px;
	padding-top:10px;
	margin-top:10px;
}
.title img{
	margin-left:10px;
	margin-right:10px;
}
.title p{
	float:left;
	line-height:30px;
}
.content{
	position:relative;
	/*border:1px solid #aaa;*/
	padding-top:10px;
}
.progress_box{
	height:10px;
	background:rgba(255,106,106,0.5);
	width:80px;
	border-radius: 10px;
	border:1px solid red;
	float:right;
}
.progress_bar{
	height:10px;
	background:red;
	border-radius:10px;
}
.progress_box + p{
	float:right;
	line-height: 15px;
	margin-right:8px;
}
.content_bar{
	background:white;
	border-radius:10px;
	width:100%;
	height:130px;
	margin-top:8px;
	padding:20px;
	box-sizing: border-box;
}
.content_bar p:nth-child(2){
	color:#333;
	font-size:23px;
	margin:5px 0px 15px 0px;
}
.content_bar p:nth-child(4){
	float:left;
	color:#ff7f00;
	font-size:15px;
}
.content_bar p:nth-child(5){
	float:right;
	color:#ff7f00;
	font-size:15px;
}
</style>