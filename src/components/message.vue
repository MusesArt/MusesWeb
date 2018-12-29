<template>
	<div style="background:white;overflow: hidden">
		<div class="head">
			<img src="../assets/back2.png">
			<p>消息</p>
		</div>
		<template v-for="(item,index) in messages">
			<div class="body">
				<div class="body_left">
					<div class="circle">
						<img src="../assets/recommend3.png" style="width:48px;height:48px">
					</div>
				</div>
				<div class="body_content" :style="{width:width-170+'px'}">
					<p v-text="item.title"></p>
					<p v-text="item.message"></p>
				</div>
				<div class="body_right">
					<p style="" v-text="item.date"></p>
					<badge :text="item.num | message" style="position:absolute;bottom:5px;right:0px;" v-if="item.num!=1"></badge>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
	import { Cell, Flexbox, FlexboxItem ,Badge} from 'vux'
	export default{
		data(){
			return{
				messages:[],
				width:0
			}
		},
		beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:white')
	},
		created(){
			this.width=document.documentElement.clientWidth;
		},
		mounted(){
			this.$nextTick(function(){
				let self=this;
				self.$http.get('../static/message.json').then(function(res){
					for(var i=0;i<res.data.messages.length;i++){
						self.messages.push(res.data.messages[i])
					}
				})
			})
		},
		components: {
			Cell,
			Flexbox,
			FlexboxItem,
			Badge
		},
		filters:{
			message:function(value){
				var str="9";
				if(value<=99)
					return value;
				else{
					while((value/10)>=10){
						str+="9";
						value=value/10;
					}
					return str+"+";
				}
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
	width:100%;
	height:50px;
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
.body{
	padding:0px 10px;
	margin-top:10px;
	height:60px;
	/*border:1px solid #aaa;*/
}
.circle{
	overflow:hidden;
	/*border:1px solid #aaa;*/
	width:48px;
	height:48px;
	border-radius:40px;
}
.body_left{
	/*border:1px solid #aaa;*/
	width:60px;
	height:50px;
	float:left;
}
.body_content{
	/*border:1px solid #aaa;*/
	height:50px;
	float:left;
	position:relative;
}
.body_content p:first-child{
	font-weight:bold;
	font-size: 16px;
	margin-top:3px;
	color:#333;
}
.body_content p:last-child{
	font-size:13px;
	color:#797979;
	margin-top:7px;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow:hidden;
}
.body_right{
	width:80px;
	height:50px;
	float:left;
	position:relative;
}
.body_right p:first-child{
	font-size:12px;
	color:#797979;
	text-align:right;
	position:absolute;
	top:0px;
	right:0px;
}
</style>