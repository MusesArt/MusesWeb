<template>
	<div>
		<div style="padding:0 10px">
			<template v-for="(item,index) in no_used">
				<div class="content">
					<div class="content_bar">
						<p class="gray" v-text="item.title"></p>
						<p v-text="item.content"></p>
						<hr color="#eee">
						<p v-text="item.message">{{item.message}}</p>
						<p>立即兑换></p>
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
				no_used:[],
				no_length:0
			}
		},
		beforeCreate(){
			document.querySelector('body').setAttribute('style', 'background-color:#ededed')
		},
		mounted(){
			this.$nextTick(function(){
				let self=this;
				self.$http.get('../static/no_used.json').then(function(res){
					self.no_length=res.data.no_used.length;
					for(var i=0;i<res.data.no_used.length;i++){
						self.no_used.push(res.data.no_used[i])
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
.content{
	position:relative;
	/*border:1px solid #aaa;*/
	padding-top:10px;
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